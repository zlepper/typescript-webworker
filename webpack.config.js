const {resolve} = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: "dist/"

    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [
            '.js',
            '.ts'
        ]
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.ts?$/,
                use: "source-map-loader"
            },
            {
                // For our normal typescript
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.json'
                        }
                    }
                ],
                exclude: /(?:node_modules|worker\.ts)/,
            },

            {
                // For our dear webworkers
                test: /\.worker\.ts?$/,
                use: [
                    // {
                    //     loader: 'worker-loader'
                    // },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.worker.json',

                        }
                    }
                ],
                exclude: /(?:node_modules)/
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map'
};