const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {
    const response = await fetch('api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      const error = await response.json();
      console.error('Failed to sign up:', error);

      if (error.error === 'Email already in use') {
        alert('Email already in use, try logging in.');
      } else if (error.error === 'Username already in use') {
        alert('Username already in use, be a little more original.');
      } else {
        alert('Failed to sign up.');
      }
    }
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
