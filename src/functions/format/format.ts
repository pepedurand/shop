import { DEFAULT_LOCALE } from "@/functions/locale";

export const currency = new Intl.NumberFormat(DEFAULT_LOCALE, {
  style: "currency",
  currency: "BRL",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
});
