import * as path from 'path';
import * as webpack from 'webpack';
import * as packagejson from './package.json';
// in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';

export default function (env, argv) {
  console.log('webpack.config.js arguments', env, argv);

  const mode = argv.env.target as 'cjs' | 'umd' | 'esm';
  const { name } = packagejson;
  const config: webpack.Configuration = {
    // devtool: 'source-map',
    experiments: {
      outputModule: mode === 'esm',
    },

    mode: argv.mode,
    entry: {
      index: './src/index.ts',
      'asyncSleep/index': './src/asyncSleep/index.ts',
      'lang/index': './src/lang/index.ts',
      'service/index': './src/service/index.ts',
      'Store/index': './src/Store/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'dist/lib'),
      // filename: 'index.js',
      // sourceMapFilename: 'index.js.map',
      // library: name,
      filename: '[name].js',
      // sourceMapFilename: name + '.map',
      library: name,
      libraryTarget: 'commonjs',
    },
    externals: ['lodash', 'moment'],
    // devServer: {
    //   open: true,
    //   host: 'localhost',
    // },

    plugins: [],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: 'ts-loader',
          exclude: ['/node_modules/'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'lib'),
      },
    },
  };
  return config;
}
