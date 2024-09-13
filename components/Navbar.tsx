import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex px-2 h-[100px] items-center justify-between">
      <Image src="/Logo.png" alt="logo" width={180} height={180} />
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link
          href="mailto:YousifM.Helal@gmail.com"
          target="_blank"
          className={buttonVariants({})}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
