import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import bluegalaxy from '../images/bluegalaxy.jpg';

export default function Contact() {

    return (
        <div style={{ backgroundImage: `url(${bluegalaxy})`, backgroundSize: 'cover', width: '100vw', height: '100vh' }}>
            <div className="contact">
                <h1>Contact Me</h1>
                <ul class="fa-ul">
                    <li><a href="mailto:ohmotrl@gmail.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEnvelope} />
                         Email</a></li>
                </ul>
            </div>
                <div className="photo-credit"><p>Photo by <a href="https://unsplash.com/@nicolescapturedmoments?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nicole Avagliano</a> on <a href="https://unsplash.com/photos/blue-and-black-galaxy-illustration-StCrWOWx2E8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p></div>
        </div>
    )
}