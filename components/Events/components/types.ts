import { TEvent } from "@/interface/event";

export interface IEvent {
  event: TEvent;
}

export interface IImageWithSkeleton {
  src: string;
  alt: string;
  className?: string;
}

export interface IButtonEvent {
  onClick: () => void;
  isPast: boolean;
}

export interface IEventList {
  event: TEvent[];
  loading: boolean;
}

export interface IBannerEvent {
  isPast: boolean;
}
