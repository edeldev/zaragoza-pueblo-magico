export type TSharedPlatform = {
  name: string;
  url: (title?: string) => string;
  color: string;
  Icon: React.ComponentType<{ className?: string }>;
};
