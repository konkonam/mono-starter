import type { Events } from '~/types'

import mitt from 'mitt'

export default defineNuxtPlugin(() => {
    const emitter = mitt<Events>()

    return {
        provide: {
            emitter,
        },
    }
})
