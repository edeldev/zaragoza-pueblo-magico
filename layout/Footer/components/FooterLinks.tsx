import Link from "next/link";
import { FOOTER_LINKS_CONTACT, FOOTER_LINKS_MENU } from "@/utils/FooterLinks";

export const FooterLinks = () => {
  return (
    <div className="flex justify-between items-start gap-5 md:max-w-xl md:mx-auto mt-5 flex-wrap">
      <div>
        <h4 className="text-pink-950 font-semibold text-3xl">Enlaces</h4>
        <ul className="mt-4">
          <li className="flex flex-col">
            {FOOTER_LINKS_MENU.map((menu) => (
              <Link
                key={menu.id}
                href={menu.url}
                className="text-lg text-gray-500 hover:text-black transition-colors duration-300"
              >
                {menu.text}
              </Link>
            ))}
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-pink-950 font-semibold text-3xl">Contáctanos</h4>
        <ul className="mt-4">
          <li className="flex flex-col">
            {FOOTER_LINKS_CONTACT.map((contact) => (
              <Link
                key={contact.id}
                href={contact.url}
                className="text-lg text-gray-500 hover:text-black transition-colors duration-300"
              >
                {contact.text}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};
