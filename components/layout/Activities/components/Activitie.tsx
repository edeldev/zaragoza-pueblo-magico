"use client";
import { getCategory } from "@/api";
import { Button, Container, FocusCards } from "@/components/ui";
import { useEffect, useState } from "react";
import { IActivitie } from "./types";
import { IActivities } from "@/interface/activities";

export const Activitie = ({
  title,
  section,
  categoryId,
  link,
  openActivitie,
}: IActivitie) => {
  const [activities, setActivities] = useState<IActivities[]>([]);

  useEffect(() => {
    getCategory({ categoryId })
      .then((res) => {
        setActivities(res.activities);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [categoryId]);

  return (
    <Container id={section}>
      <div className="flex justify-between items-center mb-5 md:mb-8">
        <h2 className="text-center text-3xl font-bold">{title}</h2>

        <Button
          href={link}
          className="border border-primary hover:bg-primary/70 transition duration-300 text-primary hover:text-white rounded-full hidden md:block"
        >
          Ver todo
        </Button>
      </div>
      <FocusCards cards={activities} open={openActivitie} />
      <Button
        href={link}
        className="border border-primary hover:bg-primary/70 transition duration-300 text-primary hover:text-white  rounded-full inline-block md:hidden mt-5"
      >
        Ver todo
      </Button>
    </Container>
  );
};
