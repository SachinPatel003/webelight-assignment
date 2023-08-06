import { gitApi } from "../appApi";

export const git = gitApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Git Repo
    getGitRepo: builder.query({
      query: (date) => ({
        url: `/search/repositories?q=created:>${date}&sort=stars&order=desc`,
        method: "GET",
      }),
      transformResponse: (res) => res.items,
      providesTags: ["git"],
    }),

    //Get additions/deletions
    getAdditionsDeletions: builder.query({
      query: ({ owner, repoName }) => ({
        url: `/repos/${owner}/${repoName}/stats/contributors`,
        method: "GET",
      }),
      transformResponse: (res) => res.items,
      providesTags: ["git"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetGitRepoQuery, useGetAdditionsDeletionsQuery } = git;
