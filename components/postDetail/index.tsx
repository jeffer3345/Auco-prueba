import React from "react";
import styles from "./styles.module.css";
import { PostCommentsType, PostType } from "@/shared";

// Define un tipo para la prop 'post'
const PostDetail: React.FC<{
  post: PostType;
  comments: PostCommentsType[];
}> = ({ post, comments }) => {
  return (
    <div className={styles.myStyles}>
      <h1 className="text-2xl font-semibold text-center p-2">{post.title}</h1>
      <p>{post.body}</p>
      <h2 className="text-xl text-blue-500 mt-4 text-center p-4">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
