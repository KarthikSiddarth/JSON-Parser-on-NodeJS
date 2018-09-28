function main (val) {
  return nullParser(val) || booleanParser(val) || stringParser(val) || numberParser(val) ||
          arrayParser(val) || objectParser(val)
}

function removeWhiteSpace (val) {
  let v = whitespaceParser(val)
  if (v) {
    return v[1]
  }
  return val
}

function whitespaceParser (val) {
  let wsP = /^\s+/.exec(val)
  if (!wsP) {
    return null
  }
  return ([wsP[0], val.slice(wsP[0].length)])
}

function commaParser (val) {
  let cP = /^(,){1}/.exec(val)
  if (!cP) {
    return null
  }
  return ([cP[0], val.slice(cP[0].length)])
}

function colonParser (val) {
  let colP = /^:/.exec(val)
  if (!colP) {
    return null
  }
  return ([colP[0], val.slice(colP[0].length)])
}

function nullParser (val) {
  let nP = /^null/.exec(val)
  if (!nP) {
    return null
  }
  return ([null, val.slice(nP[0].length)])
}

function booleanParser (val) {
  let bP = /^true/.exec(val) || /^false/.exec(val)
  if (!bP) {
    return null
  }
  if (bP[0] === 'true') {
    bP[0] = true
  } else {
    bP[0] = false
  }
  return ([bP[0], val.slice(bP[0].length)])
}

function stringParser (val) {
  let strP = /^"(?:\\"|.)*?"/.exec(val)
  if (!strP) {
    return null
  }
  return ([strP[0].slice(1, -1), val.slice(strP[0].length)])
}

function numberParser (val) {
  let numP = /^(-|\+)?[0-9]+(\.[0-9]+)?((e|E)(\+|-)[0-9]+)?/.exec(val)
  if (!numP) {
    return null
  }
  return ([(numP[0]), val.slice(numP[0].length)])
}

function arrayParser (val) {
  val = removeWhiteSpace(val)
  let tmparr = []
  if (val.startsWith('[')) {
    val = val.slice(1)
    while (!val.startsWith(']')) {
      val = removeWhiteSpace(val)
      let tmp = main(val)
      if (!tmp) {
        return null
      }
      tmparr.push(tmp[0])
      val = removeWhiteSpace(tmp[1])
      tmp = commaParser(val)
      if (tmp) {
        val = removeWhiteSpace(tmp[1])
      }
      if (!tmp && !val.startsWith(']')) {
        return null
      } else if (tmp && val.startsWith(']')) {
        return null
      }
    }
    return ([tmparr, val.slice(1)])
  }
  return null
}

function objectParser (val) {
  var tmpObj = {}
  val = removeWhiteSpace(val)
  if (val.startsWith('{')) {
    val = val.slice(1)
    val = removeWhiteSpace(val)
    while (!val.startsWith('}')) {
      let tmp = stringParser(val)
      if (!tmp) {
        return null
      }
      let key = tmp[0]
      val = removeWhiteSpace(tmp[1])
      tmp = colonParser(val)
      if (!tmp) {
        return null
      }
      val = removeWhiteSpace(tmp[1])
      tmp = main(val)
      if (!tmp) {
        return null
      }
      tmpObj[key] = tmp[0]
      val = removeWhiteSpace(tmp[1])
      tmp = commaParser(val)
      if (tmp) {
        val = removeWhiteSpace(tmp[1])
      }
      if (!tmp && !val.startsWith('}')) {
        return null
      } else if (tmp && val.startsWith('}')) {
        return null
      }
    }
    return ([tmpObj, val.slice(1)])
  }
  return null
}

/*  let file = require('fs')
//  file.readFile(`${process.argv[2]}`,'utf-8',function(err,data){
file.readFile('./TestCases/google-maps.json', 'utf-8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  let result = main(data)
  if (result) {
    file.writeFile('./output.json', JSON.stringify(result[0], null, 4), function (err) {
      if (err) {
        return console.log(err)
      }
      console.log('parsed successfully')
    })
  } else {
    console.log('Invalid JSON')
  }
})  */

console.log(arrayParser())
