document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const backButton = document.getElementById('backButton');
    const blogPostsContainer = document.getElementById('blog-posts');

    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = themeToggle.textContent === '☀️' ? '🌙' : '☀️';
    });

    function loadBlogPosts() {
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPostsContainer.innerHTML = '';

        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <small>Author: ${post.username}</small>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    }

    loadBlogPosts();
});
