# Checkpoint Async/Await

Ce checkpoint couvre des concepts clés de `async/await` en JavaScript, incluant l'itération avec des délais, l'attente de réponses, la gestion des erreurs, le chaînage de fonctions asynchrones, et la différence entre les requêtes concurrentes et parallèles.

## Objectif

Choisissez et réalisez au moins **3 tâches** parmi la liste ci-dessous pour pratiquer l'utilisation de `async/await`.

## Tâches

### Tâche 1 : Itérer avec Async/Await

Créez une fonction asynchrone `iterateWithAsyncAwait` qui prend un tableau de valeurs. Elle doit afficher chaque valeur avec un délai de 1 seconde entre chaque affichage.

### Tâche 2 : Attendre un Appel

Écrivez une fonction asynchrone `awaitCall` qui simule un appel API et affiche les données retournées après avoir attendu la réponse.

### Tâche 3 : Gestion des Erreurs avec Async/Await

Modifiez la fonction `awaitCall` pour gérer les erreurs. En cas d’échec de l'appel API, interceptez l’erreur et affichez un message convivial.

### Tâche 4 : Chaînage de Fonctions Asynchrones

Écrivez une fonction `chainedAsyncFunctions` qui appelle trois fonctions asynchrones l’une après l’autre, chacune affichant un message avec un délai de 1 seconde. Utilisez `await` pour chaîner ces fonctions.

### Tâche 5 : Attendre des Requêtes Concurrentes

Créez une fonction asynchrone `concurrentRequests` qui effectue deux appels API en même temps en utilisant `Promise.all()`. Affichez les résultats combinés une fois les deux requêtes terminées.

### Tâche 6 : Attendre des Appels en Parallèle

Écrivez une fonction `parallelCalls` qui accepte un tableau d’URL. Utilisez `Promise.all()` pour récupérer les données de chaque URL en parallèle, et affichez les réponses une fois toutes les requêtes complétées.
