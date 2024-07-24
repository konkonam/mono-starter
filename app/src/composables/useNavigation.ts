import type { RouteRecord } from 'vue-router'

import { isString } from '@mono/utils'

export const useNavigation = () => {
    const currentRoute = useRoute()
    const router = useRouter()

    const sortByOrder = (a: RouteRecord, b: RouteRecord) => {
        const orderA = a.meta?.navigation?.order ?? 0
        const orderB = b.meta?.navigation?.order ?? 0

        if (orderA > orderB) return 1
        if (orderA < orderB) return -1

        return 0
    }

    return {
        navItems: computed(() => {
            return router
                .getRoutes()
                .filter((route) => route.meta?.navigation?.exclude !== true)
                .sort(sortByOrder)
        }),
        isActive: (route: RouteRecord) => route.name === currentRoute.name,
        getName: computed(() => (route: RouteRecord) => route.meta.navigation?.name ?? route.name),
        getIcon: computed(() => (route: RouteRecord) => {
            if (!isString(route.meta.icon)) {
                return h(resolveComponent(`Icon${route.meta.icon}`))
            }
        }),
    }
}
