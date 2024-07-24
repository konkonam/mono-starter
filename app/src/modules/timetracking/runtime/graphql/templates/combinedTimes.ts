import gql from 'graphql-tag';

export default gql`
    query combinedTimes(
        $limit: Int!
        $page: Int!
        $from: String
        $to: String
        $orderDateAscending: Boolean!
    ) {
        combinedTimes(
            limit: $limit
            page: $page
            from: $from
            to: $to
            orderDateAscending: $orderDateAscending
        ) {
            total
            lastPage
            currentPage
            data {
                ... on TimeEntry {
                    ...TimeEntryFields
                }
            }
        }
    }
`
