"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Activitie } from "./components";
import { ACTIVITIES } from "@/utils";
import { ModalActivitie } from "@/components/ui";
import { IActivities } from "@/interface/activities";

export const Activities = () => {
  const [activitiesMap, setActivitiesMap] = useState<
    Record<string, IActivities>
  >({});
  const [selectActivitie, setSelectActivitie] = useState<IActivities | null>(
    null
  );
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLoadedActivities = (activities: IActivities[]) => {
    setActivitiesMap((prev) => {
      const copy = { ...prev };
      activities.forEach((a) => {
        if (a.slug) copy[a.slug] = a;
      });
      return copy;
    });
  };

  const openActivitie = (activitie: IActivities) => {
    setSelectActivitie(activitie);
    setShowDetails(true);
    setOpen(true);

    router.replace(`?turismo=${activitie.slug}`, { scroll: false });
  };

  const closeActivitie = () => {
    setOpen(false);

    setTimeout(() => {
      setShowDetails(false);
      setSelectActivitie(null);
    }, 300);

    router.replace("/", { scroll: false });
  };

  useEffect(() => {
    const slug = searchParams.get("turismo");
    if (!slug) return;

    const found = activitiesMap[slug];
    if (found) {
      setSelectActivitie(found);
      setShowDetails(true);
      setOpen(true);
    }
  }, [activitiesMap]);

  useEffect(() => {
    const html = document.documentElement;
    if (open) html.classList.add("overflow-hidden");
    else html.classList.remove("overflow-hidden");

    return () => html.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {ACTIVITIES.map((act) => (
        <Activitie
          key={act.id}
          title={act.title}
          section={act.section}
          categoryId={act.categoryId}
          link={act.link}
          openActivitie={openActivitie}
          onLoadedActivities={handleLoadedActivities}
        />
      ))}

      {showDetails && selectActivitie && (
        <ModalActivitie
          selectActivitie={selectActivitie}
          close={closeActivitie}
          isOpen={open}
        />
      )}
    </>
  );
};
