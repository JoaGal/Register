
import { useContext, useState } from 'react'
import { LoginContext } from './Login';

export const LoginForm = () => {
    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const [selects, setSelects] = useState("");
    const loginContext = useContext(LoginContext);


    const handleSubmit = (e) =>{
      e.preventDefault();
      if(email === "joa@gmail.com" && password === "joa"){
        console.log("Formulario Enviado");
      }
    }

    const handelClick = ()=>{
        if(email === "joa@gmail.com" && password === "joa"){

          setError("");

          window.localStorage.setItem("isLogged", true);

          loginContext.onSuccess();

          return;

        }

        window.localStorage.setItem("isLogged", false);

        setError("Datos Incorrectos");
           
      
    }
    const handleSelect = (e)=>{
      setSelects(e.target.value);
      loginContext.setDato(e.target.value);
    }
  
  return (
    <>
     <form onSubmit={handleSubmit}>
          <select onChange={handleSelect} value={selects.value}>
            <option value="alumno">Alumno</option>
            <option value="profesor">Profesor</option>
          </select>
            {error.length > 0 ? (<p className='error'>{error}</p>) : null}
            <p>Email address</p>
            <input type="email" onChange={e => setEmail(e.target.value)} value={email}/>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
            <p className="register">Forgot Password?</p>
            <button className="button" onClick={handelClick}>Enviar</button>
     </form>
    </>
  )
}
