import Link from "next/link";

import React from "react";

const Navboard = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-white">
            <div className="text-3xl font-bold">
              <Link href={"/"}>GeoBash</Link>
            </div>
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/feature"}>Feature</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navboard;