import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filteredUsers: [],
  filterOption: "name",
  search: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.filteredUsers = state.users.filter((user) =>
        user[state.filterOption]
          .toLowerCase()
          .includes(state.search.toLowerCase())
      );
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      state.filteredUsers = state.users.filter((user) =>
        user[state.filterOption]
          .toLowerCase()
          .includes(state.search.toLowerCase())
      );
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
        state.filteredUsers = state.users.filter((user) =>
          user[state.filterOption]
            .toLowerCase()
            .includes(state.search.toLowerCase())
        );
      }
    },
    filterUsers: (state) => {
      state.filteredUsers = state.users.filter((user) =>
        user[state.filterOption]
          .toLowerCase()
          .includes(state.search.toLowerCase())
      );
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.filteredUsers = state.users.filter((user) =>
        user[state.filterOption]
          .toLowerCase()
          .includes(state.search.toLowerCase())
      );
    },
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;

      state.filteredUsers = state.users.filter((user) =>
        user[state.filterOption]
          .toLowerCase()
          .includes(state.search.toLowerCase())
      );
    },
  },
});

export const {
  setUsers,
  removeUser,
  updateUser,
  setSearch,
  setFilterOption,
  filterUsers,
} = userSlice.actions;
export default userSlice.reducer;
