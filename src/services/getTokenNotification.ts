import * as Notifications from 'expo-notifications';


export async function getTokenNotification() {
    const { granted } = await Notifications.getPermissionsAsync();

    if (!granted) {
        await Notifications.requestPermissionsAsync();
    }
    
    if (granted) {
        const token = await Notifications.getExpoPushTokenAsync();
        return token.data;
    }
}