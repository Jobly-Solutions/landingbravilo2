import type { BlogPost } from "./get-blog-posts"
import { getAllBlogPosts } from "./get-blog-posts"

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}
