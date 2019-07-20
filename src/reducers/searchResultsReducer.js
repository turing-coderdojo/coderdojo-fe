const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case ('SET_SEARCH_RESULTS'):
      return action.results;
    default:
      return state;
  }
};

export default searchResultsReducer;
