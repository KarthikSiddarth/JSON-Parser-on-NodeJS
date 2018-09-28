// null parser

function nullParser (param) {
  return param.startsWith('null') ? [null, param.slice(4)] : null
}

module.exports = nullParser
