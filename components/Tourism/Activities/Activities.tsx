"use client";
import { getCategory } from "@/api";
import { FocusCards, ModalActivitie } from "@/components/ui";
import { IActivities } from "@/interface/activities";
import { useEffect, useState } from "react";
import { IActivitie } from "./types";

export const Activities = ({ categoryId }: IActivitie) => {
  const [activities, setActivities] = useState<IActivities[]>([]);
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
    getCategory({ categoryId })
      .then((res) => {
        setActivities(res.activities);
      })
      .catch((err) => {
        console.error(err.message);
        setActivities([]);
      });
  }, [categoryId]);

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

  if (activities.length === 0)
    return (
      <div className="text-center">
        <span>Cargando...</span>
      </div>
    );

  return (
    <>
      <FocusCards cards={activities} open={openActivitie} />
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
