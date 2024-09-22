import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';

import Title from './components/Title';
import Notification from './components/Notification';
import FooterLoader from './components/FooterLoader';
import UserStory from './components/UserStory';
import UserPost from './components/UserPost';

import useGetAllUsers from './hooks/useGetAllUsers';
import useGetAllPosts from './hooks/useGetAllPosts';

import globalStyle from './assets/styles/globalStyle';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
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
    <NavigationContainer>
      <SafeAreaView style={globalStyle.homePage}>
        <StatusBar backgroundColor={'blue'} barStyle={'light-content'} />
        <View style={globalStyle.titleWrapper}>
          <Title>Let’s Explore</Title>
          <Notification message={2} />
        </View>

        <View style={globalStyle.userStoryWrapper}>
          <FlatList
            data={users}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}-${item.username}`}
            renderItem={({ item }) => <UserStory userImg={item.image} userName={item.username} />}
            onEndReached={hasMore && !loading ? loadMore : undefined}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <FooterLoader /> : null}
          />
        </View>

        <FlatList
          data={posts}
          style={globalStyle.userPostWrapper}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.post.id}`}
          renderItem={({ item: { user, post } }) => (
            <UserPost userName={user.username} userImg={user.image} title={post.title} />
          )}
          onEndReached={hasMorePost && !postLoading ? loadPosts : undefined}
          onEndReachedThreshold={0.5}
          ListFooterComponent={postLoading ? <FooterLoader /> : null}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
