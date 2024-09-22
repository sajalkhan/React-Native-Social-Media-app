import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileTabTitle from '../components/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent';

const ProfileTabs = createMaterialTopTabNavigator();

const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'transparent' },
        tabBarStyle: { zIndex: 0, elevation: 0 },
      }}
    >
      {['Photos', 'Videos', 'Saved'].map((tabTitle, index) => {
        const key = `Tab${index + 1}`;
        return (
          <ProfileTabs.Screen
            key={key}
            name={key}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarLabel: ({ focused }) => <ProfileTabTitle isFocused={focused} title={tabTitle} />,
            }}
            component={ProfileTabContent}
          />
        );
      })}
    </ProfileTabs.Navigator>
  );
};

export default ProfileTabsNavigation;
