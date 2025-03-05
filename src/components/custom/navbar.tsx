import { externals } from "@/constant/data";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="py-3 flex items-center justify-between sticky top-0 bg-background">
      <Link
        href={"/"}
        className="text-xl text-muted-foreground hover:text-foreground"
      >
        {externals.logo_text}
      </Link>

      <ul className="flex items-center gap-1 md:gap-2">
        <li className="text-muted-foreground hover:text-foreground">
          <Link className="flex items-center px-1" href={"/about"}>
            about
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-foreground">
          <Link className="flex items-center" href={"/blog"}>
            blog
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-foreground">
          <Link className="flex items-center" href={"/contact"}>
            contact
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}