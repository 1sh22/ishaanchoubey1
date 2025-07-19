import { experiences, externals, leadershipExperiences } from "@/constant/data";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import OpenForRolesNotice from "./OpenForRolesNotice";

export const metadata: Metadata = {
  title: `${externals.name} . about`,
};

export default function AboutPage() {
  return (
    <main className="mt-8 min-h-[calc(100vh_-_132px)] ">
      <h2 className="text-xl md:text-2xl font-medium">Work</h2>
      <span className="mt-5 h-0 block" />
      <p className="text-muted-foreground">
        I write code to solve problems, collaborating with startups to create impact and sharpen my skills in the process. My semicolons bring more drama than a soap opera.
      </p>
      <span className="mt-9 h-0 block" />
<OpenForRolesNotice />
      {experiences.map((ex, index) => (
        <div className="mb-8" key={`ex-${index}`}>
          <h2 className="text-xl font-medium">{ex.companyName}</h2>
          <p className="md:text-base text-muted-foreground">{ex.location}</p>
          <div className="md:pl-8 positions mt-4">
            {ex.positions.map((p, i) => (
              <div className="mt-4" key={`position-${i}`}>
                <h3 className="md:text-lg">{p.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {p.fromToTill} ({p.type})
                </p>
                {p.notes &&
                  p.notes.length > 0 &&
                  p.notes.map((note, ii) => (
                    <p
                      key={`note-${ii}`}
                      className={cn(
                        "text-sm mt-3 list-item ml-3 text-muted-foreground",
                        i > 0 && ""
                      )}
                    >
                      {note}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      

      <h2 className="text-xl md:text-2xl font-medium mt-12">Leadership</h2>
      <span className="mt-5 h-0 block" />

      {leadershipExperiences.map((ex, index) => (
        <div className="mb-8" key={`leadership-ex-${index}`}>
          <h2 className="text-xl font-medium">{ex.companyName}</h2>
          <p className="md:text-base text-muted-foreground">{ex.location}</p>
          <div className="md:pl-8 positions mt-4">
            {ex.positions.map((p, i) => (
              <div className="mt-4" key={`leadership-position-${i}`}>
                <h3 className="md:text-lg">{p.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {p.fromToTill} ({p.type})
                </p>
                {p.notes &&
                  p.notes.length > 0 &&
                  p.notes.map((note, ii) => (
                    <p
                      key={`leadership-note-${ii}`}
                      className={cn(
                        "text-sm mt-3 list-item ml-3 text-muted-foreground",
                        i > 0 && ""
                      )}
                    >
                      {note}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}