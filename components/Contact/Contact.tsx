import { Fragment } from "react";
import { CONTACTS } from "@/utils/contacts";
import { IconPhone } from "@tabler/icons-react";

export const Contact = () => {
  return (
    <div id="contact" className="bg-white z-80 relative py-10 scroll-mt-46">
      <div className="container mx-auto px-5 lg:px-0">
        <h3 className="text-4xl font-semibold mb-5">Contacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 place-items-center gap-y-5 md:gap-y-0 text-center">
          {CONTACTS.map((contact, idx) => (
            <Fragment key={contact.id}>
              <div>
                <div className="flex gap-2 items-center">
                  <IconPhone stroke={1.5} size={30} />
                  <span className="text-2xl font-semibold">
                    {contact.number}
                  </span>
                </div>
                <span className="text-center text-xl text-gray-400">
                  {contact.label}
                </span>
              </div>
              {idx < CONTACTS.length - 1 && (
                <span className="text-gray-300 select-none">|</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
