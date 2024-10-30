const getDataWithSeccuss = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched successfully')
        reject('Data fetching failed')
    }, 1000)
})

getDataWithSeccuss
    .then(data => {
        console.log("Data is pending !", data)
    })
    .then(console.log('Last step is done !'))
    .catch(err => console.log('Error: ', err))
    .finally(() => console.log('Finally done !'))