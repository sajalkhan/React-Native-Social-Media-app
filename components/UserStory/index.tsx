import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './style';

interface UserStoryProps {
  userImg: string;
  userName: string;
}

const UserStory: React.FC<UserStoryProps> = ({ userImg, userName }) => {
  return (
    <View style={styles.userItem}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: userImg }} style={styles.userImage} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.userName} numberOfLines={1}>
          {userName}
        </Text>
      </View>
    </View>
  );
};

export default UserStory;
