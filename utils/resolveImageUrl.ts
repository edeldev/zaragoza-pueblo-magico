import { ENV, optimizeCloudinary } from "@/utils";

export function resolveImageUrl(url?: string, size = 800) {
  if (!url) return "";

  const fullUrl = url.startsWith("http") ? url : `${ENV.SERVER_HOST}${url}`;

  return optimizeCloudinary(fullUrl, size);
}

export function resolveImageArray(
  images: { url: string }[] = [],
  size = 750
): string[] {
  return images
    .filter((img) => img?.url)
    .map((img) => resolveImageUrl(img.url, size));
}
