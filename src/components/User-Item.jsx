import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const UserItem = ({ user, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData, user.id);
    setIsEditing(false);
  };
  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        ) : (
          user.username
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        ) : (
          user.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        ) : (
          user.website
        )}
      </td>

      <td className="px-4 py-2">
        {isEditing ? (
          <button
            className="mr-2 p-2 bg-blue-500 text-white rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        ) : (
          <button
            className="mr-2 p-2 bg-green-500 text-white rounded"
            onClick={handleEdit}
          >
            <FaEdit />
          </button>
        )}
        <button
          className="mr-1 p-2 bg-red-500 text-white rounded"
          type="button"
          onClick={() => onDelete(user.id)}
        >
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        ) : (
          user.username
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        ) : (
          user.email
        )}
      </td>
      <td>
        {isEditing ? (
          <button
            onClick={handleSubmit}
            className="mr-2 p-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="mr-2 p-2 bg-green-500 text-white rounded"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(user.id)}
          className="p-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
