import React from 'react';
import { useState } from 'react';
import Usercontext from './Usercontext';
const  Usercontextprovider = ({children}) => {
const [user,setuser]=useState('');
// console.log(user);
return(
    <Usercontext.Provider value={{user,setuser}}>
        {children}
    </Usercontext.Provider>
)

}

export default Usercontextprovider;