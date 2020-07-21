# Typescript Pokedex

## Description

This application is one that makes a call to the Pokemon API to render various bits of data about each Pokemon. I will be using it as a learning tool for Typescript.

### Installation and Usage

1. Clone the repository to your local machine.
2. Navigate to the root directory.
3. [See compilation instructions](###compile-typescript-to-javascript)
4. Right click `index.html` and open in your browser.

## Notes

### Configuring Typescript with tsconfig

- `tsconfig` is a JSON file that helps configure TS. It will help control the behavior of the compiler.
- The following command run in the root directory creates the config file.

```
tsc --init
```

Once created, the file contains the following data, minus the comments:

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "public/js"
        "rootDir": "src",
        "strict": true,
        "esModuleInterop": true
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src"]
}
```

- `target`: species the ECMAScript target version when compiling the TS code.
  Here, ES5 is target to support all broswers. It may be changed to ES6, ES2020 etc.
  If no target is specified, ES3 is the deafult.

- `module`: defines module of the compiled code. Here, Common JS is specified. It is astandard for structuring and organizing JS code. Assists in the server-side development of applications.
  Its format has greatly influenced NodeJS's module management.

- `outDir/rootDir`: (Respectively) Species the output directory for the code compiled to JS.
  Defines the location where the TS files that need to be compiled are located.

- `include`: defines which directory needs to be compiled. If the value is absent, the compiler will take every `.ts` file and compile it to JS even if an output directory is defined.

### Typescript Types

##### Benefits of Types

1. Provide a way to enhance code quality
2. Code is more readable since variable types are defined.
3. Define what a given variable should have as its value, and allow compiler to catch errors before runtime.

##### Types

- Types include number, string, boolean, enum, void, null, undefined, any, never, array, and tuple.
- All types will not be covered here. Additional learning necessary.

##### Basic TS Types

```
let foo: string = "test"
let bar: number = 1
let baz: string[] = ["This", "is", "a", "Test"]
```

Here, `foo` expects a string, `bar` expects a number, `baz` expects an array of a string.
If they receive anything else besides the type declared, an error will be thrown by TS.

`baz` can also be declared like this:

```
let baz: Array<string> = ['This', 'is', 'a', 'Test']
```

Let's try to reassign a variable and see what happens.

```
let foo: string = "test"
foo = 1
```

This error will be thrown. `foo` is already expecting a string as its value. This error will be caught at compile-time. This is one of the great benefits of Typescript.

```
Type '1' is not assignable to type 'string'
```

##### Implicit vs Explicit Type Declaration

It's better to explicitly define the type of a given value because it helps the compiler and the next developer who inherits the code. But you can also declare variables with an implicit type annotation.

```
let foo = "test"
let bar = 1
let baz = ["This", "is", "a", "Test"]
```

Typescript will take the value and define it as a type for the variable. However, if we try to reassign these variables,

```
foo = 7
bar = "updated"
baz = [2, true, "a", 10]
```

Typescript will still catch the errors even if variable types are declared implicitly.

```
Type '7' is not assignable to type 'string'.
Type '"updated"' is not assignable to type 'number'.
Type 'true' is not assignable to type 'string'.
```

When dealing with an object of multiple properties, it can be tricky to define the types.
Typescript has Interfaces and Type aliases to help with that.

### Interfaces and Type aliases

These help us define the shape of an object-like data structure.
The consensus amongst developers is to use `interface` when possible since it is in the default
`tslint` ruleset.

```
interface ITest {
  id: number;
  name?: string;
}

type TestType = {
  id: number,
  name?: string,
}

function myTest(args: ITest): string {
  if (args.name) {
    return `Hello ${args.name}`
  }
  return "Hello Word"
}

myTest({ id: 1 })
```

The structure of an interface and a type alias looks similar to ab object.
They have to define the form of given data with TS.

Here, `name` is optional by adding a question mark `?`.
If no value is passed to the property `name` it will return undefined as its value.

The interface `ITest` is used as a type for the argument received by the `myTest` function.
Functions can also be defined to return a specific type. And here, the return value must be a string otherwise TS will throw an error.

In summary, interfaces and type aliases help us define what type multiple properties of objects should be defined as.

### Compile Typescript to Javascript

To compile the TS code to JS, go into the root of the project and run the command:

```
tsc
```

It will compile every file with a `.ts` extension to Javascript. Because we have a `tsconfig` file,
the compiler will follow the defined rules and compile only the TS files located in the `src` folder and put the JS code into the `public` directory.

The compiler also allows compiling only a single file.

```
tsc nameOfFile.ts
```

If a name of file is not specified, the compiled JS file will take the same name as the TS file.
Adding a `-w` flag will let the compiler keep watching for a change and recompile when needed,
instead of recompiling on every change.

```
tsc -w
```
