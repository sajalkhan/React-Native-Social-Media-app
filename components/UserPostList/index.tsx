import React from 'react';
import { View, FlatList } from 'react-native';
import UserPost from '../UserPost';
import FooterLoader from '../FooterLoader';
import styles from './styles';

interface UserPostsListProps {
  posts: {
    post: {
      id: number;
      title: string;
    };
    user: {
      username: string;
      image: string;
    };
  }[];
  loadPosts: () => Promise<void>;
  postLoading: boolean;
  loadingUserStory: boolean;
  hasMorePost: boolean;
}

const UserPostsList: React.FC<UserPostsListProps> = React.memo(
  ({ posts, loadPosts, postLoading, loadingUserStory, hasMorePost }) => (
    <View style={styles.userPostWrapper}>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.post.id}`}
        renderItem={({ item }) => (
          <UserPost userName={item.user.username} userImg={item.user.image} title={item.post.title} />
        )}
        onEndReached={hasMorePost && !postLoading ? loadPosts : undefined}
        onEndReachedThreshold={0.5}
        ListFooterComponent={postLoading && !loadingUserStory ? <FooterLoader /> : null}
      />
    </View>
  )
);

export default UserPostsList;
