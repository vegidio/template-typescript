# TypeScript (Template)

[![Actions](https://github.com/vegidio/template-typescript/workflows/test/badge.svg)](https://github.com/vegidio/template-typescript/actions)
[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://choosealicense.com/licenses/mit/)

A template project for TypeScript with the usual scripts to run, build and test and source code.

## 🤖 Usage

Clone the repository and in the project directory install its dependencies with running `yarn` in the command line. Afterwards you can run the following scripts:

- `yarn start`: to execute the code. The entrypoint is the file `.src/index.ts`.
- `yarn build`: to create an app bundle. The entrypoint is the file `./src/index.ts` and the resolving binary will be saved in `./build/app.bundle.js`.
- `yarn test`: to run the tests specified in the folder `./tests`.

## 🧩 Dependencies

This template depends on a few Node packages in order to work. All dependencies under __devDependencies__ scope are mandatory:

- [@types/node](https://www.npmjs.com/package/@types/node): type definitions for Node.js projects.
- [@types/webpack](https://www.npmjs.com/package/@types/webpack): type definitions for Webpack.
- [ts-loader](https://www.npmjs.com/package/ts-loader) a loder that tells Webpack how it should transpile TypeScript files.
- [ts-node](https://www.npmjs.com/package/ts-node): a TypeScript execution environment.
- [typescript](https://www.npmjs.com/package/typescript): the TypeScript language support.
- [webpack](https://www.npmjs.com/package/webpack): a module bundler for JavaScript.
- [webpack-cli](https://www.npmjs.com/package/webpack-cli): CLI tool for Webpack.

## Directory Structure

This project follows the same directory stucture:

```
[root]
  ├── build/
  ├── src/
  │   └── index.ts
  └── tests/
```

where:

- `build`: is the directory containing the binaries created by the project. This folder is auto-generated and you shoudln't manually put any file here.
- `src`: is the directory where you will place the project code. The entrypoint of the project's execution is the file `index.ts`.
- `tests`: is the directory where you will place your test scripts.

## 📝 License

**TypeScript (Template)** is released under the MIT License. See [LICENSE](LICENSE.txt) for details.

## 👨🏾‍💻 Author

Vinicius Egidio ([vinicius.io](http://vinicius.io))