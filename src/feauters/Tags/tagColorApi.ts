import { api } from '../api/apiSlice';

const TagsColorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTagColors: builder.query({
      query: () => '/tag-colors',
      providesTags: ['tagColor'],
    }),
    getSingleTagColor: builder.query({
      query: (id) => `/single-tag/${id}`,
      providesTags: ['tag'],
    }),
    deleteSingleTagColor: builder.mutation({
      query(id) {
        return {
          url: `/delete-single-tag-color/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['tagColor'],
    }),
    postSingleTagColor: builder.mutation({
      query(tagProduct) {
        return {
          url: '/post-tag',
          method: 'POST',
          body: JSON.stringify(tagProduct),
        };
      },
      invalidatesTags: ['tagColor'],
    }),
  }),
});

export const {
  useGetAllTagColorsQuery, useDeleteSingleTagColorMutation, useGetSingleTagColorQuery,
} = TagsColorApi;

export default TagsColorApi;
