import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);  // __filename을 얻기 위한 방법
const __dirname = path.dirname(__filename);  // __dirname을 얻기 위한 방법

export default {
    mode: 'production',
    entry: './src/module/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true,

        library: 'MyLibrary',
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],


    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

}