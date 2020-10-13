import React, { useState } from 'react';

import header from 'static/img/badge-header.svg';
import Badge from 'components/Badge';
import BadgeForm from 'components/BadgeForm';

export default function BadgeNew () {
  const initialBadgeState = { firstName: '', lastName: '', email: '', jobTitle: '', twitter: '' }
  const [ badgeState, setBadgeState ] = useState( initialBadgeState )

  const handleChange = event => {
    const keyBadgeState = event.target.name
    const valueBadgeState = event.target.value

    setBadgeState({
        ...badgeState,
        [ keyBadgeState ]: valueBadgeState
    });
  };

  return (
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={ header } alt="Logo" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={ badgeState.firstName }
              lastName={ badgeState.lastName }
              twitter={ badgeState.twitter }
              jobTitle={ badgeState.jobTitle }
              email={ badgeState.email }
              avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            />
          </div>

          <div className="col-6">
            <BadgeForm
              onChange={ handleChange }
              formValues={ badgeState }
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};
