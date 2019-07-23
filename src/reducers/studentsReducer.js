const studentsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_STUDENTS':
      return students;
    default:
      return state;
  }
}

export default studentsReducer;
