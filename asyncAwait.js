
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


// More elegant way to handle promises. 
// Async / Await 
async function init(){
    await createPost({title: 'Post Three', body: 'This is post Three'});

    getPosts();
}

init();