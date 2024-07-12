import { useLazyQuery, useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export type LoginPayload = {
    email: string
    password: string
}

export const useUser = () => {
    const loginByEmail = async (payload: LoginPayload) => {
        const query = gql`
            mutation LoginByEmail($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    accessToken
                    expiresAt
                    user {
                        ...UserFields
                    }
                }
            }
        `

        const { mutate } = useMutation(query)

        return mutate({
            email: payload.email,
            password: payload.password,
        })
    }

    const fetch = async () => {
        const query = gql`
            query User {
                user {
                    ...UserFields
                }
            }
        `

        const { load } = useLazyQuery(query)

        return load()
    }

    return {
        loginByEmail,
        fetch,
    }
}

export type UseUser = ReturnType<typeof useUser>
