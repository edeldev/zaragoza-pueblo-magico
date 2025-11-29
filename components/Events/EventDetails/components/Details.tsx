import { formatDate } from "@/utils";
import { IEventDetail } from "./types";
import { IconCalendar, IconClockHour4, IconMapPin } from "@tabler/icons-react";

export const Details = ({ eventId }: IEventDetail) => {
  const { title, date, time, location } = eventId;

  return (
    <header className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900">
        {title}
      </h1>

      <ul className="space-y-3 text-neutral-700 text-lg">
        <li className="flex items-center gap-2">
          <IconCalendar size={22} className="text-neutral-600" />
          <span>
            <strong className="font-semibold">Fecha:</strong> {formatDate(date)}
          </span>
        </li>

        <li className="flex items-center gap-2">
          <IconClockHour4 size={22} className="text-neutral-600" />
          <span>
            <strong className="font-semibold">Horario:</strong> {time}
          </span>
        </li>

        <li className="flex items-center gap-2">
          <IconMapPin size={22} className="text-neutral-600" />
          <span>
            <strong className="font-semibold">Lugar:</strong> {location}
          </span>
        </li>
      </ul>
    </header>
  );
};
