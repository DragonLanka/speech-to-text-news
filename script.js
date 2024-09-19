// Sample data of news posts with long content
const posts = [
    
    {
        title: "speech to text",
        content: "new updates are coming soon",
        image: "images/larg.png"
    }
];

// Function to display only part of the content with a "Read More" button
function displayPosts() {
    const postsContainer = document.getElementById('news-posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('news-post');
        
        // Short version of the content (first 100 characters)
        const shortContent = post.content.substring(0, 100) + "...";
        
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="short-content">${shortContent}</p>
            <p class="full-content" style="display: none;">${post.content}</p>
            <img src="${post.image}" alt="${post.title}">
            <button class="read-more-btn">Read More</button>
        `;
        
        postsContainer.appendChild(postElement);
    });

    // Adding "Read More" functionality
    document.querySelectorAll('.read-more-btn').forEach((button, index) => {
        button.addEventListener('click', function () {
            const fullContent = document.querySelectorAll('.full-content')[index];
            const shortContent = document.querySelectorAll('.short-content')[index];
            
            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                shortContent.style.display = 'none';
                button.textContent = 'Read Less';
            } else {
                fullContent.style.display = 'none';
                shortContent.style.display = 'block';
                button.textContent = 'Read More';
            }
        });
    });
}

// Call the function to display posts
displayPosts();
