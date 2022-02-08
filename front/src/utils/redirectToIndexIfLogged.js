const validateUserLogged = async () => {

  const token = localStorage.getItem('@js-quiz:token');
  const user = localStorage.getItem('@js-quiz:user');

  if (!token && !user) {
    localStorage.removeItem('@js-quiz:user');
    localStorage.removeItem('@js-quiz:token');
  }
  
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

      window.location.replace('/');
      return;
  
    } else {
      localStorage.removeItem('@js-quiz:user');
      localStorage.removeItem('@js-quiz:token');
    }
    
  } catch(err) {
    localStorage.removeItem('@js-quiz:user');
    localStorage.removeItem('@js-quiz:token');
  }
}

validateUserLogged();



