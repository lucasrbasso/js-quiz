import validate from '../utils/validateProfile.js';
const token = localStorage.getItem('@js-quiz:token');

toastr.options.progressBar = true;
toastr.options.closeDuration = 300;
toastr.options.closeButton = true;

const user = {};

document.querySelectorAll('#user-form [name]')
.forEach(input => user[input.name] = input);

const { name, email, old_password, password, password_confirmation } = user;

try {
  const req = await fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type':'application/json' 
    },
  });

  const response = await req.json();

  if(req.ok) {
    name.value = response.name;
    email.value = response.email;
  }
} catch(err) {
  toastr.error('Tente novamente mais tarde.', 'Problemas ao carregar perfil!');
}

const updateUser = async (event) => {
  event.preventDefault();

  if(!validate(name, email, old_password, password, password_confirmation)) {
    return;
  }

  try {
    if(password.value.length > 0) {
      const req = await fetch('http://localhost:3000/users', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type':'application/json' 
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          old_password: old_password.value,
          password: password.value,
          password_confirmation: password_confirmation.value
        }),
      });

      const response = await req.json();

      if(req.ok) {
        toastr.success('Os dados foram registrados!', 'Usuário atualizado!');
        email.value = '';
        name.value = '';
        old_password.value = '';
        password.value = '';
        password_confirmation.value = '';
      } else {
        toastr.error(`${response.message}`, 'Erro ao atualizar usuário!');
        password.value = '';
        old_password.value = '';
        password_confirmation.value = '';
      }
    } else {
      const req = await fetch('http://localhost:3000/users', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type':'application/json' 
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value
        }),
      });

      const response = await req.json();

      if(req.ok) {
        toastr.success('Os dados foram registrados!', 'Usuário atualizado!');
        email.value = '';
        name.value = '';
      } else {
        toastr.error(`${response.message}`, 'Erro ao atualizar usuário!');
      }
    }
  } catch(err) {
    toastr.error('Tente novamente mais tarde!', 'Erro ao cadastrar usuário!');
    console.error(`error: ${err}`);
  }
}

const deleteUser = () => {
  Swal.fire({
    title: 'Você tem certeza?',
    text: "Você não poderá reverter isso posteriormente!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#D53F8C',
    cancelButtonColor: '#c53030',
    confirmButtonText: 'Sim, remova!',
    cancelButtonText: 'Cancelar'
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const request = await fetch('http://localhost:3000/users', {
          method: 'DELETE',
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type':'application/json' 
          },
        });
      
        if(request.ok) {
  
          localStorage.clear('@js-quiz:user');
          localStorage.clear('@js-quiz:token');  
          
          Swal.fire(
            'Deletado!',
            'Sua conta foi deletada.',
            'success',
          )

          Swal.fire({
            icon: 'sucess',
            title: 'Deletado!',
            text: 'Sua conta foi deletada.',
          }).then((result) => {
            window.location.replace('/');
          })
        } else {
          console.log(request.ok);
          Swal.fire(
            'Erro!',
            'Ocorreu um erro, tente novamente mais tarde.',
            'error',
          )
        }
        
      } catch(err) {
        console.log(err);
        Swal.fire(
          'Erro!',
          'Ocorreu um erro, tente novamente mais tarde.',
          'error',
        )
      }
    }
  })
}

const logout = () => {
  localStorage.removeItem('@js-quiz:user');
  localStorage.removeItem('@js-quiz:token');
  window.location.replace('/');
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click',updateUser);

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click',deleteUser);

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click',logout);