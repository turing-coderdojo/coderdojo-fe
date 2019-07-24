import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import requests from '../../utils/requests/requests';
import StudentPreview from '../StudentPreview/StudentPreview';

export const Family = ({ user, loading }) => {
  const { username } = user;
  const [students, setStudents] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    const getFamily = async () => {
      const response = await requests.getFamily();

      setStudents(response.me.students);
    };

    const getContactInfo = async () => {
      const response = await requests.getGuardianData();
      const { addresses, email, phoneNumber } = response.me;
      const { 
        street1,
        street2,
        city,
        state,
        zip,
      } = addresses[0];
      const info = {
        email,
        phoneNumber,
        street1,
        street2,
        zip,
        city,
        state
      };

      setContactInfo(info);
    }
    
    getFamily();

    getContactInfo();
  }, []);

  const generateStudents = () => students
    .map(student => <StudentPreview key={student.id} student={student} />);

  const generateContactInfo = () => {
    const { phoneNumber, email, street1, street2, city, state, zip } = contactInfo;
    const address1 = `${street1}, ${street2 || ''}`;
    const address2 = `${city}, ${state} ${zip}`;

    return (
      <div className="family-sidebar">
        <h3>My Contact Info</h3>
        <h4>
          Phone:&nbsp;
        </h4>
        <p>
          {phoneNumber}
        </p>
        <h4>
          Email:&nbsp;
        </h4>
        <p>
          {email}
        </p>
        <h4>
          Address:&nbsp;
        </h4>
        <p>
          {address1}
        </p>
        <p>
          {address2}
        </p>
      </div>
    );
  };

  return (
    <section className="Family">
      <div className="family-header">
        <h2>{`Welcome, ${username}`}</h2>
      </div>
      <div className="family-main">
        {generateContactInfo()}
        <div className="family-details">
          <h3 className="students-header">My Students
            <Link to="/myfamily/registerstudent">
              <button>Add a Student</button>
            </Link>
          </h3>
          <div className="students-container">
            {
              loading 
              ? <p className="loading">Loading...</p>
              : generateStudents()
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  loading: state.isFetching
});

export default connect(mapStateToProps)(Family);

Family.propTypes = {
  user: PropTypes.object
};

Family.defaultProps = {
  user: {}
};
