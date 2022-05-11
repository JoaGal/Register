
export const Register = () => {

  const handleSubmits = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="div-reg-container">
      <form onClick={handleSubmits} className="reg-container">
        <p>Nombre</p>
        <input type="text"/>
        <p>Apellido</p>
        <input type="text"/>
        <p>Email</p>
        <input type="email"/>
        <p>Contraseña</p>
        <input type="password" />
        <button className="button button-reg">Enviar</button>
     </form>
    </div>
  )
}
