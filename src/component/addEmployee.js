import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function AddEmployee() {
    return (
        <>

            <div className='page-container'>
                <div className="left-content">
                    <div className="mother-grid-inner">
                        <Navbar />
                        <div className="inner-block">
                            {/*market updates updates*/}
                            <div className="market-updates" id='cards'>

                                <Insert />
                                <div className="clearfix"> </div>
                            </div>
                            {/*main page chart layer2*/}
                            <div className="clearfix"> </div>
                        </div>
                        {/*climate end here*/}
                        <Footer />
                    </div>
                </div>

            </div>
            <Sidebar field='true' />

        </>
    )
}

function Insert() {
    const [name,setName] = useState(null);
    const [empid,setEmpid] = useState(null);
    const [loginid,setLoginid] = useState(null);
    const [address,setAddress] = useState(``);
    const [city,setCity] = useState(null);
    const [state,setState] = useState(null);
    const [zip,setZip] = useState(null);
    const [image,setImage] = useState(null);
    const [dob,setDob] = useState(null);
    let base64String = ``;
    function imageUploaded() {
        var file = document.querySelector(
            'input[type=file]')['files'][0];
      
        var reader = new FileReader();
        console.log("next");
          
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
      
            setImage(base64String);
      
           
            console.log(base64String);
        }
        reader.readAsDataURL(file);
    }
    


    return (
        <form className="needs-validation" >
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip01">Full name</label>
                    <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" required value={name} onChange={(a) => setName(a.target.value)} />

                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip02">Emplyee Id</label>
                    <input type="number" className="form-control"  placeholder="Employee Id " required value={empid} onChange={(a) => setEmpid(a.target.value)} />

                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip02">Login Id</label>
                    <input type="number" className="form-control" id="validationTooltip02" placeholder="Login Id " required value={loginid} onChange={(a) => setLoginid(a.target.value)} />

                </div>

            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip03">Address</label>
                    <input type="text" className="form-control"  placeholder="Address" required value={address} onChange={(a) => setAddress(a.target.value)} />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip03">City</label>
                    <input type="text" className="form-control" id="validationTooltip03" placeholder="City" required value={city} onChange={(a) => setCity(a.target.value)}/>

                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="validationTooltip04">State</label>
                    <input type="text" className="form-control" id="validationTooltip04" placeholder="State" required value={state} onChange={(a) => setState(a.target.value)}/>

                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="validationTooltip05">Zip</label>
                    <input type="text" className="form-control"  placeholder="Zip" required value={zip} onChange={(a) => setZip(a.target.value)} />

                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip05">Profile Pic</label>
                    <input type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg, image/jpg" className="form-control"  placeholder="Image" required  onChange={imageUploaded} />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip05">DOB</label>
                    <input type="date"
                         className="form-control"  placeholder="01-01-2000" required value={dob} onChange={(a) => setDob(a.target.value)} />
                </div>
            </div>
            <div className="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

