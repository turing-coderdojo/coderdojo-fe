import React from 'react';
import { PropTypes } from 'prop-types';

const StudentPreview = ({ student }) => (
  <article className="StudentPreview">
    <h3>{student.name}</h3>
    <p className="student-username">{student.username}</p>
    <p className="student-dob">{student.birthdate}</p>
  </article>
);

export default StudentPreview;

StudentPreview.propTypes = {
  student: PropTypes.object
};

StudentPreview.defaultProps = {
  student: {}
};
