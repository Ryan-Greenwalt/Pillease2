// NotificationButton.js
import { schedulePushNotification } from '../../App';

export function scheduleNotification() {
  schedulePushNotification();
}


// import React from 'react';
// import { Button } from 'react-native';
// import { schedulePushNotification } from '../../App';

// const NotificationButton = () => {
//   const handleScheduleNotification = async () => {
//     await schedulePushNotification();
//   };

//   return (
//     <Button
//       title="Schedule Notification"
//       onPress={handleScheduleNotification}
//     />
//   );
// };

// export default NotificationButton;
