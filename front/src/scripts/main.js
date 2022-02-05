document.getElementById('login').addEventListener('click', () => {
  window.location.replace('/login');
});

document.getElementById('play').addEventListener('click', () => {
  window.location.replace('/topic');
});

const token = localStorage.getItem('@js-quiz:token');
const user = localStorage.getItem('@js-quiz:user');

if (token && user) {
  document.getElementById('profile').classList.add('profile-visible');
  document.getElementById('login').classList.add('profile-hidden');
} else {
  document.getElementById('login').classList.add('profile-visible');
}