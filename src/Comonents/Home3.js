import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/Home1.css'
import BookDataService from './ServicesCRUD'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import ReactPaginate from 'react-paginate';  // install react js pagination pakage must 8.0.4 or higher
import { useNavigate } from "react-router-dom"; // for page redirect ke liye
import Swal from 'sweetalert2'






const Home3 = () => {


  const navigate = useNavigate(); // we  useNavigate method in variable like  navigate
  const [Hide, show] = useState(true) // Serch Bar Hide Show
  //const [getdbdata, setgetdbdata] = useState([])

  const [getdbdata2, setgetdbdata2] = useState([])  // we store al db data in variable -2 also
  const [getdbdata1, setgetdbdata1] = useState([])  // we store al db data

  const [SerchByLocation, setSerchByLocation] = useState('') // Serch Job By Location
  const [SerchByJobTitle, setSerchByJobTitle] = useState('') //Serch Job By JobTitle
  const [Serchbyworkmode, setSerchbyworkmode] = useState() // Serch Job By  Work mode
  const [Serchbyeducation, setSerchbyeducation] = useState() //Serch Job By Education


  const [DataFound, SetDataFound] = useState(0)  //show serch results ofter serch


  //console.log(`First Capcha Results:${CaptchaResult}`)



  // 1) pagination variables
  const [offset, setOffset] = useState();   // increment automatically when click pagination buttons
  //const [perPage] = useState(5); // show data per page
  const [perPage, setperPage] = useState(5); // show data per page
  const [pageCount, setPageCount] = useState(0) // for pagination perpose
  const [playerData, setPlayerData] = useState([]);// display data as per pagination requarment
  const [playerData1, setPlayerData1] = useState([]); // first set api data in this variable
  // 1) end pagination variables













  useEffect(() => {

    dbdata()
   
   

  }, [offset])









  

  const dbdata = async () => {

    
    fetch(process.env.REACT_APP_SECRET_KEY_API).then((result) => {

    result.json().then((resp) => {

       console.warn("result",resp)

       setgetdbdata2(resp) 




       // we store al db data
    //setgetdbdata1(data1)    // we store al db data
    //SetDataFound(data1.length) // List of job founded


    // Pgination Work
    setPageCount(Math.ceil(resp.length / perPage))// automatic adjust pagination cound


    //it run only one time and display data from 0 to 9 index number
    setOffset(0)
    setPlayerData1(resp)

    setgetdbdata1(playerData1.slice(offset, offset + perPage)) // pagiki 10 chupistadi

    SetDataFound(resp.length)





    })

  })


  }









  // if we serch by jobtitle then 'SerchByLocation'' state do Zero

  const SerchByJob = (e) => {



    let value = e.target.value
    if (value.length >= 0) {

      setSerchByLocation('') //' setSerchByLocation' state do Zero
      let result = getdbdata2.filter(ele => ele.JobTitle.toLowerCase().includes(value.toLowerCase()))

      setSerchByJobTitle(value) // For enable input text


      // Pgination Work
      setPageCount(Math.ceil(result.length / perPage))// automatic adjust pagination cound
      //it run only one time and display data from 0 to 9 index number
      setOffset(0)
      setPlayerData1(getdbdata2)
      setgetdbdata1(result.slice(offset, offset + perPage)) // pagiki 10 chupistadi
      SetDataFound(result.length)// total result found
      setPlayerData1(result)  // edilekapote previouse button lo unna data display avutundi adaina button nokkinappudu


    } if (value.length === 0) {

      // Pgination Work start for serch
      setPageCount(Math.ceil(getdbdata2.length / perPage))// automatic adjust pagination cound
      //it run only one time and display data from 0 to 9 index number
      setOffset(0)
      setPlayerData1(getdbdata2)

      setgetdbdata1(getdbdata2.slice(offset, offset + perPage)) // pagiki 10 chupistadi
      SetDataFound(getdbdata2.length) //total result found

    } else {

    }










    // let value = e.target.value
    // if (value.length >= 0) {
    //   setSerchByLocation('')  //'SerchByLocation' state do Zero
    //  // setSerchByJobTitle(value)

    //   //Found Results purpose only
    //   let x = getdbdata1.filter(ele => ele.JobTilte.toLowerCase().includes(value.toLowerCase())).length
    //   SetDataFound(x)


    // }

  }


















  //if we serch job By location then  'SerchByJobTitle' state do Zero

  const SerchJobByLocation = (e) => {
    let value = e.target.value


    if (value.length >= 0) {


      setSerchByJobTitle('') //'SerchByJobTitle' state do Zero
      let result = getdbdata2.filter(ele => ele.CurrentDate.toLowerCase().includes(value.toLowerCase()))

      setSerchByLocation(value) // For enable input text



      // Pgination Work
      setPageCount(Math.ceil(result.length / perPage))// automatic adjust pagination cound
      //it run only one time and display data from 0 to 9 index number
      setOffset(0)
      setPlayerData1(getdbdata2)
      setgetdbdata1(result.slice(offset, offset + perPage)) // pagiki 10 chupistadi


      SetDataFound(result.length) // total result found
      setPlayerData1(result)  // edilekapote previouse button lo unna data display avutundi adaina button nokkinappudu



    } if (value.length === 0) {


      // Pgination Work start for serch
      setPageCount(Math.ceil(getdbdata2.length / perPage))// automatic adjust pagination cound
      //it run only one time and display data from 0 to 9 index number
      setOffset(0)
      setPlayerData1(getdbdata2)

      setgetdbdata1(getdbdata2.slice(offset, offset + perPage)) // pagiki 10 chupistadi
      SetDataFound(getdbdata2.length)
      //console.log(getdbdata2.length)
    } else {

    }



  }



  // Pagination Button Click Chesinapusu edi call avutundi

  const handlePageClick = (e) => {

    const selectedPage = e.selected; // manam enter chesina values  selectedPage ki store avutai
    //console.log(selectedPage*perPage)
    //console.log(selectedPage)

    let x = selectedPage * perPage
    //console.log(x)

    setgetdbdata1(playerData1.slice(x, x + perPage))//  increment i display avutundi

    //console.log(getdbdata1)
    console.log(playerData1.slice(x, x + perPage))
  }


  // *****************************************************************************************************************



  // Filter Functionality by SerchByWorkMode

  const SerchByWorkMode = (e) => {


    let value = e.target.value


    if (value.length >= 0) {

      //console.log(value)



      let result = getdbdata2.filter(ele => ele.WorkMode.toLowerCase().includes(value.toLowerCase()))

      // setSerchByLocation(value) // For enable input text



      // Pgination Work
      setPageCount(Math.ceil(result.length / perPage))// automatic adjust pagination cound
      //it run only one time and display data from 0 to 9 index number
      setOffset(0)
      setPlayerData1(getdbdata2)
      setgetdbdata1(result.slice(offset, offset + perPage)) // pagiki 10 chupistadi

      //
      SetDataFound(result.length) // total result found
      //setPlayerData1(result)  // edilekapote previouse button lo unna data display avutundi adaina button nokkinappudu



    } if (value.length === 0) {


      // Pgination Work start for serch
      //setPageCount(Math.ceil(getdbdata2.length / perPage))// automatic adjust pagination cound
      //it run only one time and display data from 0 to 9 index number
      //setOffset(0)
      // setPlayerData1(getdbdata2)

      // setgetdbdata1(getdbdata2.slice(offset, offset + perPage)) // pagiki 10 chupistadi
      //  SetDataFound(getdbdata2.length)
      //console.log(getdbdata2.length)
    } else {

    }






  }



  // Filter Functionality by SerchByEducation
  const SerchByEducation = (e) => {

    let value = e.target.value

    if (value.length >= 0) {

      //console.log(value)



      let result = getdbdata2.filter(ele => ele.Qual.toLowerCase().includes(value.toLowerCase()))

      // setSerchByLocation(value) // For enable input text



      // Pgination Work
      setPageCount(Math.ceil(result.length / perPage))// automatic adjust pagination cound
      //it run only one time and display data from 0 to 9 index number
      setOffset(0)
      setPlayerData1(getdbdata2)
      setgetdbdata1(result.slice(offset, offset + perPage)) // pagiki 10 chupistadi

      //
      SetDataFound(result.length) // total result found
      //setPlayerData1(result)  // edilekapote previouse button lo unna data display avutundi adaina button nokkinappudu



    } if (value.length === 0) {


      // Pgination Work start for serch
      //setPageCount(Math.ceil(getdbdata2.length / perPage))// automatic adjust pagination cound
      //it run only one time and display data from 0 to 9 index number
      //setOffset(0)
      // setPlayerData1(getdbdata2)

      // setgetdbdata1(getdbdata2.slice(offset, offset + perPage)) // pagiki 10 chupistadi
      //  SetDataFound(getdbdata2.length)
      //console.log(getdbdata2.length)
    } else {

    }


  }

  // **********************************************************


const LogOut=()=>{
  localStorage.clear()
  navigate('/mylogin')
}




// Delete one by one by id  functionality
const DataDelete = async (id) => {


  
  try {

    
    fetch(process.env.REACT_APP_SECRET_KEY_API+id,

    // or  fetch(`https://62f9025de05644803530c8c8.mockapi.io/dariya/${id}`,

    {
      method: 'Delete'   // mavuluga  ekkadivaraku saripotundi

     }).then((result) => {        // delet  chesina  detani chudali anukunte evi kuda rasuko

      result.json().then((resp) => {
        
        Swal.fire('Deleted Sucessfull')
             // for refresh the page after deleted

      })

    })




  } catch (error) {
    console.log(error)

  }



}


// Delete all at a time  by date value  functionality
const DataDeleteAll=(id)=>{

// id lo date tisukoni velutundi

  try {


    fetch(process.env.REACT_APP_SECRET_KEY_API+id,

    // or  fetch(`https://62f9025de05644803530c8c8.mockapi.io/dariya/${id}`,

    {
      method: 'Delete'   // mavuluga  ekkadivaraku saripotundi

     }).then((result) => {        // delet  chesina  detani chudali anukunte evi kuda rasuko

      result.json().then((resp) => {
        
        Swal.fire('Deleted Sucessfull')
             // for refresh the page after deleted

      })

    })




  } catch (error) {
    console.log(error)

  }

}










  return (



    <div>




      <div className='hero-image'>


        {/* NavBar*/}
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand Logo">Pakka Local Jobs</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-1 mb-lg-0">



              </ul>
              <div class="d-flex">
                
                <button class="btn btn-outline-success" type="submit">Contact</button>
                   <button class="btn btn-outline-success" type="submit">Want a Job</button>
                <Link to="/PostJob">  <button class="btn btn-outline-success" type="submit">Post a Job</button></Link>
                <button class="btn btn-outline-success" type="submit" style={{fontWeight:'bold',color:'blue'}} onClick={LogOut}>LogOut</button>
              </div>
            </div>
          </div>
        </nav>

        {/* End NavBar*/}





        {/*  Home page title */}


        <div className='SerchContainer1'>

          <div style={{ textAlign: 'center' }}>

            <h5>Find Job, Employment, and Career Opportunities</h5>

            <h1 className='waviy '>



              <span style={{ "--i": 1 }}>F</span>
              <span style={{ "--i": 2 }}>i</span>
              <span style={{ "--i": 3 }}>n</span>
              <span style={{ "--i": 4, }}>d</span>&nbsp;
              <span style={{ "--i": 5 }}>Y</span>
              <span style={{ "--i": 6 }}>o</span>
              <span style={{ "--i": 7 }}>u</span>
              <span style={{ "--i": 8 }}>r</span>&nbsp;
              <span style={{ "--i": 9 }}>D</span>
              <span style={{ "--i": 10 }}>r</span>
              <span style={{ "--i": 1 }}>e</span>
              <span style={{ "--i": 1 }}>a</span>
              <span style={{ "--i": 2 }}>m</span>&nbsp;
              <span style={{ "--i": 3 }}>J</span>
              <span style={{ "--i": 4 }}>o</span>
              <span style={{ "--i": 5 }}>b</span>&nbsp;
              <span style={{ "--i": 6 }}>I</span>
              <span style={{ "--i": 7 }}>n</span>
              <span style={{ "--i": 8 }}>Y</span>
              <span style={{ "--i": 9 }}>o</span>
              <span style={{ "--i": 10 }}>u</span>
              <span style={{ "--i": 11 }}>r</span>&nbsp;
              <span style={{ "--i": 12 }}>A</span>
              <span style={{ "--i": 13 }}>r</span>
              <span style={{ "--i": 14 }}>e</span>
              <span style={{ "--i": 14 }}>a</span>


            </h1>

          </div>
        </div>


        {/*  end Home page title */}




        {/* Buttons */}

        <div className="container-fluid">

          <div className="row" >

            <nav class="navbar navbar-light">
              <form class="container-fluid justify-content-center">
                <button class="btn btn-outline-success me-2" type="button" style={{ backgroundColor: '#BFA083' }}>Find Candidate</button>
                <button class="btn btn-outline-success" type="button" style={{ backgroundColor: '#BFA083' }}>Find Job</button>
              </form>
            </nav>

          </div>

        </div>






        {/* Serch Functionality*/}


        {
          Hide ?

            <div className='SerchContainer2'>


              <div className="row">

                <div className="col-sm-4" style={{ backgroundColor8: 'orange8' }}>


                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Serch By Job Title' style={{ height: '50px' }} onChange={SerchByJob} value={SerchByJobTitle} />
                  {/* <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Serch By Job Title' style={{ height: '50px' }} onChange={(e) => setSerchByJobTitle(e.target.value)}/> */}
                </div>

                <div className="col-sm-5" style={{ backgroundColor8: 'green' }}>

                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Serch By Date' style={{ height: '50px' }} onChange={SerchJobByLocation} value={SerchByLocation} />




                </div>
                <div className="col-sm-3" style={{ backgroundColor8: 'red' }}>

                  <button type="button" class="btn btn-primary" style={{ width: '100%', height: '50px', fontSize: '15px', }}>Serch Results : {DataFound} </button>




                </div>


              </div>
            </div> :

            <div className='SerchContainer2'>


              <div className="row">

                <div className="col-sm-4" style={{ backgroundColor8: 'orange8' }}>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Serch by job Skills' style={{ height: '50px' }} />
                </div>

                <div className="col-sm-5" style={{ backgroundColor8: 'green' }}>


                  <div class="form-select" aria-label="Default select example" style={{ height: '50px' }}>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Serch by Date' style={{ height: '50px' }} />
                  </div>




                </div>
                <div className="col-sm-3" style={{ backgroundColor8: 'red' }}>

                  <button type="button" class="btn btn-primary" style={{ width: '100%', height: '50px', fontWeight: 'bold' }}>Serch </button>




                </div>


              </div>
            </div>

        }

        {/* end Serch Functionality*/}






        <br /><br />


        <div className='container-fluid'>

          <div className='row'>

            <div className="col-lg-3" style={{ backgroundColor: '#F8F9FA' }}>



              {/* Filter Section */}
              <div className='row'>
                <div className="col-lg-12 filter-section">

                  <h2 style={{ fontSize: '21px', color: '#6C6C6C' }}>All Filter</h2>




                  {/* According */}

                  <div class="accordion accordion-flush" id="accordionFlushExample">

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Work Mode
                        </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body9">


                          <p className='NotePoint'><span style={{ color: 'red' }}>Note:</span>Serch as Work From Home, Work From Office, Part/Full Time</p>

                          <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Serch By Work Mode' style={{ height: '50px' }} onChange={SerchByWorkMode} value={Serchbyworkmode} />


                        </div>

                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Education
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">

                        <p className='NotePoint'><span style={{ color: 'red' }}>Note:</span> Serch as Tenth, Inter,Degree,B.Tech,<br />M.Tech,B.Pharmacy,M.Pharmacy.....etc</p>

                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Serch By Education' style={{ height: '50px' }} onChange={SerchByEducation} value={Serchbyeducation} />




                      </div>

                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Location
                        </button>
                      </h2>
                      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Do Serch By Date</div>
                      </div>
                    </div>








                  </div>


                  {/* End Acoording*/}






                </div>
              </div>
              {/* end Filter Section */}




            </div>






            {/*  display job details */}



            <div className="col-lg-6" style={{ backgroundColor: '#F8F9FA' }}>
              <div className='row'>




                {

                  getdbdata1.length > 0 ?

                    getdbdata1.map((ele, index) => {


                      return (

                        <div className="col-lg-12 job-details" key={index}>
                          <span className='title'>Job Titel: </span><span className='desc'> {ele.JobTitle}</span>  <br />
                          <span className='title'>Company Name: </span><span className='desc'> {ele.CompanyName}</span><br />

                          <span className='title'>Exp:</span> <span className='desc'>{ele.Exp} years, </span>  <span><i class="fas fa-rupee-sign"></i><span className='desc'>:{ele.Salary} p/m,</span> <i class="fas fa-map-marker-alt"></i><span className='desc'>  <span></span>{ele.JobLocation}</span> </span> <br />
                          <span><i class="fas fa-phone-volume"></i> </span><span className='desc'>{ele.ContactNo}</span><br />
                          <span> <i class="fas fa-envelope"></i></span> <span className='desc'>{ele.Email}</span> <br />
                          <span> <i class="fas fa-graduation-cap"></i></span> <span className='desc' style={{ marginRight: '10px' }}>{ele.Qual} </span><span className='title'>Work Mode:</span> <span className='desc'>{ele.WorkMode}</span><br />
                          <span className='title'>Publish Date: </span><span className='desc'>{ele.CurrentDate}</span><br />
                          <span className='title'>Key skills: </span><span className='desc'>{ele.Skills}</span><br />
                          <span className='title'>Other Details: </span><span className='desc'>{ele.OtherDetails}</span><br />

                          <button type="button" class="btn btn-info" style={{ width: '28%', fontWeight: 'bold', opacity: '0.8' }}>Edite </button> &nbsp;&nbsp;
                          <button type="button" class="btn btn-danger" style={{ width: '30%', fontWeight: 'bold', opacity: '0.7' }}  onClick={() => DataDeleteAll(ele.CurrentDate)}>DeleteAll </button> &nbsp;&nbsp;
                        <button type="button" class="btn btn-danger" style={{ width: '28%', fontWeight: 'bold', opacity: '0.6' }} onClick={() => DataDelete(ele._id)} >Delete </button>

                        </div>

                      )

                    })
                    : <h5 style={{ color: 'red', textAlign: 'center' }}>No Data Found</h5>


                }







                {/*Pagination work start */}

                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={pageCount} // we recive from state variable


                  onPageChange={handlePageClick} // action on pagination button clicked

                  // styles with bootstrap 5.0
                  containerClassName={'pagination justify-content-center'}
                  pageClassName={'page-item'}
                  pageLinkClassName={'page-link'}

                  previousClassName={'page-item'}
                  previousLinkClassName={'page-link'}
                  nextClassName={'page-item'}
                  nextLinkClassName={'page-link'}
                  breakLinkClassName={'page-link'}

                  activeClassName={'active'}
                // end styles with bootstrap 5.0
                />
                {/* End Pagination work start */}

              </div>


            </div>


            {/* end  display job details */}


            <div className="col-lg-3" style={{ backgroundColor: '#F8F9FA' }}>


              {/* Notice Bord */}
              <div className='row'>
                <div className="col-lg-12 Notice-Bord">

                  <h2>Notice Bord </h2>

                </div>
              </div>
              {/* end Notice Bord */}



            </div>
          </div>



        </div>

        <Footer />
      </div>



      {/*  Side bar for mobiles*/}

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

              
              <span class="SideBarLinks">Link-1</span>
              <span class="SideBarLinks">Link-2</span>
              <Link to="/PostJob">  <button class="btn btn-primary" style={{ width: '100%', fontWeight: 'bold' }}>Post a Job</button> </Link><br />
              <button class="btn btn-warning" style={{ width: '100%', fontWeight: 'bold' }}>Want a Job</button>
            </div>


          </div>
          {/* End Side Bar Work Start */}



        </div>
      </div>



    </div>
  )
}

export default Home3; 






