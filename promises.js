// ASYNCHRONOUS JAVASCRIPT CRASH COURSE 
// CALLBACKS, PROMISES & ASYNC AWAIT
// These are ways to deal with Asynchronous data. Very relevant to JavaScript. Asynchornous - multitasking.

const posts = [
    { title: 'Post One', body: 'This is a post one'},
    { title: 'Post Two', body: 'This is a post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach(
            (post, index) => {
                output += `<li>${post.title}</li>`;
            }
        );
            // document.body.innerHTML  = output;
            document.getElementById('info').innerHTML  = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
         
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
   
}
// createPost({title: 'Post Three', body: 'This is post Three'}).then(getPosts)
// .catch(err => console.log(err));


// // Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('');

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
