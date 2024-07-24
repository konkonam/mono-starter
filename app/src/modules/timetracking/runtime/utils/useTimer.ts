import type { Timer } from '#timetracking/types'

export const useTimer = () => {
    const secondsToTimer = (value: number): Timer => {
        let isNegative = false
        let tmp = value

        if (value < 0) {
            tmp = value * -1
            isNegative = true
        }

        let minutes = Math.floor(tmp / 60)
        tmp %= 60
        const hours = Math.floor(minutes / 60)
        minutes %= 60

        return {
            isNegative,
            hours: Math.floor(hours).toString().padStart(2, '0'),
            minutes: Math.floor(minutes).toString().padStart(2, '0'),
            seconds: Math.floor(tmp).toString().padStart(2, '0'),
        }
    }

    return {
        secondsToTimer,
    }
}
