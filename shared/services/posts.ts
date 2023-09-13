import axios from "axios";
import { PostCommentsType, PostType } from "..";

export const getPostsService = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.data) {
      return null;
    }
    return response.data as PostType[];
  } catch (error) {
    return null;
  }
};

export const getPostsById = async (
  postId: string
): Promise<{
  postInformation: PostType | null;
  postComments: PostCommentsType[];
}> => {
  try {
    const postInformation = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!postInformation.data) {
      return {
        postInformation: null,
        postComments: [],
      };
    }

    const postComments = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    return {
      postInformation: postInformation.data,
      postComments: postComments.data,
    };
  } catch {
    return {
      postInformation: null,
      postComments: [],
    };
  }
};
