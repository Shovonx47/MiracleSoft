import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://miracle-portfolio-be.vercel.app/api/v1",
    credentials: 'include'
  }),
  tagTypes: ['Feedback'],
  endpoints: () => ({}),
});
