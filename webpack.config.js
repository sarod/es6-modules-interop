const path = require('path');

module.exports = {
    mode: 'development',
    entry: ["./src/importMoment.ts"],
    output: {
        path: path.resolve(__dirname, "dist/webpack"), // string
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        noParse: [
            /\/node_modules\/].*/,
        ],
        rules: [{
            test: /\.tsx?$/,
            include: [/src\/.*/],
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/env", {
                            "modules": "false"
                        }]
                    ],
                    plugins: [
                        "@babel/plugin-transform-typescript"
                    ]
                }
            }]
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'none',
    target: 'node'
};