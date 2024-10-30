// Simulation de Lecture et Appel Asynchrone

// Fontion qui simule la lecture et l'appel asynchrone depuis une BD
function fetchDataFromDB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from DB');
        }, 2000); // Simule un délai de 2 seconde
    })
}

// Fonction qui simule l'appel asynchrone depuis une API
async function fetchDataFromAPI() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
}
fetchDataFromAPI()
async function main() {
    console.log('Start');

    try {
        // Exécuter en parralèle pour optimiser le temps de réponse
        const [dbData, apiData] = await Promise.all([
            fetchDataFromDB(),
            fetchDataFromAPI()

        ])
        
        console.log("Data from DB:", dbData);
        console.log("Data from API:", apiData);
    } catch (error) {
        console.error("Error of fetching data" ,error);
    }

    console.log('End');
}

main()