import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import Title from './components/Title';
import Notification from './components/Notification';
import FooterLoader from './components/FooterLoader';
import UserStory from './components/UserStory';
import UserPost from './components/UserPost';

import useGetAllUsers from './hooks/useGetAllUsers';
import useGetAllPosts from './hooks/useGetAllPosts';

import globalStyle from './assets/globalStyle';

const App = () => {
  const { users, loading, error, loadMore, hasMore } = useGetAllUsers();
  const { posts, postLoading, hasMorePost, loadPosts } = useGetAllPosts();

  if (error) {
    return <Text style={globalStyle.error}>{error}</Text>;
  }

  return (
    <SafeAreaView style={globalStyle.homePage}>
      <View style={globalStyle.titleWrapper}>
        <Title>Let’s Explore </Title>
        <Notification message={2} />
      </View>

      <FlatList
        data={users}
        horizontal={true}
        style={globalStyle.userStoryWrapper}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}-${item.username}`}
        renderItem={({ item }) => <UserStory userImg={item.image} userName={item.username} />}
        onEndReached={hasMore && !loading ? loadMore : undefined}
        onEndReachedThreshold={0.5} // Trigger load more when scrolled to 50% from the end
        ListFooterComponent={loading ? <FooterLoader /> : null}
      />

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
  );
};

export default App;
