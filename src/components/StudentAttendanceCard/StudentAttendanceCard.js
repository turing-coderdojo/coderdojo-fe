import React, { useState } from 'react';

function StudentAttendanceCard({ student }) {
  const [guardianInfo, showGuardianInfo] = useState(false);
  const { 
    name, username, email, phoneNumber 
  } = student.guardianId;
  const guardianInfoBox = (
    <div className="guardian-details">
      <p>Guardian Details:</p>
      <p>
        {name}
        :
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
      onMouseEnter={() => showGuardianInfo(true)} 
      onMouseLeave={() => showGuardianInfo(false)} 
      key={student.id}
    >
      <h4>
        {student.name}
        :
        {student.username}
      </h4>
      {guardianInfo && guardianInfoBox}
    </article>
  );
}

export default StudentAttendanceCard;
