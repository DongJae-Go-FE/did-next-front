import type { Locale } from "@/app/(nation)/_lib/content";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export const DIOCESE_IMAGE_BY_NAME: Record<string, string> = {
  서울대교구: `${IMAGE_BASE}/did/apply/seoul.webp`,
  인천교구: `${IMAGE_BASE}/did/apply/incheon.jpg`,
  수원교구: `${IMAGE_BASE}/did/apply/suwon.png`,
  의정부교구: `${IMAGE_BASE}/did/apply/uijeongbu.png`,
  춘천교구: `${IMAGE_BASE}/did/apply/chuncheon.webp`,
  원주교구: `${IMAGE_BASE}/did/apply/wonju.jpg`,
  대전교구: `${IMAGE_BASE}/did/apply/daejeon.png`,
  청주교구: `${IMAGE_BASE}/did/apply/cheongju.webp`,
  대구대교구: `${IMAGE_BASE}/did/apply/daegu.jpg`,
  부산교구: `${IMAGE_BASE}/did/apply/busan.jpg`,
  마산교구: `${IMAGE_BASE}/did/apply/masan.jpg`,
  안동교구: `${IMAGE_BASE}/did/apply/andong.jpg`,
  광주대교구: `${IMAGE_BASE}/did/apply/gwangju.png`,
  전주교구: `${IMAGE_BASE}/did/apply/jeonju.jpg`,
  제주교구: `${IMAGE_BASE}/did/apply/jeju.png`,
  군종교구: `${IMAGE_BASE}/did/apply/gun.png`,
};

export const DIOCESE_EN_NAME_BY_NAME: Record<string, string> = {
  서울대교구: "Archdiocese of Seoul",
  인천교구: "Diocese of Incheon",
  수원교구: "Diocese of Suwon",
  의정부교구: "Diocese of Uijeongbu",
  춘천교구: "Diocese of Chuncheon",
  원주교구: "Diocese of Wonju",
  대전교구: "Diocese of Daejeon",
  청주교구: "Diocese of Cheongju",
  대구대교구: "Archdiocese of Daegu",
  부산교구: "Diocese of Busan",
  마산교구: "Diocese of Masan",
  안동교구: "Diocese of Andong",
  광주대교구: "Archdiocese of Gwangju",
  전주교구: "Diocese of Jeonju",
  제주교구: "Diocese of Jeju",
  군종교구: "Military Ordinariate",
};

export const DIOCESE_EN_ADDRESS_BY_NAME: Record<string, string> = {
  서울대교구: "74 Myeongdong-gil, Jung-gu, Seoul",
  인천교구: "1 Bakmun-ro, Dong-gu, Incheon",
  수원교구: "39 Imok-ro, Jangan-gu, Suwon-si, Gyeonggi-do",
  대전교구: "12 Gukchaegyeonguwon 5-ro, Sejong-si",
  대구대교구: "112 Namsan-ro 4-gil, Jung-gu, Daegu",
  광주대교구: "980 Sangmu-daero, Seo-gu, Gwangju",
  부산교구: "39 Suyeong-ro 427beon-gil, Suyeong-gu, Busan",
  안동교구: "77 Majirak-gil, Andong-si, Gyeongsangbuk-do",
  청주교구:
    "135-35 Juseong-ro, Cheongwon-gu, Cheongju-si, Chungcheongbuk-do",
  전주교구: "100 Girin-daero, Wansan-gu, Jeonju-si, Jeonbuk State",
  제주교구: "14 Gwandeok-ro 8-gil, Jeju-si, Jeju-do",
  춘천교구: "300 Gongji-ro, Chuncheon-si, Gangwon-do",
  의정부교구: "261 Sinheung-ro, Uijeongbu-si, Gyeonggi-do",
  원주교구: "28 Wonil-ro, Wonju-si, Gangwon-do",
  마산교구:
    "72 Jukheon-ro, Jinjeon-myeon, Masanhappo-gu, Changwon-si, Gyeongsangnam-do",
  군종교구: "46 Hangang-daero 40-gil, Yongsan-gu, Seoul",
};

const DIOCESE_URL_BY_NAME: Record<string, string> = {
  서울대교구: "https://wydseoul.org",
  부산교구: "https://www.wyd2027did-busan.org",
  안동교구: "https://www.wyd2027did-andong.org",
  춘천교구: "https://www.wyd2027did-cccatholic.org",
  대구대교구: "https://www.wyd2027did-daegu.org",
  군종교구: "https://www.wyd2027did-gunjong.org",
  광주대교구: "https://www.wyd2027did-gwangju.org",
  제주교구: "https://www.wyd2027did-jeju.org",
  전주교구: "https://www.wyd2027did-jeonju.org",
  마산교구: "https://www.wyd2027did-masan.org",
  의정부교구: "https://www.wyd2027did-uijeongbu.org",
  원주교구: "https://www.wyd2027did-wonju.org",
  청주교구: "https://www.wyd2027did-cdcj.org",
  수원교구: "https://www.wyd2027did-suwon.org",
  인천교구: "https://www.wyd2027did-incheon.org",
  대전교구: "https://www.wyd2027did-daejeon.org",
};

export function getDioceseDisplayName(name: string, locale: Locale) {
  return locale === "kr" ? name : DIOCESE_EN_NAME_BY_NAME[name] || name;
}

export function getDioceseAddress(
  diocese: { name: string; address: string } | undefined,
  locale: Locale,
) {
  if (!diocese) return "";
  return locale === "kr"
    ? diocese.address
    : DIOCESE_EN_ADDRESS_BY_NAME[diocese.name] || diocese.address;
}

export function getDioceseWebsiteUrl(name: string, locale: Locale) {
  const baseUrl = DIOCESE_URL_BY_NAME[name];
  if (!baseUrl) return undefined;
  if (name === "서울대교구") return baseUrl;
  return `${baseUrl}/${locale === "kr" ? "kr" : "en"}`;
}
