import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    updateUser: builder.mutation({
      query: ({ data, id }) => {
        console.log("Request for updating the user", id);
        return {
          url: `users/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        console.log("Request for Deleting the user", id);

        return { url: `users/${id}`, method: "DELETE" };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
