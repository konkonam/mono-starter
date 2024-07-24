import type { GraphQLErrors, NetworkError } from '@apollo/client/errors'
import type { LoginPayload } from '@mono/btt'

type GraphQLEvents = {
    'gql:errors': GraphQLErrors
    'gql:networkError': NetworkError
}

type AuthEvents = {
    'auth:login': LoginPayload
    'auth:logout': undefined
}

export type BttEvents = {
    'btt:start': undefined
    'btt:logout': undefined
}

export type Events = GraphQLEvents & AuthEvents & BttEvents
