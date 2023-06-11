const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/updatedFilter':
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
