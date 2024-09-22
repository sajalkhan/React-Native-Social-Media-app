// UserStoriesList.tsx

import React from 'react';
import { View, FlatList } from 'react-native';
import UserStory from '../UserStory';
import FooterLoader from '../FooterLoader';
import styles from './styles';

interface UserStoriesListProps {
  users: { id: number; username: string; image: string }[];
  loadMore: () => Promise<void>;
  loading: boolean;
  hasMore: boolean;
}

const UserStoriesList: React.FC<UserStoriesListProps> = React.memo(({ users, loadMore, loading, hasMore }) => (
  <View style={styles.userStoryWrapper}>
    <FlatList
      data={users}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => `${item.id}-${item.username}`}
      renderItem={({ item }) => <UserStory userImg={item.image} userName={item.username} />}
      onEndReached={hasMore && !loading ? loadMore : undefined}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <FooterLoader /> : null}
    />
  </View>
));

export default UserStoriesList;
