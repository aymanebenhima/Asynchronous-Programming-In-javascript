const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true
            if(!success) {
                reject('Error fetching data')
            } else 
                resolve('Data fetched successfully')
        }, 2000)
    })
}

fetchData()
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})