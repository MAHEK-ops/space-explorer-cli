export function validateNumber(value: string, name: string) {

    const num = parseInt(value)

    if (isNaN(num) || num <= 0) {
        throw new Error(`${name} must be a positive number`)
    }

    return num
}