
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
        ]
    }
}