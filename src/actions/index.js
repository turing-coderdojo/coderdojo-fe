export const addUser = (user) => ({
  type:'ADD_USER',
  user
});

export const isFetching = (bool) => ({
  type: 'IS_FETCHING',
  isFetching: bool
});