import React from 'react';

import profileImage from '../assets/Images/profile.png';

export default function Hero() {
  return (
    <>

      <section className="  text-dark p-5 vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className=' row text-center  '>
            <div className="col-md-6 d-flex align-items-center justify-content-center ">
              <div className=" ">
                <div style={{color:'rgb(253 87 120)'}}>
                <h1>Hello, I’m <span className=" title " >Mazhar Rasheed</span></h1>
                <p className="lead">Django & React Developer</p>
                <div className="d-flex justify-content-center gap-4 my-4">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                    alt="Django Logo"
                    width="80"
                    height="80"
                    title="Django"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React Logo"
                    width="80"
                    height="80"
                    title="React"
                  />

                </div>
                <button
                  type="button"
                  className="btn btn-info mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  style={{background:'rgb(253 87 120)'}}
                >
                  Contact Me
                </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className='d-flex align-items-center justify-content-center p-3'>
                <img className='profile-image profile-border' width={500} src={profileImage} alt="pofile image" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="contactModal"
          tabIndex="-1"
          aria-labelledby="contactModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-dark">
              <div className="modal-header bg-info">
                <h5 className="modal-title " id="contactModalLabel">Contact Me</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body hero">
                <div className="mb-3">
                  <h4 className="form-label">Cell Number : 0301-8742840, 315-6632840</h4>
                </div>
                <div className="mb-3">
                  <h4 className="form-label">E-Mail : mazharopal@gmail.com</h4>
                </div>
              </div>
              <div className="modal-footer bg-secondary">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
