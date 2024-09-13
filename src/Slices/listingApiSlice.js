import { apiSlice } from "./apiSlice";
import { LISTING_URL, UPLOAD_IMAGE } from "../constant";

const listingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllLists: builder.query({
            query: () => ({
                url: `${LISTING_URL}/allListings`
            }),

        }),
        addNewListing: builder.mutation({
            query: (data) => ({
                url: `${LISTING_URL}/addListing`,
                method: "POST",
                body: data
            }),
        }),

        recentAddLists: builder.query({
            query: () => ({
                url: `${LISTING_URL}/recentListings`
            }),
        }),

        uploadImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOAD_IMAGE}/upload`,
                method: "POST",
                body: data,
            }),
        }),

        getCarById:builder.query({
            query:(id)=>({
                url:`${LISTING_URL}/${id}`
            }),
        }),

        getNewLIstings:builder.query({
            query:()=>({
                url:`${LISTING_URL}/newListings`,
            }),
        }),


    })
})

export const { useGetAllListsQuery, useAddNewListingMutation, useUploadImageMutation, useRecentAddListsQuery, useGetCarByIdQuery, useGetNewLIstingsQuery} = listingApiSlice;