import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client/core'

import { type FragmentRegistryAPI, createFragmentRegistry } from '@apollo/client/cache'
import { createErrorLink } from './createErrorLink'

export * from './createErrorLink'

export const createClient = (
    endpoint: string,
    errorLink?: ApolloLink,
    fragments?: FragmentRegistryAPI,
) =>
    new ApolloClient({
        link: ApolloLink.from([
            errorLink ?? createErrorLink(),
            new ApolloLink((operation, forward) => {
                const token = localStorage.getItem('token')

                operation.setContext({
                    headers: {
                        authorization: token ? `Bearer ${token}` : '',
                    },
                })

                return forward(operation)
            }),
            new HttpLink({ uri: endpoint }),
        ]),
        cache: new InMemoryCache({
            fragments,
            typePolicies: {
                Query: {
                    fields: {
                        someField: {
                            read: () => undefined,
                            merge: (existing, incoming) => incoming,
                        },
                    },
                },
            },
        }),
        defaultOptions: {
            watchQuery: { fetchPolicy: 'no-cache', errorPolicy: 'all' },
            query: { fetchPolicy: 'no-cache' },
            mutate: { errorPolicy: 'all' },
        },
    })
