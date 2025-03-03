import { externals } from "@/constant/data";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | ${externals.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${externals.base_url}/blog/${post._raw.flattenedPath}`,
      authors: [externals.name],
    },
  };
}