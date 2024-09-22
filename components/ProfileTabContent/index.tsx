import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import style from './styles';

const images = Array(10).fill(require('../../assets/images/default_post.png'));

const ProfileTabContent: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        {images.map((source, index) => (
          <Image key={index} resizeMode="contain" style={style.image} source={source} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
