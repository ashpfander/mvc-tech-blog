const addComment = async (event) => {
    event.preventDefault();
      
    const postId = document.getElementById('post-id').value;
    const description = document.querySelector('#leave-comment').value.trim();
      
    if (description) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ postId, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
      
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Something went wrong. Please try again.');
        }
    }
};
      
document
    .querySelector('.leave-comment')
    .addEventListener('submit', addComment);