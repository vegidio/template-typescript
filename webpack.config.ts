import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './app.bundle.js'
    },
    resolve: {
        extensions: ['ts', 'js']
    },
    module: {
        rules: [
            { test: /\.ts$/, loaders: 'ts-loader' }
        ]
    }
};

export default config;