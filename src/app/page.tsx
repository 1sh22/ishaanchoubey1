import BlogRow from "@/components/custom/blog-row";
import Project from "@/components/custom/project";
import { externals, projects } from "@/constant/data";
import { parseDate } from "@/lib/utils";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
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
        
        <b className="font-normal text-secondary-foreground">
      
        </b>
        
      </p>
      <span className="mt-5 h-0 block" />
      <p className="text-muted-foreground">
        Final year student at
        <b className="font-normal text-secondary-foreground">
          <Link target="_blank" href={externals.compony.site}>
            {" "}
            {externals.compony.name}.{" "}
          </Link>
        </b>
        
      </p>
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
      slug={blog._raw.flattenedPath}  // Use flattenedPath instead of url
      title={blog.title}
      key={blog._id}
    />
  ))}
      {allBlogs.length > 5 && (
        <BlogRow date="" slug="blog" title="All posts ↗" />
      )}
    </main>
  );
}
