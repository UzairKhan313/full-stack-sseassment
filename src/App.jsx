import { useEffect } from "react";

import { useGetUsersQuery } from "./features/user_api";
import { useSelector, useDispatch } from "react-redux";
import UserList from "./components/User-List";
import { setUsers } from "./features/user_slice";

import SearchBar from "./components/Search-Bar";
import Filter from "./components/Filter";

function App() {
  const dispatch = useDispatch();
  const { data: initialUsers, error, isLoading } = useGetUsersQuery();
  const { filteredUsers } = useSelector((state) => state.users);

  useEffect(() => {
    if (initialUsers) {
      dispatch(setUsers(initialUsers));
    }
  }, [initialUsers, dispatch]);

  if (isLoading) {
    return (
      <section className="container mx-auto p-4 flex items-center justify-center">
        <div className=" font-bold text-2xl">
          <h2>Please wait...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto p-4 flex items-center justify-center">
        <div className=" font-bold text-2xl">
          <h2>Something went wrong. Pleases try again letter.</h2>
          {/* <p>{error?.error}</p> */}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-8">
      <div className="flex gap-4">
        <SearchBar />
        <Filter />
      </div>
      <UserList items={filteredUsers} />
    </section>
  );
}

export default App;
