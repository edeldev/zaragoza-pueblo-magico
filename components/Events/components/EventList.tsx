import { LoaderEvent } from "./LoaderEvent";
import { NoEvents } from "./NoEvents";
import { EventMainItem } from "./EventMainItem";
import { EventSmallItem } from "./EventSmallItem";
import { IEventList } from "./types";

export const EventList = ({ event, loading }: IEventList) => {
  if (loading) return <LoaderEvent />;

  if (!loading && event.length === 0) return <NoEvents />;

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-6xl mx-auto">
      <EventMainItem event={event[0]} />

      <div className="flex flex-col gap-6">
        {event.slice(1).map((ev) => (
          <EventSmallItem key={ev.slug} event={ev} />
        ))}
      </div>
    </section>
  );
};
