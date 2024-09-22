import React from 'react';
import { Text } from 'react-native';
import style from './styles';

interface ProfileTabTitleProps {
  title: string;
  isFocused: boolean;
}

const ProfileTabTitle: React.FC<ProfileTabTitleProps> = ({ title, isFocused }) => {
  return <Text style={[style.title, !isFocused && style.titleNotFocused]}>{title}</Text>;
};

export default ProfileTabTitle;
