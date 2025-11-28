"use client";
import { getEvents } from "@/api/event";
import { TEvent } from "@/interface/event";
import { useEffect, useState } from "react";
import { LoaderEvent } from "./LoaderEvent";
import { NoEvents } from "./NoEvents";
import { EventMainItem } from "./EventMainItem";
import { EventSmallItem } from "./EventSmallItem";

export const EventList = () => {
  const [eventList, setEventsList] = useState<TEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((res) => {
        setEventsList(res.events || []);
      })
      .catch(() => setEventsList([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoaderEvent />;

  if (!loading && eventList.length === 0) return <NoEvents />;

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-6xl mx-auto">
      <EventMainItem event={eventList[0]} />

      <div className="flex flex-col gap-6">
        {eventList.slice(1).map((ev) => (
          <EventSmallItem key={ev.slug} event={ev} />
        ))}
      </div>
    </section>
  );
};
