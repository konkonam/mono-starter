import { btt } from '../core';

export const timer = btt.injectClient(({ client }) => {
    return {
        timer: async (time: number) => {
            return await client.timer(time)
        }
    }
})
