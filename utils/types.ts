export type TExploreZaragoza = {
  id: number;
  icon: string;
  text: string;
  link: string;
};

export type TAbout = {
  id: number;
  title: string;
  caption: string;
};

export type TActivities = {
  id: number;
  title: string;
  section: string;
  categoryId: string;
  link: string;
};

export type TSlugBusines = {
  id: number;
  slug: string;
};

export type TSocialMedia = {
  name: string;
  url: string;
  color: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export type TFooterLink = {
  id: number;
  url: string;
  text: string;
};

export type TContact = {
  id: number;
  number: string;
  label: string;
};
