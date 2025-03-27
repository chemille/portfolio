import React from 'react';
import './contact.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import bluegalaxy from '../images/bluegalaxy.jpg';
import { useState } from 'react';

export default function Contact() {
    // Reference --> https://web3forms.com/#start
    // Note: free plan is limited to 250 submissions per month + basic features
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3204f463-5382-4ebe-b95e-a6ee16c07ca6");  // public access key, alias to your email
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${bluegalaxy})`, backgroundSize: 'cover', width: '100vw' }}> 
            <h1>Contact Me</h1>
            <h4>Thanks for visiting my page! I'm open to new opportunities, so feel free to send me a message!</h4>
            <section className="contact">
                <form onSubmit={onSubmit} >
                    <h2>Contact Form</h2>
                    <div className="input-box">
                        <label>Name: </label>
                        <input type="text" className="field" placeholder='Enter your name' name="name" required />
                    </div>
                    <div className="input-box">
                        <label>Email: </label>
                        <input type="email" className="field" placeholder='Your email' name="email" required />
                    </div>
                    <div className="input-box">
                        <label>Message: </label>
                        <textarea className="field mess" placeholder='Type your message' name="message" required></textarea>
                    </div>
                    <button type="submit">Send message</button>
                <span>{result}</span>
                </form>
            </section>
                
                <div className="photo-credit"><p>Photo by <a href="https://unsplash.com/@nicolescapturedmoments?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nicole Avagliano</a> on <a href="https://unsplash.com/photos/blue-and-black-galaxy-illustration-StCrWOWx2E8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p></div>
        </div>
    )
}