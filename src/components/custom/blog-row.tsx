"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogRowProps {
  title: string;
  slug: string;
  date: string;
}

export default function BlogRow({ slug, title, date }: BlogRowProps) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobile) {
      window.scrollTo(0, 0);
      setTimeout(() => router.push(`/blog/${slug}`), 0);
    } else {
      router.push(`/blog/${slug}`);
    }
  };

  return (
    <motion.a
      href={`/blog/${slug}`}
      onClick={handleClick}
      className="text-muted-foreground flex flex-col justify-between hover:text-secondary-foreground py-3 md:flex-row gap-1"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <h3 className="md:border-b-2 md:max-w-none">
        {title}
      </h3>
      <span className="text-[15px] capitalize">{date.toLowerCase()}</span>
    </motion.a>
  );
}
