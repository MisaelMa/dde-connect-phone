import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  AppState,
  View,
} from 'react-native';
import RNAndroidNotificationListener from 'react-native-android-notification-listener';

interface NotificationList {
  app: string;
  text: string;
  title: string;
}

interface amir {
  list: NotificationList[];
}

const Stack = createStackNavigator();
const Notification = () => {
  const [hasPermission, setHasPermission] = useState(false);
  //const [lastNotification, setLastNotification] = useState(null);
  const [lastNotification, setLastNotification] = useState<amir>({
    list: [],
  });

  const handleOnPressPermissionButton = async () => {
    RNAndroidNotificationListener.requestPermission();
  };


  const handleAppStateChange = async () => {
    RNAndroidNotificationListener.getPermissionStatus().then((status: any) => {
      setHasPermission(status !== 'denied');
    });
  };

  const handleNotificationReceived = (notification: NotificationList) => {
    console.log(notification);
    setLastNotification((prevState) => ({
      list: [...prevState.list, notification],
    }));
  };

  useEffect(() => {
    console.log('amir', RNAndroidNotificationListener);
    RNAndroidNotificationListener.getPermissionStatus().then((status: any) => {
      setHasPermission(status !== 'denied');
    });

    RNAndroidNotificationListener.onNotificationReceived(
      handleNotificationReceived,
    );

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[
          styles.permissionStatus,
          {color: hasPermission ? 'green' : 'red'},
        ]}>
        {hasPermission
          ? 'Allowed to handle notifications'
          : 'NOT allowed to handle notifications'}
      </Text>
      <Button
        title={'Open Configuration'}
        onPress={handleOnPressPermissionButton}
      />
      {lastNotification && lastNotification.list.map((item) => (
        <View style={styles.notification}>
          <Text style={styles.notificationTitle}>Last Notification</Text>
          <Text>{item.app}</Text>
          <Text>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionStatus: {
    marginBottom: 20,
    fontSize: 18,
  },
  notification: {
    width: 200,
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginTop: 20,
    borderRadius: 5,
    elevation: 2,
  },
  notificationTitle: {
    fontWeight: 'bold',
  },
});

export default Notification;
