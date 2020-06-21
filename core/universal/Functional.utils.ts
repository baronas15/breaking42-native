import S from 'sanctuary'
import $ from 'sanctuary-def'

export interface Maybe<A> {
  constructor: {
    '@@type': 'sanctuary/Maybe'
  }
}

export const getString = S.get(S.is($.String))
export const pipe = S.pipe
export const find = S.find
export const fromMaybe = S.fromMaybe
export const prepend = S.prepend
export const isJust = S.isJust
export const map = S.map
export const equals = S.equals
export const filter = S.filter
export const groupBy = S.groupBy
export const sum = S.sum
export const reduce = S.reduce
export const chain = S.chain
export const range = S.range
export const reverse = S.reverse
export const Just = S.Just
export const id = S.id
