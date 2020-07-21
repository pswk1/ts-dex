# ts-dex

## Description

This application is one that makes a call to the Pokemon API to render various bits of data about each Pokemon. I will be using it as a learning tool for Typescript.

## Notes

### Configuring Typescript with tsconfig

- tsconfig is a JSON file that helps configure TS. It will help control the behavior of the compiler.
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

- target: species the ECMAScript target version when compiling the TS code.
  Here, ES5 is target to support all broswers. It may be changed to ES6, ES2020 etc.
  If no target is specified, ES3 is the deafult.

- module: defines module of the compiled code. Here, Common JS is specified. It is astandard for structuring and organizing JS code. Assists in the server-side development of applications.
  Its format has greatly influenced NodJS's module management.

- outDir/rootDir: (Respectively) Species the output directory for the code compiled to JS.
  Defines the location where the TS files that need to be compiled are located.

- include: defines which directory needs to be compiled. If the value is absent, the compiler will take every .ts file and compile it to JS even if an output directory is defined.

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

Here, `foo` expects a string
