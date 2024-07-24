export type Timer = {
    isNegative: boolean
    hours: string
    minutes: string
    seconds: string
}

export type BttContext = {
    token?: string
    expiresAt?: Date
    user?: unknown
}
