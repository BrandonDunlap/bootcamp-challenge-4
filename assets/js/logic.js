document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('button');
    const usernameInput = document.querySelector('input[type="text"][name="username"]');
    const titleInput = document.querySelector('input[type="text"][name="title"]');
    const contentInput = document.querySelector('input[type="text"][name="content"]');
    const submitButton = document.querySelector('.submitButton');
    const form = document.querySelector('.rightSideNav'); // Adjust this selector if your form is located elsewhere

    // Error message element
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'Please fill out all fields.';
    errorMessage.hidden = true;
    form.insertBefore(errorMessage, form.firstChild); 

    // Validate form inputs
    function validateForm() {
        if (!usernameInput.value.trim() || !titleInput.value.trim() || !contentInput.value.trim()) {
            errorMessage.hidden = false;
            return false;
        }
        errorMessage.hidden = true;
        return true;
    }

    // Handle form submission
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (validateForm()) {
            // Save the blog post to localStorage
            const newPost = {
                username: usernameInput.value,
                title: titleInput.value,
                content: contentInput.value
            };
            const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            existingPosts.push(newPost);
            localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

            // Clear input fields after saving
            usernameInput.value = '';
            titleInput.value = '';
            contentInput.value = '';

            // Redirect to blog.html
            window.location.href = 'blog.html';
        }
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = themeToggle.textContent === '☀️' ? '🌙' : '☀️';
    });
});
    