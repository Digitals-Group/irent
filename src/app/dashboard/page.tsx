import { postService } from '@/services/post.service';

export default async function Dashboard() {
  const posts = await postService.getPosts();
  return <div>{posts.map((elem) => elem.id)}</div>;
}
