import React from 'react';
import confLogo from 'static/img/badge-header.svg'

export default function Badge({ avatarUrl, firstName, lastName, jobTitle, twitter }) {
  return (
    <div className='Badge'>
      <div className='Badge__header'>
        <img src={ confLogo } alt="Logo de la conferencia"/>
      </div>

      <div className='Badge__section-name'>
      {
        avatarUrl
        ? <img className='Badge__avatar' src={ avatarUrl } alt="Avatar"/>
        : <img className='Badge__avatar' src="https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon" alt="Avatar"/>
      }
        <h1>{ firstName } <br/> { lastName }</h1>
      </div>

      <div className='Badge__section-info'>
        <h3>{ jobTitle }</h3>
        <div>@{ twitter }</div>
      </div>

      <footer className='Badge__footer'>
        #platziconf
      </footer>
    </div>
  )
};