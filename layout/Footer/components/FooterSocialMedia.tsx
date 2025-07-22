import Link from "next/link";
import { SocialMedia } from "@/components";

export const FooterSocialMedia = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Link href="/">
        <img src="/logo-zaragoza.webp" alt="logo" width={150} height={150} />
      </Link>
      <hr className="w-full md:w-70 border-gray-300" />
      <SocialMedia colorText="text-gray-700" />
    </div>
  );
};
