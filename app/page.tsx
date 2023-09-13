import { getPostsService } from "@/shared";
import PostList from "../components/postList";

export const getInitialProps = () => {};

export default async function Home() {
  const posts = await getPostsService();

  if (!posts) {
    return <p>Not found posts</p>;
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold text-center p-4">Post List</h1>
      <PostList posts={posts} />
    </div>
  );
}
