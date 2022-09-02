// // webpack.config.js

// // Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require('path');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

// const isProduction = process.env.NODE_ENV == 'production';

// function output(mode) {}

// /** @type Webpack */
// const config = {
//   entry: './src/index.ts',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//   },
//   devServer: {
//     open: true,
//     host: 'localhost',
//   },

//   plugins: [
//     // Add your plugins here
//     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/i,
//         loader: 'ts-loader',
//         exclude: ['/node_modules/'],
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//         type: 'asset',
//       },

//       // Add your rules for custom modules here
//       // Learn more about loaders from https://webpack.js.org/loaders/
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// };

// module.exports = () => {
//   if (isProduction) {
//     config.mode = 'production';

//     config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
//   } else {
//     config.mode = 'development';
//   }
//   return config;
// };

import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

// const isProduction = process.env.NODE_ENV === 'production';
const modes = {
  umd: {
    filename: 'umd/index.js',
    library: {
      name: 'maroonlis-utils',
      type: 'umd',
    },
  },
  cjs: {
    filename: 'cjs/index.js',
    library: {
      name: 'maroonlis-utils',
      type: 'commonjs',
    },
  },
  esm: {
    filename: 'esm/index.js',
    library: {
      type: 'module',
      // name: 'maroonlis-utils',
      export: 'default',
    },
  },
};

export default function (env, argv) {
  console.log('webpack.config.js arguments', env, argv);

  const mode = argv.env.target as 'cjs' | 'umd' | 'esm';
  const config: webpack.Configuration = {
    // devtool: 'inline-source-map',
    experiments: {
      outputModule: mode === 'esm',
    },

    mode: 'development',
    entry: {
      app: path.join(__dirname, 'src/index.ts'),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      // clean: true,
      ...modes[mode],
    },
    devServer: {
      open: true,
      host: 'localhost',
    },

    plugins: [
      // Add your plugins here
      // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: 'ts-loader',
          exclude: ['/node_modules/'],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: 'asset',
        },

        // Add your rules for custom modules here
        // Learn more about loaders from https://webpack.js.org/loaders/
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
  return config;
}
