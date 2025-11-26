"use client";
import { getCategory } from "@/api";
import { Button, Container, FocusCards } from "@/components/ui";
import { useEffect, useState } from "react";
import { IActivitie } from "./types";
import { IActivities } from "@/interface/activities";
import { SkeletonCards } from "@/components/Tourism/Activities/components";

export const Activitie = ({
  title,
  section,
  categoryId,
  link,
  openActivitie,
}: IActivitie) => {
  const [activities, setActivities] = useState<IActivities[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getCategory({ categoryId, limit: 4 })
      .then((res) => {
        setActivities(res.activities);
        if (!res.activities || res.activities.length === 0) {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <Container id={section}>
      <div className="flex justify-between items-center mb-5 md:mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>

        <Button
          href={link}
          className="border border-primary hover:bg-primary/80 transition duration-300 text-primary hover:text-white rounded-full hidden md:block"
        >
          Ver todo
        </Button>
      </div>

      {loading && (
        <SkeletonCards
          styleContainer="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          styleCard="h-60 md:h-70 w-full bg-gray-200 rounded-xl animate-pulse"
          length={4}
        />
      )}

      {!loading && error && (
        <div className="text-center py-10 text-gray-500">
          <p className="text-lg">No hay información disponible por ahora.</p>
        </div>
      )}

      {!loading && !error && (
        <FocusCards cards={activities} open={openActivitie} />
      )}

      <Button
        href={link}
        className="border border-primary hover:bg-primary/80 transition duration-300 text-primary hover:text-white  rounded-full inline-block md:hidden mt-5"
      >
        Ver todo
      </Button>
    </Container>
  );
};
