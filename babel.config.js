module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
          '@screens': './src/screens',
          '@navigations': './src/navigations',
          '@types': './src/types',
        },
      },
    ],
  ],
};
