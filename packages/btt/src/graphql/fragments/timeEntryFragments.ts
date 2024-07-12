import gql from 'graphql-tag'

export default gql`
    fragment TimeEntryFields on TimeEntry {
        id
        started_at
        finished_at
        worked_seconds
        pause_duration
        time_off
        time_off_type
        external_edit
        external_stop
        is_working
        detailed_work_time {
            startTime
            endTime
            duration
        }
        user {
            name
        }
        notes {
            text
            author {
                id
                name
            }
            created_at
        }
        latest_pause {
            started_at
            finished_at
            duration
            forced
        }
        pauses {
            started_at
            finished_at
            duration
            forced
        }
    }
`
