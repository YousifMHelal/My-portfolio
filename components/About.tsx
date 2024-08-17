"use client";

import { useTheme } from "next-themes";
import Card from "./Card";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-5 mt-20">
      <div className="mb-10">
        <h2 className="text-5xl text-center font-bold pb-5 text-secondary-foreground">
          Who am I ?
        </h2>
        <p className="text-center text-base text-accent-foreground">
          A Journey in Web Development: My Passion and Expertise
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="flex flex-col gap-4">
          <p className="text-base text-justify text-muted-foreground px-4">
            {`My name is Yousif Mamdouh, I am a highly skilled and motivated web developer with several years of experience in crafting user-friendly, modern websites. My strong background in HTML, CSS, JavaScript, and various web development frameworks equips me with the technical expertise needed to turn your vision into reality.
            Known for my organizational skills and ability to manage multiple projects simultaneously, I take pride in meeting deadlines and delivering high-quality results. If you're seeking a reliable, experienced, and talented web developer to bring your web project to life, look no further. Let’s collaborate and create something extraordinary together.`}
          </p>
          <div className="flex justify-center lg:justify-end mt-5 lg:mt-10">
            <div className="relative w-48 h-24">
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/dark-sign.png"
                    : "/light-sign.png"
                }
                alt="Yousif"
                fill
              />
            </div>
          </div>
        </div>
        <Card />
      </div>
    </section>
  );
};

export default About;
