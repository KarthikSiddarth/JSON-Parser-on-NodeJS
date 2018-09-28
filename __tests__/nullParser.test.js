const nullParser = require('../nullParser')

test('check if it returns truthy for string starts with null', () => {
  let strings = ['nullhello', 'null1234', 'nullnull']
  for (let string of strings) {
    expect(nullParser(string)).toEqual([null, string.slice(4)])
  }
})

test('check if it returns null for string starts doesn\'t starts with null', () => {
  let strings = ['hello', '1234', 'nul']
  for (let string of strings) {
    expect(nullParser(string)).toBe(null)
  }
})
