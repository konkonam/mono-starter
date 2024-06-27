import { useFramework } from '@mono/framework'

const { implement } = useFramework()

export const btt = implement(({ prepare }) => {
  return {
      injectClient: prepare({
          client: 'client',
      })
  }
})
