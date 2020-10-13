import React from 'react';

const BadgesListItem = ({ badge }) => {
  return (
    <div className="BadgesListItem">
      <img
        className="BadgesListItem__avatar"
        src={ badge.avatarUrl }
        alt={`${ badge.firstName } ${ badge.lastName }`}
      />

      <div>
        <strong>
          { badge.firstName } { badge.lastName }
        </strong>
        <br />@{ badge.twitter }
        <br />
        { badge.jobTitle }
      </div>
    </div>
  );
}

const BadgesList = ({ badges }) => {
  return (
    <div className="BadgesList">
      <ul className="list-unstyled">
        {
          badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={ badge } />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default BadgesList;
