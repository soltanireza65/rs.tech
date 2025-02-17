import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="border-b border-zinc-800/30 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight hover-expand">
            <span className="text-emerald-500">&gt; </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
              <Link href="/">Software Engineer</Link>
            </span>
          </h1>
          <div className="flex items-center gap-6">
            {/* <a href="#expertise" className="text-zinc-400 hover:text-emerald-500 transition-colors">Expertise</a> */}
            <Link
              href="/resume"
              className="text-zinc-400 hover:text-emerald-500 transition-colors"
            >
              Resume
            </Link>
            {/* <a href="#contact" className="text-zinc-400 hover:text-emerald-500 transition-colors">Contact</a> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
