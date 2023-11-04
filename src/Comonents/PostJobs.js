import React, { useEffect } from 'react'
import '../Styles/PostJobs.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import BookDataService from './ServicesCRUD'
import Footer from './Footer'
import Navbar from './Navbar'
import Swal from 'sweetalert2'

const PostJobs = () => {


  const [VerifyPnumber, setVerifyPnumber] = useState('')
  const [getdbdata1, setgetdbdata1] = useState([])
  const [getdbdata2, setgetdbdata2] = useState([])
  const [displaydata, setdisplaydata] = useState([])







  // Access youser entering details

  const [Email, setemail] = useState('')
  const [ContactNo, setPnumber] = useState('')
  const [JobLocation, setJobLocation] = useState('')
  const [JobTitle,setJobTilte] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [Exp, setExp] = useState('')
  const [Salary, setSalary] = useState('')
  const [WorkMode, setWorkMode] = useState('')
  const [Qual, setQual] = useState('')
  const [OtherDetails, setOtherDetails] = useState('')
  const [Skills, setSkills] = useState('')
  const [CurrentDate, setCurrentDate] = useState('')

  //end Access youser entering details








  useEffect(() => {
    GetDate()
    dbdata();
  }, [])



  // Get db data for Contact number verification




  const dbdata = async () => {

    fetch(process.env.REACT_APP_SECRET_KEY_API).then((result) => {

    result.json().then((resp) => {

       //console.warn("result",resp)

    
       setgetdbdata1(resp)    // we store al db data
       setgetdbdata2(resp)
     



    })

  })

    
   

  }






  // Get Current Date and Month and Year

  const GetDate = () => {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    // console.log(currentDate); // "17-6-2022"
    setCurrentDate(currentDate)
  }





  // Send Data To DB
  const get_use_data = async (e) => {
    e.preventDefault()


    //console.log(`email: ${email}, Pnumber: ${Pnumber},C_location:${C_location}, JobTilte:${JobTilte},CompanyName:${CompanyName},Exp${Exp},Salary:${Salary}, WorkMode :${WorkMode},Qual:${Qual},OtherDetails:${OtherDetails}` )

    const alldata = {
      CompanyName, ContactNo, Email, Exp, JobLocation, JobTitle
      , OtherDetails, Qual, Salary, Skills, WorkMode, CurrentDate

    };


console.log(CurrentDate)


    try {



      fetch(process.env.REACT_APP_SECRET_KEY_API, {
        method: 'POST',

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(alldata)    // data variable name

      }) 

      //await BookDataService.addBook(alldata)

      Swal.fire('Submited Sucessfull')



      setemail('')
      setPnumber('')
      setJobLocation('')
      setJobTilte('')
      setCompanyName('')
      setExp('')
      setSalary('')
      setWorkMode('')
      setQual('')
      setOtherDetails('')
      setSkills('')
      




    } catch (error) {
      console.log(error)


    }







  }

  // Serch By Mobile number
  const Exits_Not = () => {


    if (VerifyPnumber) {
      let GetPh = getdbdata2.filter(Ph => Ph.ContactNo.includes(VerifyPnumber))

       if (GetPh == 0) {
         alert("No Data Found")
       } else {
         setdisplaydata(GetPh)
         //console.log(GetPh)
       }
      console.log(GetPh)


    } else {
      alert('Enter Phone Number')
    }




   

  }



// Close button
  const Close = () => {
    setVerifyPnumber('')
    setdisplaydata([])

  }




  return (



    <div>

      <Navbar />



      <div className='container'>


        <div className="container-fluid sdv">

          <div className="row">




            <form class="row g-3" onSubmit={get_use_data}>

              <div className="col-md-8 ">


                <div className='create-profil'>

                  <h2>Post a new job</h2>
                  <p>Welcome To Admin Dashbord? <Link to="/Home3" className='Dashbordbtn'> Dashbord</Link></p>


                </div>



                <div className='input-fileds'>

                  {/* input contaner */}
                  <br />


                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                      <label for="validationDefault02" class="form-label">Email Address</label>
                      <input type="email" class="form-control" id="validationDefault02" placeholder='Enter Email' value={Email} onChange={(e) => setemail(e.target.value)} />
                    </div>


                  </div>

                  <br />



                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'blue' }} >

                      <label for="validationDefault04" class="form-label">Job Location</label>
                      <input type="text" class="form-control" id="validationDefault02" placeholder='Enter Location' value={JobLocation} required onChange={(e) => setJobLocation(e.target.value)} />
                    </div>


                  </div>



                  <br />


                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                      <label for="validationDefault02" class="form-label">Job Title</label>
                      <input type="text" class="form-control" id="validationDefault02" placeholder='Enter Job Title' value={JobTitle} required onChange={(e) => setJobTilte(e.target.value)} />
                    </div>

                  </div>


                  <br />

                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                      <label for="validationDefault02" class="form-label">Company Name</label>
                      <input type="text" class="form-control" id="validationDefault02" placeholder='Enter Company Name' value={CompanyName} required onChange={(e) => setCompanyName(e.target.value)} />
                    </div>
                  </div>

                  <br />




                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                      <label for="validationDefault02" class="form-label">Experiance</label>
                      <input type="Number" class="form-control" id="validationDefault02" placeholder='Experience' value={Exp} required onChange={(e) => setExp(e.target.value)} />
                    </div>


                  </div>
                  <br />


                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >
                      <label for="validationDefault02" class="form-label">Contact Number</label>
                      <input type="tel" pattern="[0-9]{10}" class="form-control" id="validationDefault02" value={ContactNo} placeholder='Enter Phon Number' onChange={(e) => setPnumber(e.target.value)} />
                    </div>

                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >
                      <label for="validationDefault02" class="form-label">Salary</label>
                      <input type="text" class="form-control" id="validationDefault02" placeholder='Enter Salary' value={Salary} required onChange={(e) => setSalary(e.target.value)} />
                    </div>

                  </div>
                  <br />





                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'blue' }} >

                      <label for="validationDefault04" class="form-label">Work Mode</label>
                      <select class="form-select" id="validationDefault04" value={WorkMode} required onChange={(e) => setWorkMode(e.target.value)}>
                        <option selected disabled value="">Select</option>
                        <option> Work From Home</option>
                        <option>Work From Office</option>
                        <option>Part/Full Time</option>
                      </select>
                    </div>


                  </div>


                  <br />


                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'blue' }} >

                      <label for="validationDefault04" class="form-label">Qualification</label>

                      <input type="text" class="form-control" id="validationDefault02" value={Qual} placeholder='Enter Qualification' required onChange={(e) => setQual(e.target.value)} />

                    </div>


                  </div>


                  <br />


                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                      <label for="validationDefault02" class="form-label">Skills</label>
                      <input type="text" class="form-control" id="validationDefault02" value={Skills} placeholder='Othe Information' required onChange={(e) => setSkills(e.target.value)} />
                    </div>

                  </div>

                  <br />
                  <div className="row">

                    <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                      <label for="validationDefault02" class="form-label">Other Details</label>
                      <input type="text" class="form-control" id="validationDefault02" value={OtherDetails} placeholder='Othe Information' onChange={(e) => setOtherDetails(e.target.value)} />
                    </div>

                  </div>


                  <br />





                  <div className="row">

                    <div className="col-sm-10" style={{ backgroundColor8: 'orange' }} >

                      <button class="btn8 btn-primary" type="submit">Post</button>

                    </div>


                  </div>

                  <br />

                </div>
                {/* end input contaner */}


              </div>



              <div className="col-md-4 sdv1" style={{ backgroundColor8: 'orange' }} >
                <div className='create-profil8'>

                  <h5>Some Instructions </h5>

                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Verify
                  </button>
                </div>

              </div>

            </form>

          </div>
        </div>


      </div>


      <Footer />









      {/* Modal for post a job page */}

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 className='popupmodal_h5'>Welcome to Local Jobs</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={Close}></button>
            </div>
            <div class="modal-body">
              <label for="validationDefault02" class="form-label">Contact Number</label>
              <input type="tel" pattern="[0-9]{10}" class="form-control" id="validationDefault02" placeholder='Enter Phon Number' value={VerifyPnumber} onChange={(e) => setVerifyPnumber(e.target.value)} />


              <div style={{ textAlign: 'center' }}>
                <button type="button" class="btn btn-primary" onClick={Exits_Not}>Submit </button>
              </div>

            </div>






            {/*  display job details */}


            <div className="col-lg-12" style={{ backgroundColor: '#F8F9FA' }}>
              <div className='row'>




                {

                  displaydata ?

                    displaydata.map((ele, index) => {


                      return (

                        <div className="col-lg-12 job-details" key={index}>
                          <span className='title'>Job Titel: </span><span className='desc'> {ele.JobTilte}</span>  <br />
                          <span className='title'>Company Name: </span><span className='desc'> {ele.CompanyName}</span><br />

                          <span className='title'>Exp:</span> <span className='desc'>{ele.Exp} years, </span>  <span><i class="fas fa-rupee-sign"></i><span className='desc'>:{ele.Salary} p/m,</span> <i class="fas fa-map-marker-alt"></i><span className='desc'>  <span></span>{ele.JobLocation}</span> </span> <br />
                          <span><i class="fas fa-phone-volume"></i> </span><span className='desc'>{ele.ContactNo}</span><br />
                          <span> <i class="fas fa-envelope"></i></span> <span className='desc'>{ele.Email}</span> <br />
                          <span> <i class="fas fa-graduation-cap"></i></span> <span className='desc' style={{ marginRight: '10px' }}>{ele.Qual} </span><span className='title'>Work Mode:</span> <span className='desc'>{ele.WorkMode}</span><br />
                          <span className='title'>Publish Date: </span><span className='desc'>{ele.CurrentDate}</span><br />
                          <span className='title'>Key skills: </span><span className='desc'>{ele.Skills}</span><br />
                          <span className='title'>Other Details: </span><span className='desc'>{ele.OtherDetails}</span><br />

                        </div>

                      )

                    })
                    : <h6 style={{ color: 'red', textAlign: 'center' }}>No Data Found
                    </h6>


                }







              </div>


            </div>







            {/* end  display job details */}











          </div>
        </div>
      </div>

      {/*  end Modal for post a job page */}
















    </div>


  )
}

export default PostJobs;







