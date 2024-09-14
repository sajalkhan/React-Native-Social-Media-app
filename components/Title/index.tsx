import React from 'react';
import {Text} from 'react-native';
import style from './style';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({children}) => {
  return <Text style={style.title}>{children}</Text>;
};

export default Title;
