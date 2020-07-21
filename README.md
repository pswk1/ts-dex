# ts-dex

## Description

This application is one that makes a call to the Pokemon API to render various bits of data about each Pokemon. I will be using it as a learning tool for Typescript

## Notes

1. Configuring Typescript with tsconfig

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
