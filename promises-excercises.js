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

// what is .then() used for and wat is .catch() used for??
//  --> .then() awaits the resolution of the promise so that it can do something with the resolved promise value. .catch() catches the result of any rejected promise, usually an Error
//
//  what are good use cases for promis
//  s?
//  --> when you are writing asynchronous code where the value being return by your function happens outside of the normal stack, so that you don't have to wait for that value to be returned to run the next line 
//
// what other libs use promises?
// --> any asynchronous code is going to use promises, this includes fetch calls, xmlhttprequests, authentication requests, as well as responses from backend libraries such as express and node. Middleware like thunk and sagas also make it easier to deal with async codes. 
