/**
 * Checks if a value is undefined
 *
 * @param value
 */
export const isUndefined = (value: unknown) => value === undefined

/**
 * Checks if a value is null
 *
 * @param value
 */
export const isNull = (value: unknown) => value === null

/**
 * Checks if a value is empty string
 *
 * @param value
 */
export const isEmptyStr = (value: unknown) => value === ''

/**
 * Checks if a value is not undefined, null or an empty string
 *
 * @param value
 */
export const isValid = (value: unknown) => {
    return (!isUndefined(value) && !isNull(value) && !isEmptyStr(value))
}

/**
 * Checks if a value is a number
 *
 * @param value
 */
export const isNumber = (value: unknown) => typeof value === 'number'

/**
 * Checks if a value is a string
 *
 * @param value
 */
export const isString = (value: unknown) => typeof value === 'string'

/**
 * Checks if a value is a boolean
 *
 * @param value
 */
export const isBoolean = (value: unknown) => typeof value === 'boolean'

/**
 * Checks if a value is an object
 *
 * @param value
 */
export const isObject = (value: unknown) => typeof value === 'object'

/**
 * Checks if a value is an array
 *
 * @param value
 */
export const isArray = (value: unknown) => Array.isArray(value)

/**
 * Checks if a value is a function
 *
 * @param value
 */
export const isFunction = (value: unknown) => typeof value === 'function'