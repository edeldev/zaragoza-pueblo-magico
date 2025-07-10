import { Container } from "@/components";
import {
  FooterInstitutions,
  FooterLinks,
  FooterSocialMedia,
} from "./components";

export const Footer = () => {
  return (
    <footer>
      <div className="relative bg-black w-full h-10 z-20">
        <img
          src="/slider-footer.svg"
          alt="Footer background"
          className="pointer-events-none object-cover w-full h-full"
        />
      </div>

      <Container>
        <FooterSocialMedia />
        <FooterLinks />
        <FooterInstitutions />
      </Container>

      <div className="bg-primary py-3 text-center z-1 relative">
        <span className="text-white">
          © 2025 Zaragoza N.L | México Desconocido
        </span>
      </div>
    </footer>
  );
};
