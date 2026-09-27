export function getTextDirection(lang: string): "rtl" | "ltr" {
  return /^(ar|ur)(-|$)/i.test(lang) ? "rtl" : "ltr";
}
