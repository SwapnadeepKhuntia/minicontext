import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Usercontext from '../context/Usercontext';
function Login() {
  
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    
    const {setuser} = useContext(Usercontext);

    function handelsubmit(e){

        e.preventDefault();

       setuser({username,email,password});
    }
  
    return (
      <>
        
        <form action="">
          <input 
          type="text"
          placeholder='Name'
          value={username}
          onChange={(e)=>setusername(e.target.value)}
           />
  
          <input 
          type="email"
          placeholder='email'
          value={email}
          onChange={(e)=>setemail(e.target.value)}
           />
  
  
          <input 
          type="password"
          placeholder='password'
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
           />
  
           <button type='submit' value="submit" onClick={handelsubmit}>Submit</button>
        </form>
        <Link to="/profile">profile</Link>
      </>
    )
}

export default Login;