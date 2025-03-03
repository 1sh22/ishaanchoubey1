import { Links, externals } from "@/constant/data";
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
      Whether it&apos;s brainstorming projects or just a casual chat, I&apos;m always up for a good conversation. If you&apos;re in {" "} <b className="font-normal text-secondary-foreground">Bengaluru</b> and wanna collaborate or chat over coffee, hmu!
      <br />
      Let&apos;s connect beyond just {" "}
        <b className="font-normal text-secondary-foreground">work</b>!
        
      </p>
      <span className="mt-12 h-0 block" />
      <h2 className="text-lg font-medium text-muted-foreground">
        Write me anything at:
      </h2>
      <Link
        href={Links.email}
        className="text-lg tooltip"
        aria-label="Example "
      >
        {Links.email.replace("mailto:", "")}
      </Link>

    </main>
  );
}
