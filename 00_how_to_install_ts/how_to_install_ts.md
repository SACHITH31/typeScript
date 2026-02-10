## How to install typescript:

1. First, you need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
2. Once you have Node.js installed, you can install TypeScript globally using npm (Node Package Manager) by running the following command in your terminal:

   ```
   npm install -g typescript
   ```
   - The `-g` flag indicates that you want to install TypeScript globally, making it available for use in any project on your machine.
   - well if we want to use this typescript in a specific project we can install it locally by running the following command in your project directory:

   ```
    npm install typescript --save-dev
    ```
3. After the installation is complete, you can verify that TypeScript is installed correctly by checking its version:

   ```
    tsc --version
    ```
4. If you see the version number of TypeScript, it means that the installation was successful. You can now start using TypeScript in your projects!
5. You can also initialize a TypeScript project which means to run this ts files we need a compiler right and to get this compiler we use this below command then we will get a `tsconfig.json` file in our project directory which will help us to configure our TypeScript project and set various options for the compiler. To initialize a TypeScript project, run the following command in your project directory:

   ```
    tsc --init
    ```
    This will create a `tsconfig.json` file where you can configure various TypeScript options for your project.
6. To compile a TypeScript file, you can use the `tsc` command followed by the name of your TypeScript file. For example:

   ```
   tsc app.ts
   ```
   This will compile the `app.ts` file and generate a corresponding `app.js` file that can be run in a JavaScript environment.
7. Now you can start writing TypeScript code in your `.ts` files and compile them to JavaScript using the `tsc` command. Happy coding!