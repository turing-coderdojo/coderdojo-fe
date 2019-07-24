import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import requests from '../../utils/requests/requests';
import StudentPreview from '../StudentPreview/StudentPreview';

export const Family = (props) => {
  const { username } = props.user;
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getFamily = async () => {
      const response = await requests.getFamily();

      setStudents(response.me.students);
    };
    
    getFamily();
  }, []);

  const createStudents = () => {
    return students.map(student => {
      return <StudentPreview student={student} />
    });
  }

  return (
    <section className="Family">
      <div className="family-header"><h2>Welcome, {username}</h2></div>
      <div className="family-main">
        <div className="family-sidebar">
        </div>
        <div className="family-details">
          {createStudents()}
          <Link to="/myfamily/registerstudent">Add a Student</Link>
        </div>
      </div>
    </section>
  );
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Family);

Family.propTypes = {
  user: PropTypes.object
};

Family.defaultProps = {
  user: {}
};
