import PostDetail from "../../../components/postDetail";
import { getPostsById } from "@/shared";

export default async function PostDetailPage({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;
  const { postComments, postInformation } = await getPostsById(postId);

  if (!postInformation) {
    return <p>No post information found</p>;
  }

  return (
    <div className="container mx-auto py-6">
      {postInformation && postComments && (
        <div className="bg-white text-black mt-2 p-2 sm:p-4 md:p-6 lg:p-8 rounded-md shadow-md">
          {/* Contenido de la tarjeta */}
          <PostDetail post={postInformation} comments={postComments} />
        </div>
      )}
    </div>
  );
}
