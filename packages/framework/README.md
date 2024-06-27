Dependency free micro framework for dependency injection. Designed to be easy to use and very minimal.

## Usage

```ts
import { useFramework } from "@mono/framework";

const framework = useFramework();

define("foo", () => "bar");

const foo = framework.get("foo");