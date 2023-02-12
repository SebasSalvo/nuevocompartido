import { useState } from "react";

const Form2 = ()=>{

const [form,setForm]= useState({
    email:"",
    password:""
})
 
const handleFormChange = (event) => {
        const name = event.target.name;
        const value= event.target.value;

        setForm({
            ...form,
            [name]:value,
        })
    }

return(
        <div>
            <form >
                <h1>holi soy el form2</h1>
                <hr />
                <label htmlFor="email" >E-mail:</label>
                <input type="text" value={form.email} name="email" autoComplete="off" onChange={handleFormChange}/>
             
                <hr />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={form.password} onChange={handleFormChange} />
            </form>
        </div>
    )

}

export default Form2;