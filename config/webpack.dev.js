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
                use: [
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
                    }
                ]
            }
        ]
    }
}