import React, {useContext} from 'react'
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

const LoginScreen = ({history}) => {

  const lastPath =   localStorage.getItem('lastPath') || '/'


  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    // history.push('/')
    // history.replace('/')

    dispatch({
      type: types.login,
      payload: {
        name: 'Brandon'
      }
    })
    history.replace(lastPath)


  }
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>

      <button
        className='btn btn-primary'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
