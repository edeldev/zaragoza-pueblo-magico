import { TSharedPlatform } from "@/interface/sharedPlatform";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";

export const SHARED_PLATFORM: TSharedPlatform[] = [
  {
    name: "Facebook",
    url: (shareUrl: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    color: "#1877f2",
    Icon: IconBrandFacebook,
  },
  {
    name: "WhatsApp",
    url: (shareUrl: string) =>
      `https://wa.me/?text=${encodeURIComponent(shareUrl)}`,
    color: "#25D366",
    Icon: IconBrandWhatsapp,
  },
  {
    name: "X",
    url: (shareUrl: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
    color: "#000000",
    Icon: IconBrandX,
  },
];
