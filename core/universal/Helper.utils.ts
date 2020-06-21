export const isArrayEmpty = <T>(array: T[]) => {
  return !array || !array.length
}

export function wrap(wrapRange: number, index: number) {
  return index >= 0
    ? index % wrapRange
    : ((index % wrapRange) + wrapRange) % wrapRange
}

export const percentOf = (percentage: number, number: number) =>
  (percentage * number) / 100

export const delay = (time: number) => (result: any) =>
  new Promise(resolve => setTimeout(() => resolve(result), time))

export function promiseSequentially<T>(array: (() => Promise<T>)[]) {
  return array.reduce(
    (promises: Promise<T | void>, currentPromise: () => Promise<T | void>) =>
      promises.then(currentPromise),
    Promise.resolve(),
  )
}

export function arrayMatches<T>(arr1: T[], arr2: T[]): boolean {
  return arr1 && arr2 && arr1.some(x => arr2.some(y => x === y))
}

// https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm
export function shuffle<T>(a: T[]) {
  const data = a
  let j
  let x
  let i

  for (i = data.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = data[i]
    data[i] = data[j]
    data[j] = x
  }

  return data
}
