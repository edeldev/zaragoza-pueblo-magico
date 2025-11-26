import { ISkeletonCard } from "./types";

export const SkeletonCards = ({
  styleContainer,
  styleCard,
  length,
}: ISkeletonCard) => {
  return (
    <div className={styleContainer}>
      {Array.from({ length }).map((_, i) => (
        <div key={i} className={styleCard} />
      ))}
    </div>
  );
};
