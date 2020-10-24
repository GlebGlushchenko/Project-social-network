const initialState = {
  users: [
    { name: 'Gleb', id: 1 },
    { name: 'Oly', id: 2 },
    { name: 'Tany', id: 3 },
    { name: 'Artem', id: 4 },
    { name: 'Vova', id: 5 },
    { name: 'Den', id: 6 },
  ],
};

const usersReducer = (state = initialState, action) => {
  return state;
};

export default usersReducer;
