const {
  numberParser,
  checkForMinusSymbol,
  verifyIntegerComponent,
  checkFractionComponent,
  checkExponentComponent
} = require('../numberParser')

// test('check if given string is a minus symbol \'-\'', () => {
//   expect(checkForMinusSymbol('-')).toBe(true)
// })

// test('check if it returns false if given string is not a minus symbol \'-\'', () => {
//   let chars = ['4', '3', 'a', 'r', '#']
//   for (let char of chars) {
//     expect(checkForMinusSymbol(char)).toBe(false)
//   }
// })

// test('check if the given string is an integer', () => {
//   let strings = ['0', '123', '9999']
//   for (let string of strings) {
//     expect(verifyIntegerComponent(string)).toBeTruthy()
//   }
// })

// test('return null if the given string is not a json-spec integer', () => {
//   let strings = ['hello', '--', '++']
//   for (let string of strings) {
//     expect(verifyIntegerComponent(string)).toBeNull()
//   }
// })

// test('check if the given string is an fraction', () => {
//   let strings = ['.123', '.456', '.012', '.000']
//   for (let string of strings) {
//     expect(checkFractionComponent(string)).toBeTruthy()
//   }
// })

// test('return null if the given string is not a fraction', () => {
//   let strings = ['123', '456', '@#!', 'geekskool']
//   for (let string of strings) {
//     expect(checkFractionComponent(string)).toBeNull()
//   }
// })

// test('check if the given string is an exponent component', () => {
//   let strings = ['e+0', 'E+10', 'e0', 'E0', 'E999']
//   for (let string of strings) {
//     expect(checkExponentComponent(string)).toBeTruthy()
//   }
// })

// test('return null if the given string is not an exponent component', () => {
//   let strings = ['hello', '1234', '@#!', 'e', 'E']
//   for (let string of strings) {
//     expect(checkExponentComponent(string)).toBeNull()
//   }
// })

// test('check if the given string starts with a JSON number', () => {
//   let strings = ['123hello', '0#@!', '-0.123', '-0e+10geekskool', '-0.456E-999', '123.456', '123.456E+999']
//   for (let string of strings) {
//     expect(Number(numberParser(string)[0])).not.toBeNaN()
//   }
// })

test('return null if the strig doesn\'t start with a JSON number', () => {
  let strings = ['hello', '#@!', '', 'geekskool', '+-+-', '----', '   ']
  for (let string of strings) {
    expect(numberParser(string)).toBeNull()
  }
})
