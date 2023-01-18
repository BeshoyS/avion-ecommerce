import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const firebaseApi = createApi({
  reducerPath: "firebaseApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["categories", "gallery", "products"],
  endpoints: () => ({}),
});
