module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./src"],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
        alias: {
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@services': './src/services',
          '@stores': './src/stores',
          '@styles': './src/styles',
          '@models': './src/models',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
