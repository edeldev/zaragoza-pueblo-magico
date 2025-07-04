import { ENV } from "@/utils";

export async function query(url: string) {
  const res = await fetch(`${ENV.API_URL}/${url}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  return res.json();
}
