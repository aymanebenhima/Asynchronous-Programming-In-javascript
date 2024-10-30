async function fetchDataParallel() {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ];

    try {
        const data = await Promise.all(urls.map(url => fetch(url).then(response => response.json())));

        console.log('Data fetched successfully:');
        console.log(data);

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

fetchDataParallel()