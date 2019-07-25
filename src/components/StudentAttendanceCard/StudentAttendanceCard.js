import React, { useState } from 'react';

function StudentAttendanceCard({ student }) {
  const { 
    name, username, email, phoneNumber 
  } = student.guardianId;
  return (
    <article key={student.id}>
      <h4>
        {student.name}
        :
        {student.username}
      </h4>
      <div className="guardian-details">
        <h4>Guardian Details:</h4>
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
    </article>
  );
}

export default StudentAttendanceCard;
