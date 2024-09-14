import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import Title from './components/Title';
import Notification from './components/Notification';
import FooterLoader from './components/FooterLoader';
import UserStory from './components/UserStory';
import useUsers from './hooks/useUsers';

import globalStyle from './assets/globalStyle';

const App = () => {
  const { users, loading, error, loadMore, hasMore } = useUsers();

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
    </SafeAreaView>
  );
};

export default App;
