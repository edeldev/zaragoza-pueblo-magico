"use client";
import { useEffect, useState, useCallback } from "react";
import { BannerEvent, ButtonEvent, EventList } from "./components";
import { TEvent } from "@/interface/event";
import { getEvents, getPastEvents } from "@/api/event";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Pagination } from "../Pagination";
import { TPagination } from "@/interface/pagination";
import { ENV } from "@/utils";

export const Events = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialPage = Number(searchParams.get("page") ?? 1);

  const [events, setEvents] = useState<TEvent[]>([]);
  const [pagination, setPagination] = useState<TPagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPast, setShowPast] = useState(false);
  const [page, setPage] = useState(initialPage);

  const updateURL = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const fetchData = useCallback(async (past: boolean, currentPage = 1) => {
    setLoading(true);
    try {
      const res = past
        ? await getPastEvents(currentPage, ENV.PAGE_SIZE)
        : await getEvents(currentPage, ENV.PAGE_SIZE);

      setEvents(res.events ?? []);
      setPagination(res.pagination ?? null);
    } catch {
      setEvents([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(showPast, page);
  }, [fetchData, showPast, page]);

  const handleToggleEvents = () => {
    const nextState = !showPast;

    setPage(1);

    router.push(pathname, { scroll: false });

    setShowPast(nextState);

    fetchData(nextState, 1);
  };

  return (
    <section>
      <BannerEvent isPast={showPast} />

      <div className="bg-white">
        <div className="container mx-auto px-5 lg:px-0 py-10">
          <ButtonEvent onClick={handleToggleEvents} isPast={showPast} />

          <AnimatePresence mode="wait">
            <motion.div
              key={loading ? "loader" : `events-${page}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <EventList event={events} loading={loading} />
            </motion.div>
          </AnimatePresence>

          {pagination && pagination.pageCount > 1 && (
            <Pagination
              page={page}
              pagination={pagination}
              setPage={setPage}
              updateURL={updateURL}
            />
          )}
        </div>
      </div>
    </section>
  );
};
