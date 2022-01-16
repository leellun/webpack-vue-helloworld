// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ClosurePlugin = require('closure-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
    entry: "./src/main.js",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.vue', '.json', ".js", '.png', ".sass", ".css"],
        alias: {
            '@': path.join(__dirname, '.', 'src')
        }
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
            {
                exclude: /node_modules/,
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
            new ClosurePlugin({ mode: 'STANDARD' }, {
                // compiler flags here
                //
                // for debugging help, try these:
                //
                // formatting: 'PRETTY_PRINT'
                // debug: true,
                // renaming: false
            })
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
