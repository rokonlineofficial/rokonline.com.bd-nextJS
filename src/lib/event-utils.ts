export function todayISO() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" });
}

export function dateParts(date: string) {
  const d = new Date(`${date}T00:00:00Z`);
  return {
    dayMonth: d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    }),
    year: String(d.getUTCFullYear()),
  };
}


export function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/
  );
  return m?.[1] ?? null;
}