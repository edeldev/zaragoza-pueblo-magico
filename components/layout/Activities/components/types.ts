import { IActivities } from "@/interface/activities";

export interface IActivitie {
  title: string;
  section: string;
  categoryId: string;
  link: string;
  openActivitie: (activitie: IActivities) => void;
}
