import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-30"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          github="https://github.com/ahmed27037/Ecommerce-Website"
          href="https://shop-sprint.onrender.com/"
          src="/Ecommerce Website.png"
          title="MERN Stack Eccomerce Website"
          description="An Eccomerce Website fully built using MERN stack that connects to an api made locally with full CRUD features"
        />
        <ProjectCard
          href="https://issue-tracker-oc7x2rbi4-ahmeds-projects-4e2b796d.vercel.app/"
          src="/Issue Tracker.png"
          title="Next js Issue Tracker Website"
          description="A full-stack issue tracker web app built using Next.js, MySQL, Prisma, and NextAuth, connecting to a locally-made API                  "
          github="https://github.com/ahmed27037/issue-tracker"
        />
        <ProjectCard
        href="https://securevpn4u.com/"
          src="/SecureVPN home pic.png"
          title="Blogging Website"
          description="A Blogging website build using WordPress and WordPress plugins"
          github="https://github.com/ahmed27037"
        />
      </div>
    </div>
  );
};

export default Projects;