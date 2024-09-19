import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './style';

interface UserStoryProps {
  userImg: string;
  userName: string;
  title: string;
}

const UserPost: React.FC<UserStoryProps> = ({ userImg, userName, title }) => {
  return (
    <View style={styles.userPostWrapper}>
      <View style={styles.userInfo}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: userImg }} style={styles.userImage} resizeMode="cover" />
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <Image source={{ uri: userImg }} style={styles.userPostImage} resizeMode="cover" />
    </View>
  );
};

export default UserPost;
