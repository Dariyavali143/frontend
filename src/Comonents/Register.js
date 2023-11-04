import React, { useEffect } from 'react'
import '../Styles/Register.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import BookDataService from './ServicesCRUD'
import Navbar1 from './Navbar1';
import Footer from './Footer';
import Swal from 'sweetalert2'


const Register = () => {






    // Access youser entering details

    const [Email, setEmail] = useState('')
    const [PreferedLocation, setPreferedLocation] = useState('')
    const [JobTitle, setJobTitele] = useState('')
    const [CompanyName, setCompanyName] = useState('')
    const [Exp_Fresher, setExp_Fresher] = useState('')
    const [ContactNo, setContactNo] = useState('')
    const [WorkMode, setWorkMode] = useState('')
    const [Qual, setQual] = useState('')
    const [Skills, setSkills] = useState('')
    const [Doubt, setDoubt] = useState('')
    const [CurrentDate, setCurrentDate] = useState('')
    //end Access youser entering details





    // Get Current Date and Month and Year

    useEffect(() => {
        GetDate()


    })
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
            JobTitle,PreferedLocation,CompanyName,Exp_Fresher,Qual,WorkMode,Skills,Email,ContactNo,CurrentDate,Doubt
        };


        try {

            fetch(process.env.REACT_APP_SECRET_KEY_API_C, { // c= candidate
                method: 'POST',

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(alldata)    // data variable name

            })


            Swal.fire({
                title: 'successful submitted we send latest jobs to your whatsapp and Email',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

            //ofter submited do empty state value
            setEmail('')
            setPreferedLocation('')
            setJobTitele('')
            setCompanyName('')
            setExp_Fresher('')
            setContactNo('')
            setWorkMode('')
            setQual('')
            setSkills('')
            setDoubt('')



        } catch (error) {
            console.log(error)


        }



    }
















    return (





        <div>











            <Navbar1 />

            <div className='container'>

                <div className="container-fluid sdv">

                    <div className="row">

                        <form class="row g-3" onSubmit={get_use_data}>

                            <div className="col-md-8 ">


                                <div className='create-profil'>

                                    <h2>Register For a New Job</h2>
                                    <p>Alreadt have Registered ? <span> <Link className='GotoHome' to="/Home2">Go To Home</Link> </span></p>


                                </div>



                                <div className='input-fileds'>

                                    {/* input contaner */}


                                    <br />

                                    <div className="row">

                                        <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                                            <label for="validationDefault02" class="form-label">Email Address</label>
                                            <input type="email" class="form-control" id="validationDefault02" placeholder='Enter Email' value={Email} required onChange={(e) => setEmail(e.target.value)} />
                                        </div>


                                    </div>

                                    <br />



                                    <div className="row">

                                        <div className="col-md-6" style={{ backgroundColor8: 'blue' }} >

                                            <label for="validationDefault04" class="form-label">Preferred location</label>
                                            <input type="text" class="form-select" id="validationDefault04" placeholder='Enter Location' value={PreferedLocation} required onChange={(e) => setPreferedLocation(e.target.value)} />


                                        </div>


                                    </div>



                                    <br />


                                    <div className="row">

                                        <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                                            <label for="validationDefault02" class="form-label">Which Job Want</label>
                                            <input type="text" class="form-control" id="validationDefault02" placeholder='Enter Job Title' value={JobTitle} required onChange={(e) => setJobTitele(e.target.value)} />
                                        </div>

                                    </div>


                                    <br />

                                    <div className="row">

                                        <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                                            <label for="validationDefault02" class="form-label">Company Name if Exp (or) Type as Fresher</label>
                                            <input type="text" class="form-control" id="validationDefault02" placeholder='Enter Company Name' value={CompanyName} required onChange={(e) => setCompanyName(e.target.value)} />
                                        </div>
                                    </div>

                                    <br />




                                    <div className="row">

                                        <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                                            <label for="validationDefault02" class="form-label">Experiance (or)if Fresher Enter 0</label>
                                            <input type="Number" class="form-control" id="validationDefault02" placeholder='Enter Experiance' value={Exp_Fresher} required onChange={(e) => setExp_Fresher(e.target.value)} />
                                        </div>


                                    </div>
                                    <br />


                                    <div className="row">

                                        <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                                            <label for="validationDefault02" class="form-label">Contact Number</label>
                                            <input type="tel" pattern="[0-9]{10}" class="form-control" id="validationDefault02" placeholder='Enter Phon Number' value={ContactNo} required onChange={(e) => setContactNo(e.target.value)} />
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
                                            <select class="form-select" id="validationDefault04" value={Qual} required onChange={(e) => setQual(e.target.value)}>
                                                <option selected disabled value="">Select</option>
                                                <option>Tenth</option>
                                                <option>ITI</option>
                                                <option>Inter/Deploma</option>
                                                <option>Degree </option>
                                                <option>B.Tech</option>
                                                <option>PG </option>
                                                <option>M.Tech</option>
                                            </select>
                                        </div>


                                    </div>


                                    <br />


                                    <div className="row">

                                        <div className="col-md-6" style={{ backgroundColor8: 'blue' }} >

                                            <label for="validationTextarea" class="form-label">Enter Other Skills If have any</label>
                                            <textarea class="form-control" id="validationTextarea" placeholder='Enter More Skills if have' value={Skills} required onChange={(e) => setSkills(e.target.value)} />
                                            <div class="invalid-feedback">
                                                Please enter a message in the textarea.
                                            </div>

                                        </div>

                                    </div>




                                    <br />

                                    <div className="row">

                                        <div className="col-md-6" style={{ backgroundColor8: 'orange' }} >

                                            <label for="validationDefault02" class="form-label">Other Information have any Doubt</label>
                                            <textarea class="form-control" id="validationDefault02" placeholder='Othe Information' value={Doubt} onChange={(e) => setDoubt(e.target.value)} />
                                        </div>

                                    </div>


                                    <br />




                                    <div className="row">

                                        <div className="col-sm-10" style={{ backgroundColor8: 'orange' }} >

                                            <button class="btn8 btn-primary" type="submit">Register</button>

                                        </div>


                                    </div>

                                    <br />

                                </div>
                                {/* end input contaner */}




                            </div>









                            <div className="col-md-4 sdv1" style={{ backgroundColor8: 'orange' }} >
                                <div className='create-profil8'>

                                    <h5>Some Instructions </h5>


                                </div>


                            </div>





                        </form>






                    </div>
                </div>











            </div>
            <Footer />















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








        </div>


    )
}

export default Register;







