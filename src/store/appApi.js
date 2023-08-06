import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
});

const gitApi = createApi({
  reducerPath: "gitApi",
  baseQuery,
  tagTypes: ["git"],
  endpoints: () => ({}),
});

export { gitApi };
