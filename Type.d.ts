declare module 'react-native-android-notification-listener' {
  function getPermissionStatus(): any;

  function onNotificationReceived(callback: any): any;

  function requestPermission(): any;
}
