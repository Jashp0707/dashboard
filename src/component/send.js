import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




export default function SendEmail(props){
    let otp = Math.floor(100000 + Math.random() * 900000)
    let message =`Your OTP for verify account is ${otp}. Please verify your account with this otp and enjoyed our services. Otp is valid for 5 minutes.` 
    emailjs.sendForm('service_nf38i6r', 'template_gfnurx7', [message,props.user_email], 'fUpgNRuy2HvoETyBz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}


