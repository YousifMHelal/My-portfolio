import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { FadeText } from "@/components/magicui/fade-text";
import { cn } from "@/lib/utils";
import Border from "./Border";
import { FaGithub } from "react-icons/fa";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-[140px] mb-14">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <FadeText
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
              text="Hi, I'm Yousif"
            />
            <FadeText
              className="text-4xl font-bold"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
              text="👋"
            />
          </div>
          <FadeText
            className="text-3xl lg:text-4xl font-bold text-muted-foreground mb-20"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.4 } },
            }}
            text="I'm a web developer"
          />
          <FadeText
            className="text-3xl lg:text-4xl font-bold text-muted-foreground mb-20"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="Crafting High-Performance, Scalable Web Applications with Modern JavaScript Frameworks"
          />
        </div>
        <div className="z-10 flex h-24 items-center justify-center">
          <Link
            href="https://github.com/YousifMHelal"
            target="_blank"
            className={cn(
              "group rounded-full border-2 border-border bg-accent text-base text-accent-foreground transition-all ease-in hover:cursor-pointer hover:bg-accent/50"
            )}>
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-accent-foreground hover:duration-300">
              <span className="flex items-center gap-2">
                <FaGithub className="text-accent-foreground" size={16} />
                Github profile
              </span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>
        </div>
      </div>
      <Border />
    </section>
  );
};

export default Header;
