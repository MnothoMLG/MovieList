const TsconfigPathsPlugin = require(‘tsconfig-paths-webpack-plugin’);

export const module = {
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ],
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  }
};