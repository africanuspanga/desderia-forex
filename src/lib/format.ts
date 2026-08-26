// Client-safe formatting helpers and shared constants.

export const PHONE_DISPLAY = "+255 791 666 046";
export const PHONE_TEL = "+255791666046";
export const WHATSAPP_NUMBER = "255791666046";
export const ADDRESS = "Sky City Mall, Dar es Salaam, Tanzania";

export function formatTzs(value: number): string {
  const decimals = value < 10 ? 2 : 0;
  return `TZS ${value.toLocaleString("en-TZ", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

export function formatRateNumber(value: number): string {
  const decimals = value < 10 ? 2 : 0;
  return value.toLocaleString("en-TZ", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Africa/Dar_es_Salaam",
  });
}
