import { Button } from "@/components/ui/button";
import { Links, externals } from "@/constant/data";
import { CalendarDays } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${externals.name} . contact`,
};

export default function ContactPage() {
  return (
    <main className="mt-8 min-h-[calc(100vh_-_132px)] ">
      <h2 className="text-xl md:text-2xl font-medium">Say hello,</h2>
      <span className="mt-5 h-0 block" />
      <p className="text-muted-foreground">
      Whether it's brainstorming projects or just a casual chat, I'm always up for a good conversation. Let's connect beyond just {" "}
        <b className="font-normal text-secondary-foreground">work</b>!
        
      </p>
      <span className="mt-12 h-0 block" />
      <h2 className="text-lg font-medium text-muted-foreground">
        Write me anything at:
      </h2>
      <Link
        href={Links.email}
        className="text-lg tooltip"
        aria-label="Keep the subject line purposeful to help prioritize responses. "
      >
        {Links.email.replace("mailto:", "")}
      </Link>

    </main>
  );
}
