import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const salesApi = createApi({
    reducerPath: 'salesApi',
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
    tagTypes: ['Sales'],
    endpoints: (builder) => ({
        // sales estimate start
        createSalesEstimate: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        getAllSalesEstimates: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        getSalesEstimateById: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        updateSalesEstimate: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        deleteSalesEstimate: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),

        // sales invoice start
        createSalesInvoice: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllSalesInvoices: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getSalesInvoiceById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateSalesInvoice: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteSalesInvoice: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        

        // sales payment start
        createSalesPayment:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllSalesPayments: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getSalesPaymentById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateSalesPayment: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteSalesPayment: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
      

        // pipeline start

        createPipeline: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        getAllPipelines: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getPipelineById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        updatePipeline: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        deletePipeline: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        searchPipelines: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // proposal start

        createProposal: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        getAllProposals: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getProposalById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateProposal: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteProposal: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        searchProposals: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
    })

})