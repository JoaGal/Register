import React, { createContext, useState } from 'react'
import { LoginForm } from './LoginForm';
import { LoginUp } from './LoginUp';
import { Register } from './Register';

export const LoginContext = createContext();

export const Login = () => {
  const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged"));
  const [dato, setDato] = useState();
  const [reg, setReg] = useState(0);


    const onSuccess = ()=>{
        setIsLogged("true");
    }

    const handelRegister = ()=>{
      setReg(reg + 1);
    }

  return (
    <>
      <LoginContext.Provider value={{dato, setDato, isLogged, onSuccess}}>
        {isLogged === "true" ?  <LoginUp /> : (reg > 0 ? <Register/> : <LoginForm />)}
        {reg === 0 ? (<button className="register-button" onClick={handelRegister}>Register</button>) : null}
      </LoginContext.Provider>
    </>
    
  )
}
