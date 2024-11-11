const posts = [];

const todaysNowDate = new Date();
// console.log(todaysNowDate.toLocaleString("ru-RU", { hour12: false }));
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
			<p class="output-content__date-today js-output-content__date-today">
                ${todaysNowDate.toLocaleDateString()} ${todaysNowDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
            <h3 class="output-content__title js-output-content__title">${ post.title }</h3>
            <p class="output-content__text js-output-content__text">${ post.text }</p>
        </div>
        `;
    });

    postOutputContentNode.innerHTML = postsHTML;
};