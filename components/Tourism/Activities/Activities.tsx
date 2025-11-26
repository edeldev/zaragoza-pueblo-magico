"use client";
import { useEffect, useState } from "react";
import { getCategory } from "@/api";
import { FocusCards, ModalActivitie } from "@/components/ui";
import { IActivities } from "@/interface/activities";
import { IActivitie } from "./types";
import { SkeletonCards } from "./components";

export const Activities = ({ categoryId }: IActivitie) => {
  const [activities, setActivities] = useState<IActivities[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectActivitie, setSelectActivitie] = useState<IActivities | null>(
    null
  );
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const openActivitie = (activitie: IActivities) => {
    setSelectActivitie(activitie);
    setShowDetails(true);
    setOpen(true);
  };

  const closeActivitie = () => {
    setOpen(false);
    setTimeout(() => {
      setShowDetails(false);
      setSelectActivitie(null);
    }, 300);
  };

  useEffect(() => {
    setLoading(true);

    getCategory({ categoryId })
      .then((res) => {
        setActivities(res.activities);
      })
      .catch((err) => {
        console.error(err.message);
        setActivities([]);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  useEffect(() => {
    const html = document.documentElement;
    if (open) html.classList.add("overflow-hidden");
    else html.classList.remove("overflow-hidden");

    return () => html.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div className="min-h-[500px]">
      {loading ? (
        <SkeletonCards
          styleContainer="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          styleCard="h-60 md:h-70 w-full bg-gray-200 rounded-xl animate-pulse"
          length={8}
        />
      ) : activities.length === 0 ? (
        <div className="text-center py-10">
          <span>No hay resultados</span>
        </div>
      ) : (
        <FocusCards cards={activities} open={openActivitie} />
      )}

      {showDetails && selectActivitie && (
        <ModalActivitie
          selectActivitie={selectActivitie}
          close={closeActivitie}
          isOpen={open}
        />
      )}
    </div>
  );
};
