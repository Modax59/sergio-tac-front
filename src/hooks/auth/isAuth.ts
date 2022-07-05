const isAuth = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    if (token) {
      return true;
    }
    return false;
  }
  return false;
};

export default isAuth;
