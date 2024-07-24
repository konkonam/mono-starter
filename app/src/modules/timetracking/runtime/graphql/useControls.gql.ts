import type { Mutation } from '@mono/dev/generated/graphql.d.ts'

import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const useControlsGql = () => {
    const timer = () => {
        const start = () => {
            return useMutation<Pick<Mutation, 'startTimer'>>(gql`
                mutation StartTimer {
                    startTimer {
                        ...TimeEntryFields
                    }
                }
            `).mutate()
        }

        const stop = () => {
            return useMutation<Pick<Mutation, 'stopTimer'>>(gql`
                mutation StopTimer {
                    stopTimer {
                        ...TimeEntryFields
                    }
                }
            `).mutate()
        }

        const pause = () => {
            return useMutation<Pick<Mutation, 'startPause'>>(gql`
                mutation PauseTimer {
                    startPause {
                        ...TimeEntryFields
                    }
                }
            `).mutate()
        }

        const resume = () => {
            return useMutation<Pick<Mutation, 'stopPause'>>(gql`
                mutation ResumeTimer {
                    stopPause {
                        ...TimeEntryFields
                    }
                }
            `).mutate()
        }

        return {
            start,
            stop,
            pause,
            resume,
        }
    }

    return {
        timer: timer(),
    }
}

export type UseControls = ReturnType<typeof useControlsGql>
