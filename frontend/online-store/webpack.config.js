const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        filename: 'bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'development', // Set to 'production' for production builds
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/, // Transpile JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // You may need to install babel-loader
                },
            },
            // Add other loaders as needed
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add other extensions if needed
    },
};