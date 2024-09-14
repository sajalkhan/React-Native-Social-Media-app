import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import style from './style';

interface NotificationProps {
  message: number;
}

const Notification: React.FC<NotificationProps> = ({message}) => {
  return (
    <TouchableOpacity style={style.notification}>
      <FontAwesomeIcon icon={faEnvelope} style={style.icon} size={20} />
      {message ? <Text style={style.messageContainer}>{message}</Text> : null}
    </TouchableOpacity>
  );
};

export default Notification;
