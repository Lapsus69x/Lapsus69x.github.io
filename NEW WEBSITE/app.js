// app.js

const getPosts = async () => {
    try {
        const response = await fetch('/posts');
        const posts = await response.json();

        const postsSection = document.getElementById('posts');

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            postsSection.appendChild(postElement);
        });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
    }
};

getPosts();
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});