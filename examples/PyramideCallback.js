// Callback pyramid example
// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//         console.log("Step 2");
//         setTimeout(() => {
//             console.log("Step 3");
//             setTimeout(() => {
//                 console.log("Step 4");
//                 setTimeout(() => {
//                     console.log("Step 5");
//                 }, 500);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// })

// Resolution of the pyramid Callback
const step1 = () => new Promise(resolve => setTimeout(() => resolve("Step 1"), 1000));
const step2 = () => new Promise(resolve => setTimeout(() => resolve("Step 2"), 1000));
const step3 = () => new Promise(resolve => setTimeout(() => resolve("Step 3"), 1000));
const step4 = () => new Promise(resolve => setTimeout(() => resolve("Step 4"), 1000));
const step5 = () => new Promise(resolve => setTimeout(() => resolve("Step 5"), 1000));

step1()
    .then(res => {
        console.log(res);
        return step2();
    })
    .then(res => {
        console.log(res);
        return step3();
    })
    .then(res => {
        console.log(res);
        return step4();
    })
    .then(res => {
        console.log(res);
        return step5();
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err)
    )