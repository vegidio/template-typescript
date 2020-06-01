import * as path from 'path';
import * as webpack from 'webpack';
import * as nodeExternals from 'webpack-node-externals';    // eslint-disable-line
import * as CopyPlugin from 'copy-webpack-plugin';          // eslint-disable-line

const config: webpack.Configuration = {
    target: 'node',
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, loaders: 'ts-loader' }
        ]
    },
    externals: [
        // Uncomment the line below if you want to exclude node_modules for the bundle
        // nodeExternals()
    ],
    plugins: [
        // Uncomment the lines below if you want to copy any file to the build folder
        // new CopyPlugin({ patterns: [
        //     { from: 'package.json', to: '.' }
        // ]})
    ]
};

export default config;