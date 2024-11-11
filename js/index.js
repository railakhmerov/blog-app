const posts = [];

const newPostBtnNode = document.querySelector('.new-post-btn');
const postInputTitleNode = document.querySelector('.js-input-content__title');
const postInputTextNode = document.querySelector('.js-input-content__text');
const postOutputContentNode = document.querySelector('.post__output-content');

newPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    displayPosts();
});

function getPostFromUser() {
    const title = postInputTitleNode.value;
    const text = postInputTextNode.value;

    return {
        title: title,
        text: text,
    };
};

function addPost({ title, text }) {
    posts.push({
        title: title,
        text: text,
    });
}

function getPosts() {
    return posts;
}

function displayPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
        <div class="post__output-content">
            <h3 class="output-content__title">${post.title}</h3>
            <p class="output-content__text">${post.text}</p>
        </div>
        `;
    });

    postOutputContentNode.innerHTML = postsHTML;
};




// const posts = [];
// const newPostBtnNode = document.querySelector('.new-post-btn');
// const postInputTitleNode = document.querySelector('.js-input-content__title');
// const postInputTextNode = document.querySelector('.js-input-content__text');
// const postOutputNode = document.querySelector('.post__output-content');

// newPostBtnNode.addEventListener('click', function() {
//     const postFromUser = getPostFromUser();
//     addPost(postFromUser);
//     displayPosts(); // No need to call getPosts() here
// });

// function getPostFromUser() {
//     const title = postInputTitleNode.value; // Get value from the title input
//     const text = postInputTextNode.value; // Get value from the text input
//     return {
//         title: title,
//         text: text,
//     };
// }

// function addPost({ title, text }) {
//     posts.push({
//         title: title,
//         text: text,
//     });
// }

// function getPosts() {
//     return posts; // This function is still useful for retrieving posts
// }

// function displayPosts() {
//     const posts = getPosts();
//     let postsHTML = '';
//     posts.forEach(post => {
//         postsHTML += `
//         <div class="post__output-content">
//             <h3 class="js-output-content__title">${post.title}</h3>
//             <p class="js-output-content__text">${post.text}</p>
//         </div>
//         `;
//     });
//     postOutputNode.innerHTML = postsHTML; // Display all posts in the output node
// }