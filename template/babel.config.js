const rootImportOpts = {
  root: 'src/',
  rootPathPrefix: '!/',
}


module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['babel-plugin-root-import', rootImportOpts]]
};
