const booleanParser = require('../booleanParser')

test('check if it returns truthy for string starting with true', () => {
  let strings = ['trueHello', 'true1234', 'truetrue', 'truefalse']
  for (let string of strings) {
    expect(booleanParser(string)).toEqual([true, string.slice(4)])
  }
})

test('check if it returns truthy for string starting with false', () => {
  let strings = ['falseHello', 'false1234', 'falsetrue', 'falsefalse']
  for (let string of strings) {
    expect(booleanParser(string)).toEqual([false, string.slice(5)])
  }
})

test('check if it returns null for string that doesn\'t start with true or false', () => {
  let strings = ['Hello', '1234false', '@3!', 'geekskool']
  for (let string of strings) {
    expect(booleanParser(string)).toBe(null)
  }
})
