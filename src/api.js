import axios from 'axios'

export const signup = (username, password) => {
  return axios.post('/signup', { username, password }).then(response => response.data)
};

export const login = (username, password) => {
  return axios.post('/login', { username, password }).then(response => response.data)
};

export const logout = () => {
  return axios.post('/logout').then(response => response.data)
};



