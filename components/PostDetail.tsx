// components/PostDetail.tsx
import React from 'react';

// Define un tipo para la prop 'post'
type PostDetailProps = {
  post: { id: number; title: string; body: string; user: { name: string } };
  comments: Array<{ id: number; body: string }>;
};

const PostDetail: React.FC<PostDetailProps> = ({ post, comments }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p>{post.body}</p>
      <h2 className="text-xl mt-4">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
