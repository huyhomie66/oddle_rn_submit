module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['./src'],
        alias: {
          screens: './src/screens',
          assets: './src/assets',
          components: './src/components',
          services: './src/services',
          utils: './src/utils',
          hooks: './src/hooks',
        },
      },

    ],
    'react-native-reanimated/plugin',
    "transform-inline-environment-variables"
  ],
};
