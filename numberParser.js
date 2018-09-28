// Number parser

/* Components
Symbol
Integer component
Fraction component
Exponent Component
*/

function numberParser (input) {
  let accumulatedNumber = checkForMinusSymbol(input[0]) ? '-' : ''
  let remainingString = input.slice(accumulatedNumber.length)
  let resultOfVerification = verifyIntegerComponent(remainingString)
  if (!resultOfVerification) return null
  accumulatedNumber = accumulatedNumber.concat(resultOfVerification[0])
  remainingString = input.slice(accumulatedNumber.length)
  resultOfVerification = checkFractionComponent(remainingString)
  if (resultOfVerification) {
    accumulatedNumber = accumulatedNumber.concat(resultOfVerification[0])
    remainingString = input.slice(accumulatedNumber.length)
  }
  resultOfVerification = checkExponentComponent(remainingString)
  if (resultOfVerification) {
    accumulatedNumber = accumulatedNumber.concat(resultOfVerification[0])
    remainingString = input.slice(accumulatedNumber.length)
  }
  return [accumulatedNumber, remainingString]
}

function checkForMinusSymbol (input) {
  return input === '-'
}

function verifyIntegerComponent (input) {
  let integerRegExp = /^(0|[1-90-9]+)/
  return integerRegExp.exec(input)
}

function checkFractionComponent (input) {
  let fractionRegExp = /^(\.[0-9]+)/
  return fractionRegExp.exec(input)
}

function checkExponentComponent (input) {
  let exponentRegExp = /^(e|E)(\+|-)?[0-9]+/
  return exponentRegExp.exec(input)
}

module.exports = {
  numberParser,
  checkForMinusSymbol,
  verifyIntegerComponent,
  checkFractionComponent,
  checkExponentComponent
}
