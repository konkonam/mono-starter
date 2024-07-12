import type {
    GraphQLErrors,
    NetworkError,
} from '@apollo/client/errors';

import { onError } from '@apollo/client/link/error';

export const createErrorLink = (
    onGqlError?: (errors: GraphQLErrors) => void,
    onNetError?: (errors: NetworkError) => void,
) => {
    return onError(({ graphQLErrors, networkError }) => {
        if (process.env.NODE_ENV === 'development') {
            console.error('networkError', networkError)
            console.error('graphQLErrors', graphQLErrors)
        }

        if (graphQLErrors?.length && onGqlError) onGqlError(graphQLErrors)
        if (networkError && onNetError) onNetError(networkError)
    })
}