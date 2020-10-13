import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import 'assets/styles/pages/Badges.scss';
import confLogo from 'static/img/badge-header.svg';
import BadgesList from 'components/BadgesList';

const Badges = () => {
  const [ badges, setBadges ] = useState({
    loading: true,
    error: null,
    data: []
  })

  const getBadges = async () => {
    const res = await fetch('http://localhost:3001/badges')
    const data =  res.json()
    return data
  }

  useEffect(() => {
    getBadges()
      .then(badges => setBadges({ loading: false, data: badges, error: null }))
      .catch(err => console.error(err))
  }, [])

  if ( badges.loading === true) {
    return (
      <h1>Loading...</h1>
      )
  } else if (badges.data.length === 0) {
    return (
      <div className="Badges__container">
      <div className="Badges__buttons">
        <Link to="/badges/new" className="btn btn-primary">
          New Badge
        </Link>
      </div>
      <BadgesList badges={ badges.data } />
    </div>
    )
  } else {
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={ confLogo }
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <BadgesList badges={ badges.data } />
        </div>
      </>
    )
  }
}

export default Badges;
