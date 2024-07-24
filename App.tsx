import { StatusBar } from 'react-native';
import { OneSignal } from 'react-native-onesignal'

import Toast from 'react-native-toast-message';

OneSignal.initialize("f42fabcd-3a92-4ac0-adc3-4e5e447b61b1")
OneSignal.Notifications.requestPermission(true)

import { Routes } from './src/routes';


export default function App() {

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes/>
      <Toast/>
    </>
    
  );
}

