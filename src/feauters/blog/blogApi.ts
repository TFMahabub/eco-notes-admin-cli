import { api } from '../api/apiSlice';

const BlogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs',
      providesTags: ['blog'],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
      providesTags: ['blog'],
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery } = BlogApi;
