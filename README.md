# TypeScript (Template)

[![test](https://github.com/vegidio/template-typescript/actions/workflows/test.yml/badge.svg)](https://github.com/vegidio/template-typescript/actions/workflows/test.yml)
[![TypeScript](https://img.shields.io/npm/types/vimdb.svg)](https://www.typescriptlang.org)
[![ESM](https://img.shields.io/badge/module-ESM-blueviolet.svg)](https://dev.to/bennypowers/you-should-be-using-esm-kn3)
[![MIT License](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)

A template project for TypeScript with the usual scripts to **run**, **lint**, **build** and **test** the source code.

## 🤖 Usage

Clone the repository and in the project directory install its dependencies by running `pnpm install` in the terminal. Afterward you can run the following scripts:

- `pnpm build`: to create an app bundle. The entry point is the file `./src/index.ts` and the resulting binary will be saved in `./dist/index.js`.
- `pnpm lint`: to statically check the code with ESLint.
- `pnpm start`: to execute the code. The entry point is the file `./src/index.ts`.
- `pnpm test`: to run the tests specified in the folder `./test`.

## 🧩 Dependencies

This template depends on a few Node packages in order to work. All dependencies under the __devDependencies__ scope are mandatory; the most notable ones are:

- [eslint](https://www.npmjs.com/package/eslint): a tool for identifying and reporting problems in TypeScript code.
- [jest](https://www.npmjs.com/package/jest): a JavaScript test framework.
- [pkgroll](https://www.npmjs.com/package/pkgroll): a ES module bundler for JavaScript.
- [tsx](https://www.npmjs.com/package/tsx): a TypeScript execution environment.
- [typescript](https://www.npmjs.com/package/typescript): the TypeScript language support.

## ⚙️ Configuration

Here are some configuration parameters that you can tweak based on your needs:

## 🗂 Directory Structure

This project follows the directory structure below:

```
[root]
  ├── dist/
  ├── src/
  │   └── index.ts
  └── test/
```

where:

- `dist/`: is the directory containing the binaries created by the project. This folder is auto-generated so you shouldn't manually put any file here.
- `src/`: is the directory where you will place the project code. The entry point of the project's execution is the file `index.ts`.
- `test/`: is the directory where you will place your test scripts.

### Important Files

- `.eslintrc`: ESLint configuration file; you can change the linting rules here.
- `jest.config.js`: Jest configuration file; you can change the test parameters here.
- `tsconfig.json`: TypeScript configuration file; you can change how TypeScript transpile the files here.
- `types.d.ts`: File where you create the definitions for the JS modules that don't have TypeScript support.

## 📝 License

**TypeScript (Template)** is released under the MIT License. See [LICENSE](LICENSE) for details.

## 👨🏾‍💻 Author

Vinicius Egidio ([vinicius.io](http://vinicius.io))