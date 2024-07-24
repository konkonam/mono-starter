import gql from 'graphql-tag'

export default gql`
    fragment UserFields on User {
        id
        pin
        latest_time_entry {
            ...TimeEntryFields
        }
        permissions {
            name
        }
        photo
        firstName
        loginId
    }
`
