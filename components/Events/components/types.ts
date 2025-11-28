import { TEvent } from "@/interface/event";

export interface IEvent {
  event: TEvent;
}

export interface IImageWithSkeleton {
  src: string;
  alt: string;
  className?: string;
}
