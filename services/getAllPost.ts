import { User, Post, UserPost } from '../constants/type'; // Adjust import path if needed
import axiosInstance from '../utils/axiosConfig';
import { fetchUser } from './getUser';

// Fetch all posts and user info concurrently
export const fetchAllPosts = async (page: number, limit: number): Promise<UserPost[]> => {
  try {
    const skip = page * limit;

    // Step 1: Fetch posts
    const { data } = await axiosInstance.get('/posts', {
      params: { skip, limit },
    });

    const posts = data.posts as Post[]; // Explicitly type posts

    // Step 2: Extract user IDs from posts
    const userIds: number[] = [...new Set(posts.map((post: Post) => post.userId))];

    // Step 3: Fetch user info for all unique user IDs concurrently
    const usersPromises: Promise<User>[] = userIds.map((userId: number) => fetchUser(userId));
    const users: User[] = await Promise.all(usersPromises);

    // Step 4: Create a map of userId to user data
    const userMap: Map<number, User> = new Map(users.map(user => [user.id, user]));

    const combinedPosts: UserPost[] = posts.map((post: Post) => ({
      post: post,
      user: userMap.get(post.userId) as User,
      total: data.total,
    }));

    return combinedPosts;
  } catch (error) {
    console.error('Error fetching posts and users:', error);
    throw error;
  }
};
