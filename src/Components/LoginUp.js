import { useContext } from "react"
import { LoginContext } from "./Login"





export const LoginUp = () => {
  const {dato} = useContext(LoginContext);

  return (
    <div className='container-login'>
        <p className='p-login'>Email: joa@gmail.com</p>
        <p className='p-login'>{dato}</p>
    </div>
  )
}
