// Boolean parser

function booleanParser (param) {
  if (!(param.startsWith('true') || param.startsWith('false'))) return null
  return param.startsWith('true') ? [true, param.slice(4)] : [false, param.slice(5)]
}

module.exports = booleanParser
