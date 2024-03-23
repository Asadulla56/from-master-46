import { useState } from "react";

const Sateful = () => {
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 chart')
        }
        else{
            setError('')
        }
        console.log(name,email,password)
    }

    const handleNameChange =e =>{
        setName(e.target.value)
    }
    const handleEmailChange =e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange =e =>{
        setPassword(e.target.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
         onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange}
        type="email" name="email" id="" />
        <br />
        <input type="number" name="phone" id="" />
        <br />
        <input onChange={handlePasswordChange} 
        type="password" name="password" id="" required />
        <br />
        <input type="submit" value="submit" />
      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default Sateful;
