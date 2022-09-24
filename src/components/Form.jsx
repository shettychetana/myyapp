import React,{useState} from "react";

function Form() {
  const [name, setName] = useState("");
  
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [usn, setUsn] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault();
    const data = {
      name:name,
      email:email,
      phone:phone,
      branch:branch,
      usn:usn
    }
      console.log(data);

    

    
  };



  return (
    <div>
      <form onSubmit={ handleSubmit}>
        <input type="text" value={name} placeholder="Student name" onChange={(e )=> setName(e.target.value)}/>
        <br></br>
        <br></br>       
         <input type="email" value={email} placeholder="email" onChange={(e )=> setEmail(e.target.value)}/>

        <br></br>
        <br></br>
        <input type="number" value={phone} placeholder=" your ph.number" onChange={(e)=> setPhone(e.target.value)}/>
        <br></br>
        <br></br>
        <input type="text" value={branch} placeholder=" your branch" onChange={(e)=> setBranch(e.target.value)}/>
        <br></br>
        <br></br>
        <input type="text" value={usn} placeholder=" your usn" onChange={(e)=> setUsn(e.target.value)}/>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>

      </form>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}


export default Form