import { USER_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),

    contactUser:builder.mutation({
      query:(data)=>({
        url:`${USER_URL}/contactUser`,
        method:'POST',
        body:data,
      }),
    }),

    // updateUserProfile: builder.mutation({
    //   query: (data) => ({
    //     url: `${USER_URL}/profile`,
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useLoginMutation,
  useUserLogoutMutation,
  // useUpdateUserProfileMutation,
  useSignupMutation,
  useContactUserMutation,
} = userApiSlice;