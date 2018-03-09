const testNum = num => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10, success!`)
    } else {
      reject(Error(`${num} is not greater than 10, error!`))
    }
  })
}

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error))


const makeAllCaps = wordsArray => {
  const capitalized = wordsArray.map(word => {
    return new Promise((resolve, reject) => {
      if (typeof word === "string"){
        resolve(word.toUpperCase())
      } else {
        reject(Error("No, the array you passed in contained an element that was not a string!"))
      }
    })
  })

  return Promise.all(capitalized)
}

const sortWords = wordsArray => {
  return wordsArray.sort((a, b) => {
    return a > b
  })
}

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))


makeAllCaps([7, 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
