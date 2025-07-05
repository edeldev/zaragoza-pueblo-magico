import Image from "next/image";
import { Container } from "@/components";
import {
  FooterInstitutions,
  FooterLinks,
  FooterSocialMedia,
} from "./components";
import FOOTER_BACKGROUND from "@/public/slider-footer.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="relative bg-black w-full h-10 z-20">
        <Image
          src={FOOTER_BACKGROUND}
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
      </div>

      <Container>
        <FooterSocialMedia />
        <FooterLinks />
        <FooterInstitutions />
      </Container>

      <div className="bg-primary py-3 text-center">
        <span className="text-white">
          © 2025 Zaragoza N.L | México Desconocido
        </span>
      </div>
    </footer>
  );
};
