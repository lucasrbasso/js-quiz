const userData = localStorage.getItem('@js-quiz:user');

if (userData) {
  const { name } = JSON.parse(userData);

  document.getElementById('username').innerText = name;

  document.getElementById('profile').addEventListener('click', () => {
    window.location.replace('/profile');
  });

  loadImageUser = async () => {
    try {
      document.getElementById(
        'profileImage'
      ).src = `https://ui-avatars.com/api/?name=${name}`;
      return;
    } catch (err) {
      console.log(err);
      console.log('Error with avatar API');
    }
  };

  loadImageUser();
}

document.querySelector('.logo').addEventListener('click', () => {
  window.location.replace('/');
});
