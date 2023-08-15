import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'


const style = {
    wrapper: `flex justify-center`
}

function LogIn() {
    const googleLogIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)

    }
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleLogIn} />
    </div>
  )
}

export default LogIn
