//importo useState desde react para usar estados
import { useState } from "react";

const Form = ()=>{

// creo los estados para almacenar lo que traigo del los input.
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

   

            const handlemail = (event) => {
//le paso a setEmail el valor actual del input "(EVENTO).target.value"
                setEmail(event.target.value)
            }

            const handlePassword = (event) => {
                setPassword(event.target.value)
            }
return(
        <div>
            <form >
                <h1>holi soy el form</h1>
                <hr />
                <label htmlFor="email" >E-mail:</label>
                <input type="text" value={email} name="email" autoComplete="off" onChange={handlemail}/>
                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                onChange es un evento y se activa cuando el valor de un elemento cambia
                +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
                value={email} iguala el valor de la variable email(de la func) al value
                ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                <hr />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={password} onChange={handlePassword} />
            </form>
        </div>
    )

}

export default Form;