export type TSharedPlatform = {
  name: string;
  url: (shareUrl: string) => string;
  color: string;
  Icon: React.ComponentType<{ className?: string }>;
};
