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
	<li></li>
	<li></li>
	<li></li>
</ul>
