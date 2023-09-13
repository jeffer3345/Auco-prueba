"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PostDetail from "../../../components/postDetail";

export default function PostDetailPage({
  params,
}: {
  params: { postId: string };
}) {
  const postId = params.postId;
  const [post, setPost] = useState<{
    id: number;
    title: string;
    body: string;
    user: { name: string };
  } | null>(null);
  const [comments, setComments] = useState<{ id: number; body: string }[]>([]);

  useEffect(() => {
    if (postId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
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
      {post && comments && (
        <div className="bg-white text-black mt-2 p-2 sm:p-4 md:p-6 lg:p-8 rounded-md shadow-md">
          {/* Contenido de la tarjeta */}
          <PostDetail post={post} comments={comments} />
        </div>
      )}
    </div>
  );
}
