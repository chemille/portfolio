import React from 'react';
import auroraborealis from '../images/auroraborealis.jpg';
import './projects.css';
import petshome from '../assets/petshome.jpg';
import wildfiremain1 from '../assets/wildfiremain1.jpg';
import savvyswap from '../assets/savvyswap.jpg';
import yoga4all from '../assets/yoga4all.jpg';
import inspirationboard2 from '../assets/inspirationboard2.jpg';
import reactchatlog from '../assets/reactchatlog.jpg';
import weatherreport1 from '../assets/weatherreport1.jpg';
import githubrepo from '../assets/githubrepo.jpg';
import ProjectCard from './ProjectCard';


export default function Projects() {
    const projectData = [
        {
            image: petshome,
            title: 'Pets Project',
            links: [
                { href: "https://github.com/chemille/pet-project-django-react", text: 'Backend'},
                { href: "https://github.com/chemille/pet-project-frontend", text: 'Frontend'},
            ]
        },
        {
            image: wildfiremain1,
            title: 'Wildfire Watchtower',
            links: [
                { href: "https://github.com/chemille/WildfireWatchtower" , text: 'Repo'},
                { href: "https://devpost.com/software/wildfire-tracker-xg3cmy", text: 'Demo'},
                { href: "https://wildfirewatchtower-nb6t.onrender.com/", text: 'Deployed Link'},
            ]
        },
        {
            image: savvyswap,
            title: 'Savvy Swap',
            links: [
                { href: "https://github.com/LeeReyesCS/neighborhood-hack-backend", text: 'Backend'},
                { href: "https://github.com/LeeReyesCS/neighborhood-hack-frontend", text: 'Frontend'},
                { href: "https://devpost.com/software/savvyswap", text: 'Demo'}
            ]
        },
        {
            image: yoga4all,
            title: 'Yoga-4-All',
            links: [
                { href: "https://github.com/Farrah-Unger/Capstone-Yoga-4-All-Backend", text: 'Backend'},
                { href: "https://github.com/chemille/frontend-yoga-4-all", text: 'Frontend'},
                { href: "https://www.youtube.com/watch?v=CuP4NGSjDmQ", text: 'Demo'}
            ]
        },
        {
            image: inspirationboard2,
            title: 'Inspiration Board',
            links: [
                { href: "https://github.com/chemille/back-end-inspiration-board", text: 'Backend'},
                { href: "https://github.com/chemille/front-end-inspiration-board", text: 'Frontend'}
            ]
        },
        {
            image: reactchatlog,
            title: 'React Chat Log',
            links: [
                { href: "https://github.com/chemille/react-chatlog", text: 'Repo'}
            ]
        },
        {
            image: weatherreport1,
            title: 'Weather Report',
            links: [
                { href: "https://github.com/chemille/weather-report", text: 'Repo'}
            ]
        },
        {
            image: githubrepo,
            title: 'More on my Github',
            links: [
                { href: "https://github.com/chemille", text: 'Github Link'}
            ]
        }
    ];

    return (
        <div style={{ backgroundImage: `url(${auroraborealis})`, backgroundSize: 'cover', width: '100vw'}} > 
            <div className="projects-container">
            <h1 className="text-center">Projects</h1>
            <div className="grid-container">
                {projectData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        image={project.image}
                        title={project.title}
                        links={project.links}
                    />
                ))}
            </div>
            </div>
        
        <div>
            <div className="photo-credit"><p>Photo by <a href="https://unsplash.com/@r3dmax?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonatan Pie</a> on <a href="https://unsplash.com/photos/person-standing-under-aurora-lights-UPWuKzAcuUI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p></div> 
            </div>
        </div>
    )
}
