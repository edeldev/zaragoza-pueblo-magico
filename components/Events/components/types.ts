import { TEvent } from "@/interface/event";

export interface IEvent {
  event: TEvent;
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
