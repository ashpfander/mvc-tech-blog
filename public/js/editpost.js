const editPost = async (event) => {
    event.preventDefault();

    const title = document.getElementById('post-title');
    const description = document.getElementById('post-description');
    const postId = document.getElementById('post-id').value;

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT', 
        body: JSON.stringify({ title: title.value, description: description.value }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert('Something went wrong. Please try again.');
        }
}

const delPost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
  
        const response = await fetch(`/api/post/${id}`, {
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
    .querySelector('.edit-post-form')
    .addEventListener('submit', editPost);

document
    .querySelector('#delete-btn')
    .addEventListener('click', delPost);