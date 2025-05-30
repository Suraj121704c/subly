import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee, {
  AndroidImportance,
  AndroidStyle,
  AndroidVisibility,
  Notification,
  NotificationAndroid,
  NotificationIOS,
} from '@notifee/react-native';
import {Platform} from 'react-native';

export async function notificationPermission() {
  await notifee.requestPermission({
    alert: true,
    badge: true,
    sound: true,
    carPlay: true,
    announcement: true,
  });
  const fcmToken = await messaging().getToken();
  console.log('FCM Token: ', fcmToken);
}

export async function createChannels() {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    badge: true,
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
  });
  return channelId;
}

export async function onMessageReceived(
  message: FirebaseMessagingTypes.RemoteMessage,
) {
  console.log(Platform.OS, 'New Notification Message: ', message);
  const data = message.data;
  // MARK: - Notifee data is exist
  if (data?.notifee) {
    let notifeeData =
      typeof data?.notifee === 'object'
        ? data?.notifee
        : JSON.parse(data?.notifee);
    notifee.displayNotification(notifeeData);
    return;
  }
  // MARK: - Notifee data is not exist fallback to notification data
  let {title, body, image, ios, android} = message.notification ?? {};
  if (
    typeof data?.fcm_options === 'object' &&
    (data.fcm_options as any).image
  ) {
    image = (data.fcm_options as any).image as string;
  }

  type PlatformType = {
    android?: NotificationAndroid;
    ios?: NotificationIOS;
  };

  const platform: PlatformType | undefined = Platform.select({
    ios: {
      ios: {
        attachments: image ? [{url: image}] : [],
        interruptionLevel: 'timeSensitive',
        badgeCount: Number(ios?.badge ?? '0'),
      },
    },
    android: {
      android: {
        channelId: 'default',
        badgeCount: android?.count ?? 0,
        // largeIcon: android?.imageUrl,
        style: android?.imageUrl
          ? {
              type: AndroidStyle.BIGPICTURE,
              picture: android?.imageUrl,
            }
          : undefined,
      },
    },
  });

  const notification: Notification = {
    title: title,
    subtitle: ios?.subtitle,
    body: body,
    ...platform,
    data,
  };
  // console.log(`Notification Payload(${Platform.OS}) ==> `, notification);
  notifee.displayNotification(notification);
}
