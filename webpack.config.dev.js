const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('postcss-cssnext');
const postcssConfig = path.resolve(process.cwd(), './postcss.config.js');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development')
};

// webpack.config.js
module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.join(__dirname,'./dist/'), // Note: Physical files are only output by the production build task `npm run build`.
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, include: path.join(__dirname, 'src'), loaders: ['ts-loader', 'tslint-loader'] },
      { test: /(\.css)$/, loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader' },
      { test: /(\.scss)$/, loaders: ['style-loader', 'css-loader','sass-loader'] },
      { test: /\.(jpe?g|png|gif|svg|jpg|otf)$/i, loaders: [ 'file-loader', 'image-webpack-loader' ] },
      { test: /\.(js|jsx)$/, include: path.join(__dirname, 'src'),loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.ts', '.tsx', '.js']
  }
};
