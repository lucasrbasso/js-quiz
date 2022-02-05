const userData = localStorage.getItem('@js-quiz:user');

const { name } = JSON.parse(userData);

document.getElementById('username').innerText = name;

document.getElementById('profile').addEventListener('click', () => {
  console.log('perfil');
})

loadImageUser = async () => {
  try {
      document.getElementById("profileImage")
        .src=`https://ui-avatars.com/api/?name=${name.split(' ')[0]}+${name.split(' ')[1]}`;
      return;
  } catch(err) {
    console.log(err);
    console.log('Error with avatar API')
  }
}

loadImageUser();