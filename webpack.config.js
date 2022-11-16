module.exports = {
    
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            {
                
                test: /\.ts$/,
                exclude: /node-modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    devtool: false,
    resolve: {
        extensions: ['.ts', '.js']
    }
}