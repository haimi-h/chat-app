import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import LogIn from './LogIn'
import Logout from './Logout'


const style = {
    nav:`bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl `
    
}

function Navbar() {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App </h1>
        {user ? <Logout/> : <LogIn />}
       
        
        
        
    </div>
  )
}

export default Navbar;
