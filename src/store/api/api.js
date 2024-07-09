import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "apu",
  tagTypes: ["recipes"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/" }),
  endpoints: (build) => ({
    getRecipes: build.query({
      query: (limit = "") => `recipes?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "recipes", id })),
              { type: "recipes", id: "LIST" },
            ]
          : [{ type: "recipes", id: "LIST" }],
    }),
    addRecipe: build.mutation({
      query: (body) => ({
        url: "recipes",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "recipes", id: "LIST" }],
    }),
  }),
});

export const { useAddRecipeMutation, useGetRecipesQuery } = api;
