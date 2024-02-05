type CccProps = (
  | string
  | number
  | null
  | undefined
  | boolean
  | { [key: string]: any }
  | (string | number | { [key: string]: any })[]
)[]

export function ccc(...arr: CccProps): string {
  // 1. Base case:
  if (!arr.length) return '' // {1}

  // 2. Recursive case:
  return arr
    .reduce((acc: any[], item: any) => {
      if (item && isStringOrNumber(item)) {
        return acc.concat(item)
      } else if (isArray(item)) {
        // {2}
        return acc.concat(ccc(...item))
      } else if (isObject(item)) {
        return acc.concat(extractTruthyObjectPropertyNames(item))
      }
      return acc
    }, [])
    .join(' ')
}

export const extractTruthyObjectPropertyNames = (obj: any) => {
  // 1. remove any properties with falsy values
  // 2. concatenate the keys of the remaining properties
  // 3. join the keys as a space case string
  return Object.entries(obj)
    .filter(([, val]) => !!val) // {1}
    .reduce(
      (
        acc: string[],
        [key, val]: [string, any], // {2}
      ) => (!!val ? acc.concat([key]) : acc),
      [],
    )
    .join(' ') // {3}
}

export const isString = (item: any): item is string => typeof item === 'string'
export const isNumber = (item: any): item is number => typeof item === 'number'

export const isStringOrNumber = (item: any): item is string | number =>
  isString(item) || isNumber(item)

export const isObject = (item: any): item is { [key: string]: any } =>
  typeof item === 'object' && item?.constructor === Object

export const isArray = (item: any): item is any[] => Array.isArray(item)
