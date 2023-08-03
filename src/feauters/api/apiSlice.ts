import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line import/prefer-default-export
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eco-notes-server-site.vercel.app',
  }),
  tagTypes: ['blog'],
  endpoints: () => ({}),
});
