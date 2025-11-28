"use client";
import { useEffect, useState, useCallback } from "react";
import { BannerEvent, ButtonEvent, EventList } from "./components";
import { TEvent } from "@/interface/event";
import { getEvents, getPastEvents } from "@/api/event";
import { AnimatePresence, motion } from "framer-motion";

export const Events = () => {
  const [events, setEvents] = useState<TEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPast, setShowPast] = useState(false);

  const fetchData = useCallback(async (past: boolean) => {
    setLoading(true);

    try {
      const res = past ? await getPastEvents() : await getEvents();
      setEvents(res.events ?? []);
    } catch {
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(false);
  }, [fetchData]);

  const handleToggleEvents = () => {
    const nextState = !showPast;
    setShowPast(nextState);
    fetchData(nextState);
  };

  return (
    <section>
      <BannerEvent isPast={showPast} />

      <div className="bg-white">
        <div className="container mx-auto px-5 lg:px-0 py-10">
          <ButtonEvent onClick={handleToggleEvents} isPast={showPast} />

          <AnimatePresence mode="wait">
            <motion.div
              key={loading ? "loader" : "events"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <EventList event={events} loading={loading} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
