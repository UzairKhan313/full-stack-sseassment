import React from "react";
import { removeUser, updateUser } from "../features/user_slice";

import UserItem from "./User-Item";
import { useDispatch } from "react-redux";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../features/user_api";

const UserList = ({ items }) => {
  const dispatch = useDispatch();
  const [deleteUserRequest] = useDeleteUserMutation();
  const [updateUserRequest] = useUpdateUserMutation();

  const handleDelete = async (id) => {
    await deleteUserRequest(id);
    dispatch(removeUser(id));
  };

  const handleUpdate = async (updatedUser, id) => {
    await updateUserRequest({ data: updateUser, id });
    dispatch(updateUser(updatedUser));
  };

  let content;

  if (items.length === 0) {
    content = (
      <center className="m-auto font-bold text-xl">
        <h2>No User Found</h2>
      </center>
    );
  } else {
    content = (
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="text-start">Name</th>
            <th className="text-start">Username</th>
            <th className="text-start">Email</th>
            <th className="text-start">Webiste</th>
            <th className="text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </tbody>
      </table>
    );
  }
  return <div className="overflow-x-auto">{content}</div>;
};

export default UserList;
