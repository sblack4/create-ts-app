const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/index.ts']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".css"]
    },

    devServer: {
        compress: true,
        host: "localhost",
        lazy: false,
        port: 9000,
        inline: true,
        publicPath: "http://localhost:9000",
        headers: { "X-Custom-Header": "yes" },
        stats: { colors: true },
        watchContentBase: true,
        contentBase: ["build", "data"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
        ]
    }
};