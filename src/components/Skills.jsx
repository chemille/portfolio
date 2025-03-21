import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faJs, faHtml5, faCss3, faJava, faAws } from '@fortawesome/free-brands-svg-icons';
import nightsky from '../images/nightsky.jpg';

export default function Skills() {

    return (
        <div style={{ backgroundImage: `url(${nightsky})`, backgroundSize: 'cover', width: '100vw' }} >
            <div>
                <h1>Skills</h1>
            </div>
            
            <div className="skills" >
                <div className="languages">
                    <h4>LANGUAGES & FRAMEWORKS</h4>
                    <ul className="fa-ul">
                        <li><FontAwesomeIcon icon={faPython} className="fa-li fa-lg" /> Python</li>
                        <li><FontAwesomeIcon icon={faReact} className="fa-li fa-lg" /> React</li>
                        <li><FontAwesomeIcon icon={faJs} className="fa-li fa-lg" /> JavaScript, TypeScript</li>
                        <li><FontAwesomeIcon icon={faHtml5} className="fa-li fa-lg" /> HTML</li>
                        <li><FontAwesomeIcon icon={faCss3} className="fa-li fa-lg" /> CSS</li>
                        <li><FontAwesomeIcon icon={faJava} className="fa-li fa-lg" /> Java</li>
                    </ul>
                </div>

                <div className="technologies">
                    <table>
                        <th><h4>TECHNOLOGIES & TOOLS</h4></th>
                        <tbody>
                            <tr>
                                <td>AWS</td>
                            </tr>
                            <tr>
                                <td>Git</td>
                            </tr>
                            <tr>
                                <td>PostgreSQL</td>
                            </tr>
                            <tr>
                                <td>Heroku</td>
                            </tr>
                            <tr>
                                <td>Microsoft Azure</td>
                            </tr>
                            <tr>
                                <td>Okta</td>
                            </tr>
                            <tr>
                                <td>Kibana</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="project-management">
                    <table>
                        <th><h4>PROJECT MANAGEMENT </h4></th>
                        <tbody>
                            <tr>
                                <td>Agile methodologies</td>
                            </tr>
                            <tr>
                                <td>Kanban</td>
                            </tr>
                            <tr>
                                <td>Jira</td>
                            </tr>
                            <tr>
                                <td>CI/CD</td>
                            </tr>
                            <tr>
                                <td>Test Driven Development</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        
        <div>
            <div className="photo-credit"><p>Photo by <a href="https://unsplash.com/@ryan_hutton_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ryan Hutton</a> on <a href="https://unsplash.com/photos/worms-eye-view-of-trees-during-night-time-Jztmx9yqjBw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p></div>
        </div>
        </div>
    );
};