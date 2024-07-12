import gql from 'graphql-tag';

import userFragments from './userFragments'
import timeEntryFragments from './timeEntryFragments'

export default gql`
    ${userFragments}
    ${timeEntryFragments}
`
