// pages/index.tsx
import { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold">Post List</h1>
      <PostList posts={posts} />
    </div>
  );
}
