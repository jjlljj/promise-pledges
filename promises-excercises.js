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
