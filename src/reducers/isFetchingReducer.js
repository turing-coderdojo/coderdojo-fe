export const isFetchingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_FETCHING':
      return action.isFetching;
    default: 
      return state;
  }
}