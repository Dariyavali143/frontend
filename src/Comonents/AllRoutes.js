import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';     //  its mandatary for page routing
import Home3 from './Home3'
import Home1 from './Home1'
import PostJobs from './PostJobs';
import Register from './Register'
import Footer from './Footer'
import Protected_route from './Protected_route';
import Protected_route2 from './Protected_route2';
import MyLogin from './MyLogin';
import Home2 from './Home2';
const AllRoutes = () => {


  return (
    <div>


      <BrowserRouter>
        <Routes>


     
        <Route path="/mylogin" element={<MyLogin/>}/>
        <Route path="/Home3"  element={<Protected_route2 Component={Home3}/>}/>
        <Route path="/PostJob"  element={<Protected_route2 Component={PostJobs}/>}/>


      
          <Route path="/" element={<Home1/>}/>
          <Route path="/Home2"  element={<Protected_route Component={Home2}/>}/>
          <Route path="/Register" element={<Protected_route Component= {Register}/>}/>
          <Route path="/*" element={<h1>Page Not Found</h1>} />
        </Routes>

      </BrowserRouter>





    </div>
  )
}

export default AllRoutes;