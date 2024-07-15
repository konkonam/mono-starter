import mitt from 'mitt'
import type { Events } from '~/types'

export default defineNuxtPlugin(() => {
	const globalEmitter = mitt<Events>()

	return {
		provide: {
			globalEmitter,
		},
	}
})
