import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className=" text-center font-sans text-6xl font-extrabold">
            Chat with your PDFs <span className="block"></span> in seconds!!
          </h1>
          <p className="p-8">
            A powerful application that enables you to chat with your PDFs
          </p>
          <Button className="block mx-auto">Get Started</Button>
        </div>
      </section>
    </div>
  );
}
