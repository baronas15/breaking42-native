import { ChangeRoute } from './Router.actions'
import { IRouterAction } from './Router.interface'
import RouterReducer from './Router.reducer'

describe('Calendar', () => {
  describe('reducer', () => {
    it('should cover default state', () => {
      expect(RouterReducer(undefined, {} as any)).toMatchInlineSnapshot(`
        Object {
          "route": "NONE",
        }
      `)
    })

    it('should cover CHANGE_ROUTE', () => {
      const action: IRouterAction = ChangeRoute('newRoute') as IRouterAction

      const result = RouterReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "params": undefined,
          "route": "newRoute",
        }
      `)
    })
  })
})
