import React from 'react'
import { useContext } from 'react';
import Usercontext from '../context/Usercontext';
function Profile() {
    const {user} = useContext(Usercontext);
    
    if(!user) 
    return <div>please login</div>
    
    return <h1>welcome {user.username}</h1>
  return (
   <>
      
       <h1> gfdgfd</h1>
   </>
  )
}

export default Profile;