import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  href: string;
  className?: string;
}
