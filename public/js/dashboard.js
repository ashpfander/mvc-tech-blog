const newPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-description').value.trim();
  
    if (title && description) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
  
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Something went wrong. Please try again.');
        }
    }
};
  
document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPost);