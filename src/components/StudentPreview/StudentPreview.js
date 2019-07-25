import React from 'react';
import { PropTypes } from 'prop-types';

const StudentPreview = ({ student }) => (
  <article className="StudentPreview">
    <h4>{student.name}</h4>
    <p className="student-username">{student.username}</p>
  </article>
);

export default StudentPreview;

StudentPreview.propTypes = {
  student: PropTypes.object
};

StudentPreview.defaultProps = {
  student: {}
};
