import Link from "next/link";
import { SocialMedia } from "@/components";

export const FooterSocialMedia = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Link href="/">
        <img src="/logo-zaragoza.webp" alt="logo" width={150} height={150} />
      </Link>
      <div className="h-[1px] w-full md:w-70 bg-gradient-to-r from-white via-neutral-200 to-white" />
      <SocialMedia colorText="text-gray-700" />
    </div>
  );
};
