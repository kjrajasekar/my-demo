import { createContext, useState } from 'react';

const UserContext = createContext({
    userName: '',
    setUserName: () => {},
  });
export default UserContext;