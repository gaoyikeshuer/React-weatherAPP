const posts = [{title :'1', body:'this is one'}, {title: '2', body:'this is two' }]
function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post,index) =>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        posts.push(post);
        const error = false;
        if(!error){
            resolve()
        }else{
            reject('Error: something went wrong')
        }
    }, 2000);
  });
}
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}
fetchUsers();


// async function init() {
//     await createPost({title:'3', body:'this is three'});
//     getPosts();
// }
// init();

// createPost({title: '3', body: ' This is three'})
// .then(getPosts)
// .catch(err => console.log(err));

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => 
// setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(
//     values =>
//     console.log(values)
// );