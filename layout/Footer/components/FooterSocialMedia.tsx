import Link from "next/link";
import Image from "next/image";
import { SocialMedia } from "@/components";
import LOGO from "@/public/logo-zaragoza.png";

export const FooterSocialMedia = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Link href="/">
        <Image src={LOGO} alt="logo" width={150} height={150} />
      </Link>
      <hr className="w-full md:w-70 border-gray-300" />
      <SocialMedia colorText="text-gray-700" />
    </div>
  );
};
