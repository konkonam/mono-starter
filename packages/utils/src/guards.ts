/**
 * Checks if a value is undefined
 *
 * @param value
 */
export const isUndefined = (value: unknown): value is undefined => value === undefined

/**
 * Checks if a value is null
 *
 * @param value
 */
export const isNull = (value: unknown): value is null => value === null

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
export const isNumber = (value: unknown): value is Number => typeof value === 'number'

/**
 * Checks if a value is a string
 *
 * @param value
 */
export const isString = (value: unknown): value is String => typeof value === 'string'

/**
 * Checks if a value is a boolean
 *
 * @param value
 */
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

/**
 * Checks if a value is an object
 *
 * @param value
 */
export const isObject = (value: unknown): value is Object => typeof value === 'object'

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
export const isFunction = (value: unknown): value is Function => typeof value === 'function'