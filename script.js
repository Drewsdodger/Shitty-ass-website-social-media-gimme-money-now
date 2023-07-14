// An array to store the posts
var posts = [];

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  var postContent = document.getElementById('post-content').value; // Get the post content

  if (postContent) {
    var post = {
      content: postContent,
      timestamp: new Date()
    };

    posts.push(post); // Add the post to the array

    displayPosts(); // Display the updated post list

    document.getElementById('post-content').value = ''; // Clear the input field

    savePosts(); // Save the posts to localStorage
  }
}

// Function to display the posts
function displayPosts() {
  var postList = document.getElementById('post-list');
  postList.innerHTML = ''; // Clear the post list

  for (var i = posts.length - 1; i >= 0; i--) {
    var post = posts[i];

    var postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = '<p>' + post.content + '</p><small>' + post.timestamp + '</small>';

    postList.appendChild(postElement);
  }
}

// Function to save the posts to localStorage
function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to load the posts from localStorage
function loadPosts() {
  var savedPosts = localStorage.getItem('posts');

  if (savedPosts) {
    posts = JSON.parse(savedPosts);
    displayPosts();
  }
}

// Add event listener to the form submission
var form = document.getElementById('post-form');
form.addEventListener('submit', handleFormSubmit);

// Load posts on page load
loadPosts();
