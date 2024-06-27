import { useFramework } from './sdk';

export * from './functions'
export * from './sdk'

const { implement } = useFramework()


const myModule = implement(({ prepare }) => {
    return {
        injectClient: prepare({
            client: {
                url: '',
                username: '',
                password: '',
            },
        }),
    }
})
