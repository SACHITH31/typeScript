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
6. Now you can create TypeScript files with the `.ts` extension and start writing your TypeScript code. For example, you can create a file named `app.ts` and add some TypeScript code to it.
7. To compile a TypeScript file, you can use the `tsc` command followed by the name of your TypeScript file. For example:

   ```
   tsc app.ts
   ```
   This will compile the `app.ts` file and generate a corresponding `app.js` file that can be run in a JavaScript environment which means we run this app.js file not this app.ts file so to run this app.js file we use below command that is:
   ```
   node app.js
   ```
   - after running this command you will see the output of your typescript code in the console.
   - well if we compile the ts file once using `tsc app.ts` command then we will get the `app.js` file right but if we make some changes in the `app.ts` file then we need to compile it again using the same command that is `tsc app.ts`, after running command we won't get another `app.js` file but the existing `app.js` file will be updated with the changes we made in the `app.ts` file.
8. Now you can start writing TypeScript code in your `.ts` files and compile them to JavaScript using the `tsc` command. Happy coding!