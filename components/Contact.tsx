import Link from "next/link";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center">
      <div>
        <h2 className="text-5xl text-center font-bold pb-5 text-secondary-foreground">
          Contact me
        </h2>
        <p className="text-center mx-auto py-2 w-6/12 text-sm text-primary font-semibold">01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001</p>
        <p className="text-center mx-auto text-base lg:w-9/12 text-muted-foreground px-4">
          {`I'm eager to collaborate on new projects and help bring your ideas to life. Whether you have a project in mind, need web development advice, or just want to connect, feel free to reach out`}
        </p>
      </div>
      <Button
        className="my-10 font-bold rounded-full"
        size="lg"
        asChild
        variant="outline">
        <Link href="mailto:YousifM.Helal@gmail.com" target="_blank">
          Get in Touch
        </Link>
      </Button>
    </section>
  );
};

export default Contact;
