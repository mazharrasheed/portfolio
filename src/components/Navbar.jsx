import React from 'react'
import { Link } from 'react-router-dom';
import mycv from '../assets/files/mycv.pdf';

export default function Navbar() {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <div className='d-flex'>
                                <h2 style={{color:'rgb(253 87 120)'}}>Mazhar</h2>
                                <h5 className='text-dark'>Portfolio</h5>
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 " to="/"><h4>Home</h4></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 " to="/about"><h4>About</h4></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 " to="/projects"><h4>Projects</h4></Link>
                                </li>
                            </ul>
                            <a href={mycv} className='btn btn-danger'>Download file</a>git 
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
