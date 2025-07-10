"use client";
import { useEffect, useState } from "react";
import { Activitie } from "./components";
import { ACTIVITIES } from "@/utils";
import { ModalActivitie } from "@/components/ui";
import { IActivities } from "@/interface/activities";

export const Activities = () => {
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
    const html = document.documentElement;
    if (open) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }

    return () => {
      html.classList.remove("overflow-hidden");
    };
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
        />
      ))}

      {showDetails && selectActivitie && (
        <ModalActivitie
          selectActivitie={selectActivitie}
          close={closeActivitie}
          isOpen={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
};
