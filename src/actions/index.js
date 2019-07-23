export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const addStudents = students => ({
  type: 'ADD_STUDENTS',
  students
});

export const setFetching = bool => ({
  type: 'SET_FETCHING',
  isFetching: bool
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setSearchResults = results => ({
  type: 'SET_SEARCH_RESULTS',
  results
});
