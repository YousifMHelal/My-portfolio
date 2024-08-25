import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <section className="flex flex-col mt-5 py-5 border-t-2 border-border">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between my-10 mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src="/Logo.png" alt="logo" width={30} height={30} />
            <span className="text-secondary-foreground text-xl font-bold">
              Yousif
            </span>
          </div>
          <p className="text-muted-foreground text-base pb-2">
            <span className="dot"></span> {`I'm currently available for work.`}
          </p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-5">
            <Link href="https://github.com/YousifMHelal" target="_blank">
              <FaGithub
                className="text-accent-foreground cursor-pointer"
                size={28}
              />
            </Link>
            <Link href="https://www.facebook.com/YousifM.Helal" target="_blank">
              <FaFacebook
                className="text-accent-foreground cursor-pointer"
                size={28}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yousifmhelal/"
              target="_blank">
              <FaLinkedin
                className="text-accent-foreground cursor-pointer"
                size={25}
              />
            </Link>
            <Link
              href="https://wa.me/+201150509675?text=Hello%20Yousif"
              target="_blank"
              rel="noopener noreferrer">
              <FaWhatsapp
                className="text-accent-foreground cursor-pointer"
                size={28}
              />
            </Link>
            <Link href="mailto:YousifM.Helal@gmail.com" target="_blank">
              <SiGmail
                className="text-accent-foreground cursor-pointer"
                size={28}
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-muted-foreground">
        Copyright &copy; 2024 Yousif M.Helal. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
