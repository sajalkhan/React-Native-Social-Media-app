import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import style from './styles';

type ProfileProps = {
  navigation: NativeStackNavigationProp<any, 'Profile'>;
};

const Profile = ({ navigation }: ProfileProps) => (
  <SafeAreaView style={style.profilePage}>
    <View style={style.profilePageWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={style.goBack}>Go Back</Text>
      </TouchableOpacity>
      <Text>Welcome to profile page</Text>
    </View>
  </SafeAreaView>
);

export default Profile;
