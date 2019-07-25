import React, { useState } from 'react';

function StudentAttendanceCard({ student }) {
  const [guardianInfo, showGuardianInfo] = useState(true);
  const { 
    name, username, email, phoneNumber 
  } = student.guardianId;
  const guardianInfoBox = (
    <div className="guardian-details">
      <p className="guardian-header">Guardian Details:</p>
      <p>
        {name}
        &nbsp;:&nbsp;
        {username}
      </p>
      <p>
        Phone:
        {phoneNumber}
      </p>
      <p>
        Email:
        {email}
      </p>
    </div>
  );
  return (
    <article 
      className="StudentAttendanceCard"
      key={student.id}
    >
      <h4>
        {student.name}
        &nbsp;:&nbsp;
        {student.username}
      </h4>
      <button 
        type="button"
        onMouseEnter={() => showGuardianInfo(true)} 
        onMouseLeave={() => showGuardianInfo(false)} 
      >
        Guardian Details
      </button>
      {guardianInfo && guardianInfoBox}
    </article>
  );
}

export default StudentAttendanceCard;
