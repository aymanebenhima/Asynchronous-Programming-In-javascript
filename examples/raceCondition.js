const fetchuser = () => new Promise(resolve => setTimeout(() => resolve('User'), 300));
const fetchpost = () => new Promise(resolve => setTimeout(() => resolve('Post'), 200));

Promise.all([fetchuser(), fetchpost()]).then(res => console.log(res))

