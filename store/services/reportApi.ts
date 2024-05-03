import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const reportApi = createApi({
    reducerPath: 'reportApi',
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
    tagTypes: ['Report'],
    endpoints: (builder) => ({
        // amount owed entry start
        createAmountOwed: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        getAllAmountOwed: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        getAmountOwedById: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        updateAmountOwed: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),

        deleteAmountOwed: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        // client budget entry start
        createClientBudget: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllClientBudget: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getClientBudgetById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateClientBudget: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteClientBudget: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        

        // daily limits entry start
        createDailyLimits:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllDailyLimits: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getDailyLimitsById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateDailyLimits: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteDailyLimits:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        
        //  expense report entry start

        createExpenseReport:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllExpenseReports: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getExpenseReportById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateExpenseReport: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteExpenseReport:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // manual time edit report start

        createManualTimeEditReport:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllManualTimeEditReports: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getManualTimeEditReportById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateManualTimeEditReport: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteManualTimeEditReport:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
      
        // payment report entry start

        createPaymentReport:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllPaymentReports: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getPaymentReportById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updatePaymentReport: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deletePaymentReport:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // project budget entry start

        createProjectBudget:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllProjectBudgets: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getProjectBudgetById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateProjectBudget: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteProjectBudget:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // time activity report

        createTimeActivityReport:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllTimeActivityReports: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getTimeActivityReportById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateTimeActivityReport: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteTimeActivityReport:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // weekly entry start

        createWeeklyEntry:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllWeeklyEntries: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getWeeklyEntryById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateWeeklyEntry: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteWeeklyEntry:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // weekly limits entry start

        createWeeklyLimits:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllWeeklyLimits: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getWeeklyLimitsById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateWeeklyLimits: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteWeeklyLimits:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

    })

})