import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";
import { TSocialMedia } from "./types";

export const SOCIAL_MEDIA: TSocialMedia[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1F4YmGA3HZ/?mibextid=wwXIfr",
    color: "#1877f2",
    Icon: IconBrandFacebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/zaragoza.pueblo.magico?igsh=MXhqN3Ftc2x6MWdzcg==",
    color: "#E1306C",
    Icon: IconBrandInstagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@zaragoza.pueblomagico?_r=1&_t=ZS-91jFhuUPVTu",
    color: "#000000",
    Icon: IconBrandTiktok,
  },
];
