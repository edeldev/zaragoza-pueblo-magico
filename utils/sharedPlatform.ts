import { TSharedPlatform } from "@/interface/sharedPlatform";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";

export const SHARED_PLATFORM: TSharedPlatform[] = [
  {
    name: "Facebook",
    url: () =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
    color: "#1877f2",
    Icon: IconBrandFacebook,
  },
  {
    name: "WhatsApp",
    url: () =>
      `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
    color: "#25D366",
    Icon: IconBrandWhatsapp,
  },
  {
    name: "X",
    url: () =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        window.location.href
      )}`,
    color: "#000000",
    Icon: IconBrandX,
  },
];
