export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));
  //console.log(user.data.attributes.token);

  if (user ) {
      return { 
        'Authorization': user.data.attributes.token,
        'Content-Type': 'application/json' };
  } else {
      return {};
  }
}