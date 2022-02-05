import validate from '../utils/validateLogin.js';

toastr.options.progressBar = true;
toastr.options.closeDuration = 300;
toastr.options.closeButton = true;

const login = async (event) => {
  event.preventDefault();

  const user = {};

  document.querySelectorAll('#user-form [name]')
    .forEach(input => user[input.name] = input);

  console.log(user);

  const { email, password } = user;


  if(!validate(email, password)) {
    return;
  }

  try {
    const req = await fetch('http://localhost:3000/users/authenticate', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
    });

    const response = await req.json();

    if(req.ok) {
      localStorage.setItem('@js-quiz:user', JSON.stringify(response.user));
      localStorage.setItem('@js-quiz:token', response.token);
      email.value = '';
      password.value = '';
      window.location.replace('/')
    } else {
      email.value = '';
      toastr.error(`${response.message}`, 'Erro ao realizar login!');
    }
    
  } catch(err) {
    toastr.error('Tente novamente mais tarde!', 'Erro ao realizar login!');
    console.error(`error: ${err}`);
  }
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click',login);

document.getElementById('logo').addEventListener('click', () => {
  window.location.replace('/');
})