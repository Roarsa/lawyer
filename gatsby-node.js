exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    target: 'node',
    node: {
      fs: 'empty',
      vm: 'empty',
      net: 'empty',
      tls: 'empty',
    },
  })
}
