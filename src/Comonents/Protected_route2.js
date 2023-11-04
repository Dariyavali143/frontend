import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage"; // for local storage data encript purpose

function Protected_route2(props) {

    

    const { Component } = props     /* we access Dashbord .js, Product.js ...etc   by  Component  with props (heare Component is vaarible) */
    const navigate = useNavigate();   // we  useNavigate method in variable like  navigate




  useEffect(()=>{

    let Key=process.env.REACT_APP_SECRET_KEY_M



   


    let Password = secureLocalStorage.getItem('Password');
    //console.log(`Fom Use effect :${Password}`)

    if (Password!==Key ) {
     navigate('/mylogin')
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

export default Protected_route2;
