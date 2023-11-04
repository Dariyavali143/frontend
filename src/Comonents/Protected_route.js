import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage"; // for local storage data encript purpose


function Protected_route(props) {

    

    const { Component } = props     /* we access Dashbord .js, Product.js ...etc   by  Component  with props (heare Component is vaarible) */
    const navigate = useNavigate();   // we  useNavigate method in variable like  navigate


    const { id } = useParams();// we   acess paramiter for authantication purposr



  useEffect(()=>{
    let Key=process.env.REACT_APP_SECRET_KEY_C


    let Password = secureLocalStorage.getItem('Password');
    //console.log(`Fom Use effect :${Password}`)

    if (Password!==Key ) {
     navigate('/')
    } else {
     // navigate('/')

    }



},[])
  

    









    return (
        <div className="App">


               <Component />     {/* e variable dwara anni links ni protect chesam */}

            {/*  e component dwara anni component ni protect chesam */}

        </div>
    );
}

export default Protected_route;
