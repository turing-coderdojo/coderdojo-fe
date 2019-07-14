export const isFetchingReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return action.isFetching;
    default: 
      return state;
  }
}