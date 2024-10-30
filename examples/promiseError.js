const getDataWithError = new Promise((_, reject) => {
    setTimeout(() => {
        reject('no data available')
    }, 1000)
})

getDataWithError
    .catch(err => console.log('Error: ', err))
    .finally(() => console.log('Finally is done !'))