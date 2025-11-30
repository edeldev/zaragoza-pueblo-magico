"use client";
import { useState } from "react";
import { IImageWithSkeleton } from "./types";

export const ImageWithSkeleton = ({
  src,
  alt,
  className,
}: IImageWithSkeleton) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-all duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
