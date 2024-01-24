import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export default function Home() {
  return (
    <main className="bg-gray-100 ">
      <div className="grid grid-rows-[1fr_auto] grid-cols-1 min-h-svh">
        <div className="h-full flex justify-center items-center lg:items-start lg:pt-12 container mx-auto">
          <div className="w-full flex flex-col items-center px-4">
            <Image
              src="/logo.svg"
              alt="Diogo Passos Logo"
              width={"352"}
              height={"48"}
              priority
              className="mb-24"
            />
            <h1 className="text-5xl font-bold text-center text-zinc-800">
              🚀 New Personal Page Coming Soon
            </h1>
            <h2 className="text-3xl font-light text-center text-zinc-600 mt-4">
              The new page is under construction!
            </h2>
            <section className="mb-8 mt-16 w-full">
              <ContactForm />
            </section>
          </div>
        </div>
        <div className="border-t border-gray-300 bg-gray-200">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-3 py-4">
            <span className="text-slate-600 text-center md:text-left">
              &copy; Diogo Passos - All rights reserved -{" "}
              {new Date().getFullYear()}
            </span>
            <div className="flex justify-center md:justify-end gap-2">
              <Link
                className="hover:underline"
                href={"https://x.com/gdfpassos"}
                target="_blank"
              >
                X
              </Link>
              <Link
                className="hover:underline"
                href={"https://www.linkedin.com/in/gdfpassos/"}
                target="_blank"
              >
                Linkedin
              </Link>
              <Link
                className="hover:underline"
                href={"https://github.com/gngz"}
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
