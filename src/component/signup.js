import '../images/icons/favicon.ico';
import a from '../images/img-01.png'
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/select2/select2.min.css';
import '../css/util.css';
import '../css/main.css';
import { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Switch, Route, Redirect, useNavigate } from 'react-router-dom'
import SendEmail from './send';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';



export default function Signup() {
    const [email, setEmail] = useState(null);
    const [password1, setPassword] = useState(null);
    const [otp, setOtp] = useState(null);
    const [confirmpassword1, setConfirmPassword] = useState(null);
    const [contact, setContact] = useState(null);
    const [data, setData] = useState([]);
    const otp1 = Math.floor(100000 + Math.random() * 900000)
    let otp2=0;
    
    
    
    
    const SignUp = () => {
        
        if (document.getElementById("verify").innerHTML == "Verified") {


            fetch(`https://internshippro.000webhostapp.com/addCustomer.php?email=${email}&password=${password1}&phone=${contact}`);
            <Redirect to='login'></Redirect>
        }


    }
    const Getotp = () => {
        let status = "false"
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (password1 === confirmpassword1) {
                status = "true"
            }
            else {
                document.getElementById("error").innerHTML = "Password is not matched with confirm password."
                status = 'false';
            }
        }
        else {
            document.getElementById("error").innerHTML = "email is not valid"
            status = 'false';
        }
        if (status = "true" && contact.length === 10) {
            status = 'false'
            let message = `Your OTP for verify account is ${otp1}. Please verify your account with this otp and enjoyed our services. Otp is valid for 5 minutes.`
            var templateParams = {
                email: email,
                message:message 
            };
            
            emailjs.send('service_nf38i6r', 'template_gfnurx7', templateParams, 'fUpgNRuy2HvoETyBz')
                .then((result) => {
                    console.log(result.text);
                    otp2=otp1;
                    ReactSession.set("otp",otp2)
                    
                    
                    document.getElementById("msg").innerHTML="otp sent to your email id."
                }, (error) => {
                    console.log(error.text);
                    document.getElementById("msg").innerHTML="Please try after sometime"
                });
            document.getElementById("verify").style.display = "inline"
            document.getElementById("otp").style.display = 'none'
        }



    }
    const Verify = () => {
        let status='false';
        if (otp == parseInt(ReactSession.get("otp"))) {
            status = 'true';
            document.getElementById("verify").innerHTML = "Verified"
        }
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt >
                        <img className='zoom' src={a} alt="IMG" />
                    </div>
                    <form className="login100-form validate-form" ref={form}>
                        <span className="login100-form-title">
                            Member SignUp
                        </span>
                        <p id='error' className="login100-form-title" style={{ fontSize: '150%', color: "red" }} ></p>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={(a) => setEmail(a.target.value)} />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" placeholder="Password" value={password1} onChange={(a) => setPassword(a.target.value)} />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true" />
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" placeholder="Confirm Password" value={confirmpassword1} onChange={(a) => setConfirmPassword(a.target.value)} />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true" />
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="number" placeholder="Contact Number" value={contact} onChange={(a) => setContact(a.target.value)} />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true" />
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="number" placeholder="OTP" value={otp} onChange={(a) => setOtp(a.target.value)} />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true" />
                            </span>
                        </div>
                        <p id='msg' className="login100-form-title" style={{ fontSize: '150%', color: "red" }} ></p>
                        <div className="container-login100-form-btn">

                            <button id="otp" form="form1" value="Submit" className='login100-form-btn' style={{ marginBottom: '10px' }} onClick={Getotp}>Get OTP</button>

                            <button id="verify" form="form1" value="Submit" className='login100-form-btn' onClick={Verify} style={{ display: 'none' }}>Verify</button>
                        </div>
                        <div className="container-login100-form-btn">

                            <button form="form1" value="Submit" className='login100-form-btn' onClick={SignUp}>Sign UP</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}