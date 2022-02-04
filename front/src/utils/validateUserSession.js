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
  
    await req.json();
  
    if(req.ok) {
      return {
        user: JSON.parse(user),
        token,
      };
  
    } else {
      localStorage.clear('@js-quiz:user');
      localStorage.clear('@js-quiz:token');
      window.location.replace('/login');
    }
    
  } catch(err) {
    localStorage.clear('@js-quiz:user');
    localStorage.clear('@js-quiz:token');
    window.location.replace('/login');
  }
}

verifyUser();

