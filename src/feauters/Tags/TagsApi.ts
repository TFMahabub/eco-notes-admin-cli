import { api } from '../api/apiSlice';

const TagsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => '/all-tags',
      providesTags: ['tag'],
    }),
    getSingleTags: builder.query({
      query: (id) => `/single-tag/${id}`,
      providesTags: ['tag'],
    }),
    deleteSingleTag: builder.mutation({
      query(id) {
        return {
          url: `/delete-tag/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['tag'],
    }),
    postSingleTag: builder.mutation({
      query(body) {
        return {
          url: '/post-tag',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['tag'],
    }),
  }),
});

export const {
  useGetAllTagsQuery, useGetSingleTagsQuery, useDeleteSingleTagMutation, usePostSingleTagMutation,
} = TagsApi;
