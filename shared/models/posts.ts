export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCommentsType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
