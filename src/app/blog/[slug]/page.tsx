"use client";

import EmptyPlaceholder from "@/components/custom/empty-placeholder";
import { cn } from "@/lib/utils";
import { Blog, allBlogs } from "contentlayer/generated";
import { ArrowLeft, NotebookPen } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allBlogs.find((post: Blog) => post._raw.flattenedPath === params.slug);
  const MDXContent = useMDXComponent(post?.body.code || "");

  if (!post) {
    return notFound();
  }

  if (post.published === false) {
    return (
      <EmptyPlaceholder
        className={cn("border-none h-[calc(100vh_-_100px)]")}
        title="Post is not published yet."
        icon={<NotebookPen size={50} />}
        description={"Please check back later."}
      />
    );
  }

  return (
    <>
      <header className="flex justify-between items-center py-3.5 sticky top-0 bg-background">
        <Link
          href={"/blog"}
          className="text-base font-medium text-muted-foreground flex items-center gap-1 hover:text-secondary-foreground"
        >
          <ArrowLeft size={20} /> Back
        </Link>
        <span className="text-base capitalize text-muted-foreground font-medium">
          {post.date}
        </span>
      </header>

      <main className="mt-4 min-h-[calc(100vh_-_168px)]">
        <h1 className="text-xl md:text-2xl font-medium mb-8">{post.title}</h1>
        <article className="blog-content">
          <MDXContent />
        </article>
      </main>
    </>
  );
};

export default PostLayout;