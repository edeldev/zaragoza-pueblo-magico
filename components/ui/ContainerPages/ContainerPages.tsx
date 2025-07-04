import { IContainerPage } from "./types";

export const ContainerPages = ({ children, className }: IContainerPage) => {
  return (
    <main className={`mt-[96px] min-h-[calc(100dvh-96px)] ${className}`}>
      {children}
    </main>
  );
};
