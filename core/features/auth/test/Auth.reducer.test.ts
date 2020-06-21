import { LOGIN, LOGOUT } from '../Auth.constants'
import { ILoginAction, ILogoutAction } from '../Auth.interface'
import AuthReducer from '../Auth.reducer'

describe('Auth', () => {
  describe('reducer', () => {
    it('should cover default state', () => {
      expect(AuthReducer(undefined, {} as any)).toMatchInlineSnapshot(
        `Object {}`,
      )
    })

    it('should cover LOGIN', () => {
      const action: ILoginAction = {
        type: LOGIN,
        data: {
          loginToken: 'loginToken',
        },
      }

      const result = AuthReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "loginToken": "loginToken",
        }
      `)
    })

    it('should cover LOGOUT', () => {
      const action: ILogoutAction = {
        type: LOGOUT,
      }

      const result = AuthReducer(
        {
          loginToken: 'loginToken',
        },
        action,
      )

      expect(result).toMatchInlineSnapshot(`Object {}`)
    })
  })
})
