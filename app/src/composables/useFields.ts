import z from 'zod'

export const useFields = () => {
    const textField = (name: string, value?: string, required?: boolean) => {
        const validation = z
            .string({
                required_error: tl('validation.required').value,
            })
            .min(1, tl('validation.invalid').value)

        return {
            name,
            type: 'text',
            value,
            validation: required ? validation : validation.optional(),
        }
    }

    const emailField = (name: string, value?: string, required?: boolean) => {
        const validation = z
            .string({
                required_error: tl('validation.required').value,
            })
            .email()

        return {
            name,
            type: 'text',
            value,
            validation: required ? validation : validation.optional(),
        }
    }

    const passwordField = (name: string, value?: string, required?: boolean) => {
        const validation = z
            .string({
                required_error: tl('validation.required').value,
            })
            .min(8, tl('validation.invalid').value)

        return {
            name,
            type: 'password',
            value,
            validation: required ? validation : validation.optional(),
        }
    }

    return {
        textField,
        emailField,
        passwordField,
    }
}
