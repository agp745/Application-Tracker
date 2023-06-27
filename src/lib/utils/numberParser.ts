
export const numberParser = (str: string): number => {
    if (str.includes(',')) {
        return parseFloat(str.replace(',', ''))
    }
    return parseFloat(str)
}