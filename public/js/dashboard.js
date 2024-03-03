const newPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-description').value.trim();
  
    if (title && description) {
        const response = await fetch(`/api/posts`, {
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
  
const delPost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
  
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
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
  
document
    .querySelector('#delete-btn')
    .addEventListener('click', delPost);

document
    .querySelector('#new-post-btn')
    .addEventListener('click', '/newpost');