import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        {fieldofstudy && (
          <span>
            <strong>Field of Study: </strong>
            {fieldofstudy}
          </span>
        )}
      </p>
      <p>
        {description && (
          <span>
            <strong>Description: </strong>
            {description}
          </span>
        )}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
