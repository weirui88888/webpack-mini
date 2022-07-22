function loader2(sourceCode) {
  console.log('join loader2')
  return sourceCode + `\n const loader2 = 'weirui'`
}

module.exports = loader2
