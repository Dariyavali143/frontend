import React from 'react'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom';
//import '../Styles/Home1.css'
const Navbar1 = () => {


  return (



    <div>

      <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#e3f2fd' }}>
        <div class="container-fluid">
          <a class="navbar-brand Logo">Pakka Local Jobs</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-1 mb-lg-0">



            </ul>
            <div class="d-flex">

              <button class="btn btn-outline-success" type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop_1">Contact</button>
              <button class="btn btn-outline-success" type="submit" >Want a Job</button>
              <button class="btn btn-outline-success" type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop_2">Post a Job</button>
              <Link to="/Home2"> <button class="btn btn-outline-success" type="submit" style={{ fontWeight: 'bold', color: 'blue' }}>Home</button></Link>
            </div>
          </div>
        </div>
      </nav>



      {/*  Side bar*/}

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Pakka Local Jobs</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">



          {/* Nav bar for mobiles devices */}

          <div className='NavBar2'>



            {/* Side Bar Work Start */}

            <div className='sidebar'>
              <span class="SideBarLinks" data-bs-toggle="modal" data-bs-target="#staticBackdrop_1">Contact</span>
              <span class="SideBarLinks" data-bs-toggle="modal" data-bs-target="#staticBackdrop_2">Post a Job</span>
            <Link to ="/Home2"> <span class="SideBarLinks">Home</span></Link> 
               <button class="btn btn-warning" style={{ width: '100%', fontWeight: 'bold' }}>Want a Job</button>
            </div>


          </div>
          {/* End Side Bar Work Start */}



        </div>
      </div>








      {/* Modal for contact page */}

      <div class="modal fade" id="staticBackdrop_1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 className='popupmodal_h5'>Welcome to Local Jobs</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p className='popupmodal_p' style={{ fontWeight: 'bold' }}>If you have any doubt please feel free to contact me</p>



              <span className='popupmodal_p'><i class="fas fa-map-marker-alt"></i>   NRT Center Chilakaluripet,Palnadu District-522161</span> <br />
              <span className='popupmodal_p'><i class="fas fa-phone-volume"></i> +919704437992  &nbsp;      </span>
              <span className='popupmodal_p'><i class="fas fa-envelope"></i>   shaikdariyavali678gmail.com</span>




            </div>

          </div>
        </div>
      </div>

      {/*  end Modal for contact page */}






      {/* Modal for post a job page */}

      <div class="modal fade" id="staticBackdrop_2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 className='popupmodal_h5'>Welcome to Local Jobs</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p className='popupmodal_p' style={{ fontWeight: 'bold' }}> Page under construction If you Employers please feel free to contact me</p>



              <span className='popupmodal_p'><i class="fas fa-map-marker-alt"></i>   NRT Center Chilakaluripet,Palnadu District-522161</span> <br />
              <span className='popupmodal_p'><i class="fas fa-phone-volume"></i> +919704437992  &nbsp;      </span>
              <span className='popupmodal_p'><i class="fas fa-envelope"></i>   shaikdariyavali678gmail.com</span>




            </div>

          </div>
        </div>
      </div>

      {/*  end Modal for post a job page */}
















    </div>
  )
}

export default Navbar1