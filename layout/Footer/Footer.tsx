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

        <div className="my-10 max-w-xl mx-auto">
          <div className="h-[1px] w-full bg-gradient-to-r from-white via-neutral-200 to-white" />
        </div>
        <FooterInstitutions />
      </Container>

      <div className="bg-primary py-3 text-center z-1 relative">
        <span className="text-white">
          © 2025 Gobierno de General Zaragoza N.L.
        </span>
      </div>
    </footer>
  );
};
