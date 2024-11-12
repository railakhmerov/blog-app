const posts = [];

const TITLE_LETTERS_LIMIT_MESSAGE = 10;
const TEXT_LETTERS_LIMIT_MESSAGE = 20;
const CHECK_TITLE_EMPTY_INPUTS = 0;
const CHECK_TEXT_EMPTY_INPUTS = 0;


const newPostBtnNode = document.querySelector('.new-post-btn');
const postInputTitleNode = document.querySelector('.js-input-content__title');
const postInputTextNode = document.querySelector('.js-input-content__text');
const postOutputContentNode = document.querySelector('.post__output-content');
const postTitleLettersLimitMessage = document.querySelector('.js-post__title-letters-limit-message');
const postTextLettersLimitMessage = document.querySelector('.js-post__text-letters-limit-message');

// function reloadPage() { // перезагрузка тега form, для отслеживания актуальной инфы в input
//     setInterval(() => {
//         document.querySelector('.js-post__inputs');
//         console.log('page reload');
//     }, 1000);
// }
// reloadPage();


newPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    displayPosts();
});

postInputTitleNode.addEventListener('input', function() {
    checkSimbolLimit();
    checkForEmptyInputs();
});

postInputTextNode.addEventListener('input', function() {
    checkSimbolLimit();
    checkForEmptyInputs();
});

function checkSimbolLimit() {
    const titleLength = postInputTitleNode.value.length;
    const textLength = postInputTextNode.value.length;
// Проверки на символы
    if (titleLength > TITLE_LETTERS_LIMIT_MESSAGE) {
        postTitleLettersLimitMessage.innerHTML = `Пост больше ${ TITLE_LETTERS_LIMIT_MESSAGE } символов`;
        postTitleLettersLimitMessage.classList.remove('post__title-letters-limit-message__hidden');
    } else {
        postTitleLettersLimitMessage.classList.add('post__title-letters-limit-message__hidden');
    };

    if (textLength > TEXT_LETTERS_LIMIT_MESSAGE) {
        postTextLettersLimitMessage.innerHTML = `Пост больше ${ TEXT_LETTERS_LIMIT_MESSAGE } символов`;
        postTextLettersLimitMessage.classList.remove('post__text-letters-limit-message__hidden');
    } else {
        postTextLettersLimitMessage.classList.add('post__text-letters-limit-message__hidden');
    };
};

function checkForEmptyInputs() { // проверка на пустые инпуты
    const checkTitleEmpty = postInputTitleNode.value.length;
    const checkTextEmpty = postInputTextNode.value.length;

    if (checkTitleEmpty <= 0 || checkTextEmpty <= 0) {
        newPostBtnNode.setAttribute('disabled', '');
    } else {
        newPostBtnNode.removeAttribute('disabled');
        newPostBtnNode.className = 'post__inputs-btn';
    };
};

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
			<p class="output-content__date-today js-output-content__date-today"></p>
            <h3 class="output-content__title js-output-content__title">${ post.title }</h3>
            <p class="output-content__text js-output-content__text">${ post.text }</p>
        </div>
        `;
    });

    postOutputContentNode.innerHTML = postsHTML;
};