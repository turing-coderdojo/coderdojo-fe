import React, { useState } from 'react';
import PropTypes from 'prop-types';

function StudentAttendanceCard({ student }) {
  const [guardianInfo, showGuardianInfo] = useState(false);
  const { 
    name, username, email, phoneNumber 
  } = student.guardianId;
  const guardianInfoBox = (
    <div className="guardian-details">
      <p className="guardian-header"><b>Guardian Details:</b></p>
      <p>
        {name}
        &nbsp;:&nbsp;
        {username}
      </p>
      <p>
        Phone:&nbsp;&nbsp;
        {phoneNumber}
      </p>
      <p>
        Email:&nbsp;&nbsp;
        {email}
      </p>
    </div>
  );
  return (
    <article className="StudentAttendanceCard"> 
      <div
        onMouseEnter={() => showGuardianInfo(true)} 
        onMouseLeave={() => showGuardianInfo(false)}  
      >
        <h4>
          {student.name}
          &nbsp;:&nbsp;
          {student.username}
        </h4>
      </div>
      {guardianInfo && guardianInfoBox}
    </article>
  );
}

export default StudentAttendanceCard;

StudentAttendanceCard.propTypes = {
  student: PropTypes.object
};

StudentAttendanceCard.defaultProps = {
  student: {}
};
