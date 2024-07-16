import type { GraphQLErrors, NetworkError } from '@apollo/client/errors'
import { createClient, createErrorLink } from '@mono/apollo'
import { provideApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxt) => {
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
	)

	return {
		provide: {
			apolloProvider: provideApolloClient(client),
		},
	}
})
