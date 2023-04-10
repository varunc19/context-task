import { createContext } from 'react';

const Context = createContext({
  email: '',
  password: '',
  setEmail: () => {},
  setPassword: () => {},
});

export default Context;