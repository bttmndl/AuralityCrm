import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: dummyApis,
        prepareHeaders: (headers, { getState }: any) => {
            const token = JSON.parse(localStorage.getItem("User")!).accessToken;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        // Tasks  dashboard start
        addTaskDashboard: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        getAllTaskDashboardEntries: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        getTaskDashboardEntryById: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        updateTaskDashboardEntry: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        deleteTaskDashboardEntry: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        // team tasks start
        addTeamTask: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllTeamTasks: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getTeamTaskById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateTeamTask: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteTeamTask: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
    })

})