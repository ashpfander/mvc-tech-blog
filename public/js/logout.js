const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        // If successful, takes user back to the homepage
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};
  
document.querySelector('#logout').addEventListener('click', logout);