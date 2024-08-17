import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "firebase",
  "vercel",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
  "reactrouter",
  "prettier",
  "spotify",
  "mongodb",
  "mongoosedotws",
  "bootstrap",
  "tailwindcss",
  "wordpress",
];

export function SkillsIcon() {
  return (
    <div className="relative flex h-full w-full max-w-[50rem] items-center justify-center overflow-hidden rounded-lg lg:px-20 px-8 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
