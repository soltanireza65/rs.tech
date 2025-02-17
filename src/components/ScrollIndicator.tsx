"use client";

import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

export default function ScrollIndicator({ targetId }: { targetId: string }) {
  return (
    <Link
      to={targetId}
      smooth={true}
      duration={800}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover-expand group"
    >
      <ChevronDown className="w-8 h-8 text-emerald-500 animate-bounce group-hover:text-emerald-400 transition-colors" />
    </Link>
  );
}
