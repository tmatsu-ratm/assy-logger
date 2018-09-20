const path = require('path')

const outputPath = path.join(__dirname, 'dist')
const mainConfig = {
    target: 'electron-main',
    entry: './src/main/main.js',
    output: {
        path: `${outputPath}/main`,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    }
}
const rendererConfig = {
    target: 'electron-renderer',
    entry: './src/renderer/renderer.js',
    output: {
        path: `${outputPath}/renderer`,
        filename: 'renderer.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    }
}

module.exports = [mainConfig, rendererConfig]