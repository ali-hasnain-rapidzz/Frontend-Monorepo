/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = process.env.NEXT_PUBLIC_SERVER_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: typeof window === "undefined" ? "http://localhost:3000" : window.location.origin,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
