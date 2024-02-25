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
          '@components': './src/components',
          '@navigations': './src/navigations',
          '@types': './src/types',
        },
      },
    ],
  ],
};
