import React from 'react'
import '../Styles/MyLogin.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"; // for page redirect ke liye
import Navbar from './Navbar';
import Footer from './Footer';
import secureLocalStorage from "react-secure-storage"; // for local storage data encript purpose
const MyLogin = () => {

    const navigate = useNavigate(); // we  useNavigate method in variable like  navigate
 

    const [email, Setemail] = useState("");            // heare all const is variable names
    const [password, setPassword] = useState("");
  
    const [envemail, Setenvemail] = useState("");            // heare all const is variable names
    const [envpassword, envsetPassword] = useState("");
    const [envkey, setenvkey] = useState()



useEffect(()=>{
let GetEmail=process.env.REACT_APP_SECRET_KEY_M_EMAIL
let GetPws=process.env.REACT_APP_SECRET_KEY_M_PWS

let Key = process.env.REACT_APP_SECRET_KEY_M
Setenvemail(GetEmail)
envsetPassword(GetPws)
setenvkey(Key)
},[])








  
  // login authantication
  function log_in() {        // click submit then it call
    
    if ((envemail==email) && (envpassword==password)) {
     
      secureLocalStorage.setItem('Password',envkey);
  
      navigate("/Home3"); 
  
 
    } else {
      alert("Enter Correct Email and Password");
   
    }
    }
   // end login authantication
  













    return (





        <div className=''>



<Navbar/>


<section className="vh-100">


  <div className="container py-5 h-100">

    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <div>
        
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg" required   onChange={(e) => { Setemail(e.target.value) }}/>
            <label className="form-label" for="form1Example13"  >Email address</label>
          </div>

         
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" required  onChange={(e) => { setPassword(e.target.value) }}/>
            <label className="form-label" for="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
        
          
          </div>

    
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={log_in}  style={{marginLeft:"40%"}}>LogIn</button>


         

        </div>
      </div>
    </div>
  </div>
</section>




<Footer/>






        </div>
    )
}

export default MyLogin