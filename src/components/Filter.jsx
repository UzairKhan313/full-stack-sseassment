import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterOption, filterUsers } from "../features/user_slice";

const Filter = () => {
  const dispatch = useDispatch();
  const { filterOption } = useSelector((state) => state.users);

  const handleFilterChange = (e) => {
    dispatch(setFilterOption(e.target.value));
    dispatch(filterUsers());
  };

  return (
    <div className="rounded-md">
      <select
        onChange={handleFilterChange}
        value={filterOption}
        className="p-2 border rounded w-full"
      >
        <option value="name">Name</option>
        <option value="username">User Name</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
};

export default Filter;
