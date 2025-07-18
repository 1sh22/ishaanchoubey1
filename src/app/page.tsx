import BlogRow from "@/components/custom/blog-row";
import Project from "@/components/custom/project";
import { externals, projects } from "@/constant/data";
import { parseDate } from "@/lib/utils";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
  const images = [
    "/images/photo1.jpeg",
    "/images/photo2.jpeg",
    "/images/photo3.jpeg",
    "/images/photo4.jpeg",
    "/images/photo5.jpeg",
    "/images/photo6.jpeg",
  ];

  return (
    <main className="mt-8 min-h-[calc(100vh_-_132px)]">
      <h2 className="text-xl md:text-2xl font-medium">Hi there,</h2>
      <span className="mt-5 h-0 block" />
      <p className="text-muted-foreground">
        I&apos;m{" "}
        <b className="font-normal text-secondary-foreground">
          Ishaan Choubey,{" "}
        </b>
        a developer based in{" "}
        <b className="font-normal text-secondary-foreground"> Bengaluru, India.</b> I work with code and sometimes write about things I&apos;m interested in (Mostly tech and startups)
      </p>
      <span className="mt-5 h-0 block" />

      <span className="mt-12 h-0 block" />
      <h2 className="text-lg md:text-xl font-medium">Projects</h2>
      <span className="mt-5 h-0 block" />
      <div className="grid justify-between gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Project {...project} key={`proj-${i}`} />
        ))}
      </div>
      <span className="mt-12 h-0 block" />
      <h2 className="text-lg md:text-xl font-medium">Blogs</h2>
      <span className="mt-3 h-0 block" />
      {allBlogs
        .filter((blog) => blog.published)
        .slice(0, 2)
        .sort((a, b) => parseDate(b.date) - parseDate(a.date))
        .map((blog) => (
          <BlogRow
            date={blog.date}
            slug={blog._raw.flattenedPath}
            title={blog.title}
            key={blog._id}
          />
        ))}
      {allBlogs.length > 5 && (
        <BlogRow date="" slug="blog" title="All posts ↗" />
      )}

      {/* Horizontal Scrollable Section */}
      <section className="mt-12">
  <h2 className="text-lg md:text-xl font-medium mb-4">Shots</h2>
  <div className="flex gap-6 overflow-x-auto scrollbar-hide">
    {images.map((src, index) => (
      <div
        key={index}
        className="min-w-[200px] h-[200px] bg-gray-200 rounded-md flex-shrink-0 overflow-hidden"
      >
        <img
          src={src}
          alt={`Gallery Image ${index + 1}`}
          className="w-[200px] h-[200px] object-cover rounded-md"
        />
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
