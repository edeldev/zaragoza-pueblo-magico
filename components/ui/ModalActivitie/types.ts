import { IActivities } from "@/interface/activities";

export type IModalActivitie = {
  selectActivitie: IActivities;
  close: () => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};
