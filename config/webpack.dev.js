const path = require("path");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: './src/main.js',

    output: {
        path: undefined,
        filename: 'static/js/[name].js',
        chunkFilename: 'statuc/js/[name].chunk.js',
        assetModuleFilename: 'static/media/[hash:10][ext][query]',
        clean: true,
    },

    module: {
        rules: [
            // handle css
            {
                test: /\.css$/,
                use: getStyleLoaders()
            },
            // handle less
            {
                test: /\.less$/,
                use: getStyleLoaders('less-loader')
            },
            // handle sass
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders('sass-loader')
            },
            // handle images
            {
                test: /\.(jpe?g|png|gif|webp)/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // Convert images below 20kb to base64
                        maxSize: 20 * 1024,
                    }
                },
                generator: {
                    filename: 'static/images/[hash:10][ext][query]',
                }
            },
            // handle svg
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        // When importing in JS/TS
                        issuer: /\.(js|ts)x?$/,
                        type: 'asset',
                        parser: {
                            dataUrlCondition: {
                                // Convert images below 20kb to base64
                                maxSize: 20 * 1024,
                            }
                        },
                        generator: {
                            filename: 'static/images/[hash:10][ext][query]',
                        }
                    },
                    {
                        // When importing in css
                        issuer: /\.(css|s[ac]ss|less)$/,
                        type: 'asset/resource',
                        generator: {
                            filename: 'static/images/[hash:10][ext][query]',
                        }
                    }
                ]
            },
            // handle other
            {
                test: /\.(woff2?|ttf)/,
                type: 'asset/resource',
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ]
    },

    plugins: [
        new EslintWebpackPlugin({
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
            cache: true,
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/.eslintcache"),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],

    mode: "development",
}

const getStyleLoaders = (pre) => [
    'style-loader',
    'css-loader',
    {
        // css compatible
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    'postcss-preset-env'
                ]
            }
        }
    },
    pre
].filter(i => i)
