import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-2">
      <Image
        alt="lost-archive-logo"
        src={"/assets/logo.ico"}
        width={30}
        height={20}
      ></Image>
      <h2 className="text-[14px] md:text-[16px] lg:text-[16px] font-bold">Lost Archive</h2>
    </Link>
  );
};

export default Logo;
