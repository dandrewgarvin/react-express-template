export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('currentUser'));

  if (user && user.token) {
    return `Bearer ${user.token}`;
  } else {
    return '';
  }
}
