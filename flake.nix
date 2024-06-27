{
    inputs = {
        nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
        rust-overlay.url = "github:oxalica/rust-overlay";
    };

    outputs = {
        nixpkgs,
        rust-overlay,
        ...
    }: let
        overlays = [(import rust-overlay)];

        # Helper generating outputs for each desired system
        forAllSystems = nixpkgs.lib.genAttrs [
            "x86_64-darwin"
            "x86_64-linux"
            "aarch64-darwin"
            "aarch64-linux"
        ];

        # Import nixpkgs' package set for each system.
        nixpkgsFor = forAllSystems(system:
            import nixpkgs {
                inherit system overlays;
            });
    in {
        formatter = forAllSystems (system:  nixpkgsFor.${system}.alejandra);
        devShells = forAllSystems (system: let
            pkgs = import nixpkgs {
                inherit system overlays;
            };

            inherit (pkgs.stdenv) isLinux;

            sslCertFile = "dev-ops/localhost.pem";
            sslKeyFile = "dev-ops/localhost-key.pem";

            rust-toolchain = pkgs.rust-bin.stable.latest.default.override {
                extensions = ["rust-analyzer" "rust-src" "rust-std"];
                targets = ["wasm32-unknown-unknown"];
            };

            packages-linux = with pkgs; [
                rust-toolchain
                pkg-config
                gtk3
                webkitgtk
                libayatana-appindicator.dev
                alsa-lib.dev
            ];

            packages-darwin = with pkgs; [
                rust-toolchain
                bun
                curl
                wget
                pkg-config
                libiconv
                pkgs.mkcert
                pkgs.nss.tools
                darwin.apple_sdk.frameworks.Security
                darwin.apple_sdk.frameworks.CoreServices
                darwin.apple_sdk.frameworks.CoreFoundation
                darwin.apple_sdk.frameworks.Foundation
                darwin.apple_sdk.frameworks.AppKit
                darwin.apple_sdk.frameworks.WebKit
                darwin.apple_sdk.frameworks.Cocoa
            ];

            packages =
                if isLinux
                then packages-linux
                else packages-darwin;
        in {
            default = pkgs.mkShell {
                name = "mono-starter";

                buildInputs = packages;

                # env
                NODE_TLS_REJECT_UNAUTHORIZED=0;

                shellHook = ''
                    if [ ! -f ${sslCertFile} ] || [ ! -f ${sslKeyFile} ]; then
                        echo "SSL files are missing. Generating new SSL certificate and key..."
                        mkcert -install &> /dev/null
                        mkcert -cert-file ${sslCertFile} -key-file ${sslKeyFile} localhost &> /dev/null
                    fi
                '';
            };
        });
    };
}
