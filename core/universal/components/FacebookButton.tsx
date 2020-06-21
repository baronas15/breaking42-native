import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-native-elements'
import { AccessToken, LoginManager } from 'react-native-fbsdk'

export const useFacebookLogin = (
  onLogin: Function,
): [AccessToken | null, boolean, Function] => {
  const [init, setInit] = useState(false)
  const [data, setData] = useState<AccessToken | null>(null)

  useEffect(() => {
    AccessToken.getCurrentAccessToken().then(token => {
      if (token && token.accessToken) {
        setData(token)
      }
      setInit(true)
    })

    return () => {}
  }, [])

  const setLogIn = (state: boolean) => {
    if (state) {
      LoginManager.logInWithPermissions(['public_profile'])
        .then(result => {
          if (!result.isCancelled) {
            AccessToken.getCurrentAccessToken().then(token => {
              setData(token)
              onLogin(token)
            })
          }
        })
        .catch(error => {
          console.log('Login fail with error: ' + error)
        })
    } else {
      LoginManager.logOut()
      setData(null)
    }
  }

  return [data, init, setLogIn]
}

export const FacebookLoginButton = ({ setLogIn }: { setLogIn: Function }) => {
  return (
    <SocialIcon
      title="Sign In With Facebook"
      button
      type="facebook"
      onPress={() => setLogIn(true)}
    />
  )
}

export const FacebookLogoutButton = ({ setLogIn }: { setLogIn: Function }) => {
  return (
    <SocialIcon
      style={{ flex: 1 }}
      title="Logout"
      button
      type="facebook"
      onPress={() => setLogIn(false)}
    />
  )
}
