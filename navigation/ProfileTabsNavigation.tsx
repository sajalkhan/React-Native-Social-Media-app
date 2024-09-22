import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileTabTitle from '../components/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent';

const ProfileTabs = createMaterialTopTabNavigator();

//INFO: If we need to load different component to different tab then we can update component from here
const tabComponents: any = {
  Photos: ProfileTabContent,
  Videos: ProfileTabContent,
  Saved: ProfileTabContent,
};

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
        const Component = tabComponents[tabTitle];

        return (
          <ProfileTabs.Screen
            key={key}
            name={key}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarLabel: ({ focused }) => <ProfileTabTitle isFocused={focused} title={tabTitle} />,
            }}
            component={Component}
          />
        );
      })}
    </ProfileTabs.Navigator>
  );
};

export default ProfileTabsNavigation;
