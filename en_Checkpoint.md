# Async/Await Checkpoint

This checkpoint covers key topics related to async/await in JavaScript, including iterating with delays, awaiting calls, error handling, chaining async functions, and concurrent vs. parallel requests.

## Objective

Choose and complete at least **3 tasks** from the list below to practice using async/await.

## Tasks

### Task 1: Iterating with Async/Await

Create an async function `iterateWithAsyncAwait` that takes an array of values. It should log each value with a 1-second delay between logs.

### Task 2: Awaiting a Call

Write an async function `awaitCall` that simulates an API call and logs the returned data after awaiting the response.

### Task 3: Handling Errors with Async/Await

Update the `awaitCall` function to handle potential errors gracefully. If the API call fails, catch the error and log a user-friendly message.

### Task 4: Chaining Async Functions

Write a function `chainedAsyncFunctions` that calls three separate async functions one after another, each logging a message with a 1-second delay. Use `await` to chain these functions.

### Task 5: Awaiting Concurrent Requests

Create an async function `concurrentRequests` that makes two API calls at the same time using `Promise.all()`. Log the combined results after both requests are complete.

### Task 6: Awaiting Parallel Calls

Write a function `parallelCalls` that accepts an array of URLs. Use `Promise.all()` to fetch data from each URL concurrently, logging all responses once they're complete.
