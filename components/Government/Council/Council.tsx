"use client";

import { COUNCIL_MEMBERS } from "@/utils";

export const Council = () => {
  return (
    <section className="flex flex-col gap-10 justify-center items-center">
      {COUNCIL_MEMBERS.filter((m) => m.section === "main").map((member) => (
        <div className="text-center" key={`main-${member.id}`}>
          <h3 className="font-bold">{member.name}</h3>
          <span className="capitalize">{member.position}</span>
        </div>
      ))}

      <hr className="w-full text-gray-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
        {COUNCIL_MEMBERS.filter((m) => m.section === "regidores").map(
          (member) => (
            <div className="text-center" key={`regidor-${member.id}`}>
              <h3 className="font-bold">{member.name}</h3>
              <span>{member.position}</span>
            </div>
          )
        )}
      </div>

      <hr className="w-full text-gray-200" />

      {COUNCIL_MEMBERS.filter((m) => m.section === "extra").map((member) => (
        <div className="text-center" key={`extra-${member.id}`}>
          <h3 className="font-bold">{member.name}</h3>
          <span>{member.position}</span>
        </div>
      ))}
    </section>
  );
};
