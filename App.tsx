import { Background } from './src/components/Background'
import { StatusBar } from 'react-native'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'
import './src/services/notifications'
import './src/services/getTokenNotification'
// import { Subscription } from 'expo-modules-core'
// import * as Notifications from 'expo-notifications';
// import { useRef, useEffect } from 'react'
// import { getTokenNotification } from './src/services/getTokenNotification'




export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  // const getNotificationListener = useRef<Subscription>();
  // const responseNotificationListener = useRef<Subscription>();

  // useEffect(() => {
  //   getTokenNotification()
  // }, [])

  // useEffect(() => {
  //   getNotificationListener.current = Notifications.addNotificationReceivedListener( notifications => {

  //   })

  //   responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener( response => {
        
  //   })

  //   return () => {
  //     if(getNotificationListener.current && responseNotificationListener.current) {
  //       Notifications.removeNotificationSubscription(getNotificationListener.current)
  //       Notifications.removeNotificationSubscription(responseNotificationListener.current)
  //     }
  //   }
  // }, [])

  return (
    <Background>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent 
      />

      { fontsLoaded ? <Routes /> : <Loading />}
    
    </Background>
  )
}