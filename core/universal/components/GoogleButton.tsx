import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin'
import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-native-elements'

import { SpinnerView } from './SpinnerView'

// DO Later: Google login button, action, reducer
const useGoogleLogin = (onLogin: Function): [any | null, boolean, Function] => {
  const [init, setInit] = useState(false)
  const [data, setData] = useState<any | null>(null)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '926047332817-8jglss96bg3s6b1nunonlclbpkm1lk3o.apps.googleusercontent.com',
    })

    GoogleSignin.getCurrentUser().then(response => {
      if (response) {
        setData(response)
      }
      setInit(true)
    })
  }, [])

  const setLogIn = (state: boolean) => () => {
    if (state) {
      async function signIn() {
        try {
          await GoogleSignin.hasPlayServices()
          const userInfo = await GoogleSignin.signIn()
          // log(userInfo)

          setData({ userInfo })
          onLogin(userInfo)
        } catch (error) {
          // log(JSON.stringify(error))
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      }

      signIn()
    } else {
      async function signOut() {
        await GoogleSignin.revokeAccess()
        await GoogleSignin.signOut()
      }
      signOut().then(() => {
        setData(null)
      })
    }
  }

  return [data, init, setLogIn]
}

const GoogleLoginButton = ({ setLogIn }: { setLogIn: Function }) => {
  return (
    <SocialIcon
      title="Sign In With Google"
      button
      type="google"
      onPress={setLogIn(true)}
    />
  )
}

const GoogleLogoutButton = ({ setLogIn }: { setLogIn: Function }) => {
  return (
    <SocialIcon title="Logout" button type="google" onPress={setLogIn(false)} />
  )
}

const GoogleLogin = ({ onLogin }: { onLogin: Function }) => {
  const [data, init, setLogIn] = useGoogleLogin(onLogin)

  if (!init) {
    return <SpinnerView />
  }

  if (!data) {
    return <GoogleLoginButton setLogIn={setLogIn} />
  } else {
    return <GoogleLogoutButton setLogIn={setLogIn} />
  }
}

export default GoogleLogin
