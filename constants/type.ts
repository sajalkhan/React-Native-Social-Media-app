export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  image: string;
}

type Reactions = {
  likes: number;
  dislikes: number;
};

export interface Post {
  id: number;
  title: string;
  reactions: Reactions;
  views: number;
  userId: number;
  total: number;
}

export interface UserPost {
  post: Post;
  user: User;
  total: number;
}
export interface UserResponse {
  users: User[];
  total: number;
}
