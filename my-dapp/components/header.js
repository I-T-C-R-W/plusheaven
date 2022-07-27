import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import Logo from "../public/Component.png";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-green-600">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-3 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={30}
            height={30}
            priority
            alt="plusheaven logo"
          />

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white">
              plusheaven
            </a>
          </Link>
        </div>
        <div class=" ml-9 text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Cards
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Numbers
          </a>
        </div>
        <button
          className=" items-center block px-3 py-2 text-white  border border-white rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        ></button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[{ title: "Connect Wallet", route: "/" }].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a
                  href="#"
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
