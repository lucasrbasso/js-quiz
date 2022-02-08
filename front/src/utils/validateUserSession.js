const token = localStorage.getItem('@js-quiz:token');
const user = localStorage.getItem('@js-quiz:user');

if (!token && !user) {
  localStorage.removeItem('@js-quiz:user');
  localStorage.removeItem('@js-quiz:token');
  window.location.replace('/login');
}

verifyUser = async () => {
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

      localStorage.setItem('@js-quiz:user', JSON.stringify(response));

      return {
        user: JSON.parse(user),
        token,
      };
  
    } else {
      localStorage.removeItem('@js-quiz:user');
      localStorage.removeItem('@js-quiz:token');
      window.location.replace('/login');
    }
    
  } catch(err) {
    localStorage.removeItem('@js-quiz:user');
    localStorage.removeItem('@js-quiz:token');
    window.location.replace('/login');
  }
}

verifyUser();

