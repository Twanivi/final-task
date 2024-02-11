import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  endpoints: builder => ({
    getGames: builder.query({
      query: () => 'games',
    }),
  })
})

export const {useGetGamesQuery} = gamesApi;