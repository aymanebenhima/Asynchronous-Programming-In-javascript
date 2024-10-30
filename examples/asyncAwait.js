async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("Data from API well read:", data);
    } catch (error) {
        console.error("Error of fetching data" ,error);
    }
}

getUserData()