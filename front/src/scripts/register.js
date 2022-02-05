import validate from '../utils/validateRegister.js';

toastr.options.progressBar = true;
toastr.options.closeDuration = 300;
toastr.options.closeButton = true;

const createUser = async (event) => {
  event.preventDefault();

  const user = {};

  document.querySelectorAll('#user-form [name]')
    .forEach(input => user[input.name] = input);


  console.log(user);

  const { name, email, password, password_confirmation } = user;


  if(!validate(name, email, password, password_confirmation)) {
    return;
  }

  try {
    const req = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value
        }),
    });

    const response = await req.json();

    if(req.ok) {
      toastr.success('Realize login para começar a jogar!', 'Usuário registrado!');
      email.value = '';
      name.value = '';
      password.value = '';
      password_confirmation.value = '';
    } else {
      toastr.error(`${response.message}`, 'Erro ao cadastrar usuário!');
      password.value = '';
      password_confirmation.value = '';
    }
    
  } catch(err) {
    toastr.error('Tente novamente mais tarde!', 'Erro ao cadastrar usuário!');
    console.error(`error: ${err}`);
  }
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click',createUser);

document.getElementById('logo').addEventListener('click', () => {
  window.location.replace('/');
})