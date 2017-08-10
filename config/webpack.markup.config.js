const fs                 = require('fs');
const glob               = require("glob");
const path               = require('path');
const webpack            = require('webpack');
const autoprefixer       = require('autoprefixer');
const SpritesmithPlugin  = require('webpack-spritesmith');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const publicAssetsPath   = path.resolve(process.cwd(), 'src', 'assets');

const customAlias = {};

let cleanBuildFolderPlugin = () => {
  if ( process.env.NODE_ENV === 'production' ) {
    return new CleanWebpackPlugin(
      [path.resolve(publicAssetsPath, 'build')],
      { root: path.resolve(process.cwd()) }
    )
  }

  return [];
}

let watchHtmlFiles = () => {
  let arrWatchHtml = [];
  let readFiles    = glob.sync('**/*.html', {
    cwd: path.resolve(publicAssetsPath, 'html')
  })

  for ( let index = 0; index < readFiles.length; index++ ) {
    if ( path.extname(readFiles[index]) === '.html' ) {
      arrWatchHtml.push(
        new HtmlWebpackPlugin({
          filename: readFiles[index],
          template: path.resolve(publicAssetsPath, 'html', readFiles[index])
        })
      )
    }
  }

  return arrWatchHtml;
}

let watchSpritesFiles = () => {
  let arrWatchSprites = [];
  let targetDirs      = fs.readdirSync(path.resolve(publicAssetsPath, 'img'));

  for ( let index = 0; index < targetDirs.length; index++ ) {
    arrWatchSprites.push(
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(publicAssetsPath, 'img', targetDirs[index]),
          glob: '*.png'
        },
        target: {
          image: path.resolve(publicAssetsPath, 'sprite', 'sprite-' + targetDirs[index] + '.png'),
          css: path.resolve(publicAssetsPath, 'sprite', 'sprite-' + targetDirs[index] + '.scss')
        },
        apiOptions: {
          cssImageRef: './sprite-' + targetDirs[index] + '.png'
        },
        // retina: '@2x'
      })
    )

    customAlias['./sprite-' + targetDirs[index] + '.png'] = path.resolve(publicAssetsPath, 'sprite', 'sprite-' + targetDirs[index] + '.png');
  }

  return arrWatchSprites;
}

module.exports = {
  entry: path.resolve(publicAssetsPath, 'html', 'markup.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(publicAssetsPath, 'build')
  },
  resolve: {
    alias: customAlias
  },
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]',
        }
      },
      {
        test: /\.html$/,
        loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          Object.assign(
            {
              fallback: require.resolve('style-loader'),
              use: [
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: false,
                  },
                },
                {
                  loader: require.resolve('postcss-loader'),
                  options: {
                    plugins: () => [
                      require('postcss-flexbugs-fixes'),
                      autoprefixer({
                        browsers: [
                          '>1%',
                          'last 4 versions',
                          'Firefox ESR',
                          'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                      }),
                    ],
                  },
                },
                'sass-loader'
              ],
            }
          )
        ),
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    })
  ]
    .concat(watchHtmlFiles())
    .concat(watchSpritesFiles())
    .concat(cleanBuildFolderPlugin())
}
