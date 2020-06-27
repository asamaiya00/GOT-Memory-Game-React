import Cookies from 'js-cookie';
const { createContext } = require('react');

const token = Cookies.get('token');
const loggedIn = !!token; //string to bool

export const InitialState = { loggedIn };

export const reducer = (state, { type, payload }) => {
  if (type === 'LOGOUT') {
    return { token: '', loggedIn: false };
  }
  if (type === 'SET_LOGIN') {
    return { token: payload, loggedIn: true };
  }
};

const GlobalContext = createContext();

export default GlobalContext;
