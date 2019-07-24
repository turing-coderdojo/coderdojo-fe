import React from 'react';

function StudentPreview({ student }) {
  console.log(student)
  return (
    <article className="StudentPreview">
      <h3>{student.name}</h3>
      <p className="student-username">{student.username}</p>
      <p className="student-dob">{student.birthdate}</p>
    </article>
  );
}

export default StudentPreview;
