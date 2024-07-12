import type {
    QuerydetailedBalanceForUserArgs as BalanceArgs,
} from "@mono/dev/generated/graphql.d.ts";

import gql from 'graphql-tag';
import { useLazyQuery } from '@vue/apollo-composable';

export const useBalanceGql = () => {
    const fetchBalance = async (payload: BalanceArgs) => {
        const query = gql`
            query detailedBalanceForUser(
                $userId: Int!
                $fromDate: String!
                $toDate: String!
            ) {
                detailedBalanceForUser(
                    userId: $userId
                    fromDate: $fromDate
                    toDate: $toDate
                ) {
                    targetTime
                    actualTime
                    balance
                }
            }
        `

        if (payload.userId === null) return undefined
        if (payload.userId === undefined) return undefined

        const { load } = useLazyQuery(query, {
            userId: payload.userId,
            fromDate: payload.fromDate,
            toDate: payload.toDate,
        })

        return load()
    }

    return {
        fetchBalance,
    }
}

export type UseBalance = ReturnType<typeof useBalanceGql>
