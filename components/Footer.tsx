import Link from "next/link";
import React from "react";
import LocalTimeAndPlace from "./LocalTimeAndPlace";

export default function Footer() {
  return (
    <div className="">
      <div className="container mx-auto px-3 py-3 flex flex-col md:flex-row gap-3">
        <div className="space-y-2">
            <p className="capitalize italic text-2xl">Luma</p>
          <LocalTimeAndPlace />
        </div>
        <div className="flex-1 py-2 flex md:items-center md:justify-center">
            <p className="text-center uppercase md:text-xl">all right reserved &copy; 2025, w1 llc</p>
        </div>
      </div>
      <div className="bg-black">
        <Link href="/" className="text-xs px-3 py-2">
          Terms & Support
        </Link>
      </div>
    </div>
  );
}
