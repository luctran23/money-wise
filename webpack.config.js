/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            { test: /\\.(png|jp(e*)g|svg|gif)$/, use: ["file-loader"] },
        ],
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "./src"),
        },
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
