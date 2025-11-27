document.addEventListener("DOMContentLoaded", function() {
    
    // Select the form and the list where comments go
    const commentForm = document.getElementById("commentForm");
    const commentList = document.getElementById("comment-list");

    // Listen for the submit event
    commentForm.addEventListener("submit", function(event) {
        
        // Prevent page reload
        event.preventDefault();

        // Get values from input fields
        const username = document.getElementById("username").value;
        const usertext = document.getElementById("usercomment").value;

        if (username && usertext) {
            // Create a new comment div
            const newComment = document.createElement("div");
            newComment.classList.add("comment");

            // Get first letter of name for the avatar
            const initial = username.charAt(0).toUpperCase();

            // Random color for avatar (just for fun visual effect)
            const randomColor = getRandomColor();

            // Set the HTML structure for the new comment
            newComment.innerHTML = `
                <div class="user-avatar" style="background-color: ${randomColor};">${initial}</div>
                <div class="comment-text">
                    <h4>${username}</h4>
                    <p>${usertext}</p>
                </div>
            `;

            // Add the new comment to the list
            commentList.appendChild(newComment);

            // Clear the form inputs
            commentForm.reset();
        }
    });

    // Helper function to get a random color for the avatar
    function getRandomColor() {
        const colors = ['#e74c3c', '#8e44ad', '#2980b9', '#16a085', '#d35400', '#2c3e50'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});