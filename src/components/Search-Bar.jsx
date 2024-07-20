import React from "react";
import { CiSearch } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import { setSearch, filterUsers } from "../features/user_slice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.users);

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(filterUsers());
  };

  return (
    <form className="max-w-[400px] w-full px-4">
      <div className="relative">
        <input
          type="text"
          className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 "
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
        />
        <CiSearch className="text-black h-5 w-5 absolute top-3.5 right-3 " />;
      </div>
    </form>
  );
};
export default SearchBar;
