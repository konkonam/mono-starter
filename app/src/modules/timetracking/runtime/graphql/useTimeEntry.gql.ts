import { useLazyQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const useTimeEntryGql = () => {
    const fetchSingle = async () => {
        const query = gql`
            query TimeEntry {
                timeEntry {
                    id
                    detailed_work_time {
                        duration
                        endTime
                        duration
                    }
                }
            }
        `

        const { load } = useLazyQuery(query)

        return load()
    }

    const fetchMultiple = async () => {
        const query = gql`
            query TimeEntries {
                timeEntries {
                    total
                    last_page

                }
            }
        `

        const { load } = useLazyQuery(query)

        return load()
    }

    return {
        fetchSingle,
        fetchMultiple,
    }
}
