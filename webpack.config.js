import * as TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';
export const module = {
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  ],
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      '@util/*': path.resolve(__dirname, 'src/util/'),
      '@config/*': path.resolve(__dirname, 'src/config/'),
      '@store/*': path.resolve(__dirname, 'src/store/'),
      '@assets/*': path.resolve(__dirname, 'src/assets/'),
    },

    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
