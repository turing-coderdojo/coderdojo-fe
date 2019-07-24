const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STUDENTS':
      return action.students;
    default:
      return state;
  }
};

export default studentsReducer;
