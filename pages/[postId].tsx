// pages/[postId].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostDetail from '../components/PostDetail';

export default function PostDetailPage() {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState<{ id: number; title: string; body: string; user: { name: string } } | null>(null);
  const [comments, setComments] = useState<{ id: number; body: string }[]>([]);

  useEffect(() => {
    if (postId) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [postId]);

  return (
    <div className="container mx-auto py-6">
      {post && comments && <PostDetail post={post} comments={comments} />}
    </div>
  );
}

