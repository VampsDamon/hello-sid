import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black px-8 py-2 text-white  flex justify-between items-center mb-4 shadow-lg ">
      <div className="logo uppercase font-bold text-lg">Logo.</div>
      <div className="links flex gap-4 ">
        <Link
          className="uppercase delay-100 transition-all hover:text-yellow-400 delay-100 transition-all"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="uppercase delay-100 transition-all hover:text-yellow-400"
          href={"/basicsRouting"}
        >
          Basics Routing{" "}
        </Link>
        <Link
          className="uppercase delay-100 transition-all hover:text-yellow-400"
          href={"/nested-route"}
        >
          Nested Routing
        </Link>
        <Link
          className="uppercase delay-100 transition-all hover:text-yellow-400"
          href={"/useRouter"}
        >
          useRouter
        </Link>
      </div>
    </nav>
  );
}

export default Navbar