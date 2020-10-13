import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

export default function PxBadgeFrom ({ formValues, onChange }) {
  const [ path, setPath ] = useState(null)

  const handleSubmit = event => {
    event.preventDefault();
    console.log('evento', event)

    fetch("http://localhost:3001/badges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)
    }).then(res => {
      console.log(res)
      setPath("/badges");
    })
      .catch(err => console.error(err))
  }

  if (path) {
    return ( <Redirect to={ path } /> )
  } else {
    return (
      <div>
        <h1>New Attendant</h1>
  
        <form onSubmit={ handleSubmit }>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={ onChange }
              type="text"
              name="firstName"
              className="form-control"
              value={ formValues.firstName }
              placeholder="Nombre"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={ onChange }
              type="text"
              name="lastName"
              className="form-control"
              value={ formValues.lastName }
              placeholder="Apellido"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              onChange={ onChange }
              type="email"
              name="email"
              className="form-control"
              value={ formValues.email }
              placeholder="Email"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              onChange={ onChange }
              type="text"
              name="jobTitle"
              className="form-control"
              value={ formValues.jobTitle }
              placeholder="Profesion"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={ onChange }
              type="text"
              name="twitter"
              className="form-control"
              value={ formValues.twitter }
              placeholder="Twitter"
            />
          </div>
  
          <button
            className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }


};