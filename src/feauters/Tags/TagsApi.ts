import { api } from '../api/apiSlice';

const TagsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => '/all-tags',
    }),
    getSingleTags: builder.query({
      query: (id) => `/single-tag/${id}`,
    }),
  }),
});

export const { useGetAllTagsQuery, useGetSingleTagsQuery } = TagsApi;
