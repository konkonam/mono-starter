# Mono Starter

Monorepo starter template / native + web example

## Development

### Setup

- Install direnv:

```shell
brew install direnv
```

- Allow direnv to hook into your shell

```shell
# ~/.zshrc
eval "$(direnv hook zsh)"
```

- Allow directory:

```shell
direnv allow
```

- Restart shell and navigate to working directory, direnv should install all the dependencies automatically

```shell
cd mono-starter
```

- Install the application dependencies

```shell
bun install
```

- Run the application in development mode

```shell
bun dev
```
