# Learning-TypeScript

<ol>
  <li>TypeScript v5.1.3</li>
  <li>Node v18.16.0</li>
  <li>npm v9.5.1</li>
</ol>

# Folders

## 01 - compiling

Compiling .ts file through the command:

```shell
$ tsc ~/index.ts -w
```

This command will compile the `index.ts` file and will watching for changes at the file and generating a .js file with the same name and executing in a `index.html` document

## 02 - tsconfig.json

creating `tsconfig.json` file through the command:

```shell
$ tsc --init
```

This command will create the `tsconfig.json` file and will set the properties:

<ul>
	<li>`outDir` to specific the diretory where the files will be generated</li>
	<li>`target` to set which is the JavaScript version that the files will be generated</li>
</ul>

## 03 - implicit types

You can assign some value to the `variables`, `arrays`, and `objects` but you can't change the their type along the code

### Wrong way: :x:
```typescript
// Typescript file
let age = 23;
age = '24';
```
> Your code will not compile, because typescript doesn't allow changing variables types along the code
> <br>**Stay tuned**: if you started with a type you'll finalize with it.

### Right way: ✔️
```typescript
// Typescript file
let age = 23;
age = 24;
```
You can change the value, but you **MUST** keep the type.
