import { api } from '../api/apiSlice';

const BlogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs',
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery } = BlogApi;
