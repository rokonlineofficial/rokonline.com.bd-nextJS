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