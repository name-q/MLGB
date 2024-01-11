
module.exports = {

    entry: './src/main.js',

    output: {
        path: undefined,
        filename: 'static/js/[name].js',
        chunkFilename: 'statuc/js/[name].chunk.js',
        assetModuleFilename: 'static/media/[hash:10][ext][query]'
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
                test: /\.(jpe?g|png|gif|svg|webp)/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // Convert images below 20kb to base64
                        maxSize: 20 * 1024,
                    }
                }
            },
            // handle other
            {
                test: /\.(woff2?|ttf)/,
                type: 'asset/resource'
            }
        ]
    }
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
