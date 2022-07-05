import jwtDecode from 'jwt-decode';

// eslint-disable-next-line consistent-return
const idUser = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    if (token) {
      return jwtDecode(token);
    }
  }
};

export default idUser;
