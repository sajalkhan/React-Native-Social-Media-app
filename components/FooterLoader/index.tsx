import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './style';

const FooterLoader = () => (
  <View style={styles.footerContainer}>
    <ActivityIndicator size="large" color="#F35BAC" />
  </View>
);

export default FooterLoader;
