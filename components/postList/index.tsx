// components/PostList.tsx
"use client"
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css'

// Define un tipo para 'post'
type Post = {
  id: number;
  title: string;
  body: string;
  user?: {
    name: string;
  };
};

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post: Post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className="p-4 border border-gray-300 hover:border-blue-500 rounded-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className={styles.myStyles}>{post.body}</p>
            <p className="text-gray-600">Author: {post.user?.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;

