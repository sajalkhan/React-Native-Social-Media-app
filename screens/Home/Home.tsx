import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import Title from '../../components/Title';
import Notification from '../../components/Notification';
import UserPostsList from '../../components/UserPostList';
import UserStoriesList from '../../components/UserStoryList';

import useGetAllUsers from '../../hooks/useGetAllUsers';
import useGetAllPosts from '../../hooks/useGetAllPosts';
import { Routes } from '../../navigation/Routes';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

type HomeProps = {
  navigation: NativeStackNavigationProp<any, 'Home'>;
};

const Home = ({ navigation }: HomeProps) => {
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('screen')); // check screen dimension

  const { users, loading, error, loadMore, hasMore } = useGetAllUsers();
  const { posts, postLoading, hasMorePost, loadPosts } = useGetAllPosts();

  useEffect(() => {
    const handleDimensionsChange = (result: any) => {
      setScreenDimensions(result.screen);
    };

    const subscription = Dimensions.addEventListener('change', handleDimensionsChange);
    console.log('screen === ', screenDimensions);

    return () => {
      subscription?.remove();
    };
  }, [screenDimensions]);

  if (error) {
    return <Text style={globalStyle.error}>{error}</Text>;
  }

  return (
    <SafeAreaView style={style.homePage}>
      <View style={style.homePageWrapper}>
        <StatusBar backgroundColor={'blue'} barStyle={'light-content'} />
        <TouchableOpacity style={style.titleWrapper} onPress={() => navigation.navigate(Routes.Profile)}>
          <Title>Let’s Explore</Title>
          <Notification message={2} />
        </TouchableOpacity>

        <UserStoriesList users={users} loadMore={loadMore} loading={loading} hasMore={hasMore} />
        <UserPostsList
          posts={posts}
          loadPosts={loadPosts}
          postLoading={postLoading}
          hasMorePost={hasMorePost}
          loadingUserStory={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
