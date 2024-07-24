import { createFragmentRegistry } from '@apollo/client/cache'
import type { GraphQLErrors, NetworkError } from '@apollo/client/errors'
import { provideApolloClient } from '@vue/apollo-composable'

import { createClient, createErrorLink } from '@mono/apollo'
import fragments from '#timetracking/graphql/fragments'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()

    const onGqlErrors = (errors: GraphQLErrors) => {
        const isAuthError = errors.find((error) => {
            const categories = (error.extensions?.category ?? []) as string[]

            return categories.includes('authorization')
        })

        if (isAuthError) {
            console.log('auth error')
        }
    }
    const onNetError = (error: NetworkError) => {}

    const client = createClient(
        runtimeConfig.public.apiEndpoint,
        createErrorLink(onGqlErrors, onNetError),
        createFragmentRegistry(fragments),
    )

    return {
        provide: {
            apolloProvider: provideApolloClient(client),
        },
    }
})
