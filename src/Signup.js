import React,{useState} from 'react'
import './Signup.css'
function Signup() {
    const [formData, setFormData] = useState({

        firstName:'',
        lastName:'',
        Email:'',
        password:''
    })
    const handleInputchange=(event)=>{
const {name,value}=event.target
setFormData((prevData)=>({...prevData,[name]:value}))

}

const handleSubmit=(event)=>{
 event.preventDefault();
    console.log(formData,'the input data');

}
    
  return (
    <div className='signup-card'>
        <h1>Registeration form</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="">FirstName</label>
            <input type="text" placeholder='FirstName' name='firstName' value={formData.firstName} onChange={(event)=>handleInputchange(event)} />
            <label htmlFor="">LastName</label>
            <input type="text" placeholder='LastName' name='lastName' value={formData.lastName} onChange={(event)=>handleInputchange(event)} />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' name='Email' value={formData.Email} onChange={(event)=>handleInputchange(event)}/>
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Password' name='password' value={formData.password} onChange={(event)=>handleInputchange(event)} />
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup