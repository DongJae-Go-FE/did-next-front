export type Locale = "kr" | "en";

export const locales: Locale[] = ["kr", "en"];

export const content = {
  kr: {
    lang: "ko",
    metadata: {
      title: "2027 WYD SEOUL DID",
      description:
        "2027 서울 세계청년대회(WYD) 교구대회(DID) 공식 웹사이트. 전국 16개 교구 신청 정보, 교구 소개, 일정 안내 및 신청 방법을 확인하세요.",
      keywords:
        "2027 세계청년대회, WYD 2027, WYD Seoul 2027, 서울 세계청년대회, 교구대회, DID, Days in Diocese, 가톨릭, 천주교, 세계청년대회 신청, 교구 신청, 인천교구, 서울대교구, 수원교구, 의정부교구, 춘천교구, 원주교구, 대전교구, 청주교구, 대구대교구, 부산교구, 마산교구, 안동교구, 광주대교구, 전주교구, 제주교구, 군종교구, GMG, JMJ, 한국 천주교",
      ogLocale: "ko_KR",
    },
    header: {
      logoAlt: "wyd logo",
      homeHref: "/",
    },
    footer: {
      logoAlt: "DID 로고",
      homeHref: "/",
      address: "도로명 주소 : 인천광역시 동구 박문로1 (송림동 103-25)",
      address2: "지번 주소 : 인천광역시 동구 송림동 103-8",
      email: "이메일 : wyd2027did@cbck.kr",
      phone: "032-765-6960",
      hours: "운영시간: 10:00 ~ 18:00",
      sponsorInquiry: "후원 문의",
      sponsorEmail: "wyd2027@naver.com",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        { label: "인천교구청", href: "http://www.caincheon.or.kr/" },
      ],
      copyright: "Copyright ⓒ WYD2027 SEOUL DID All rights reserved",
    },
    menu: {
      dialogTitle: "DID 메뉴",
      dialogDescription: "DID 메뉴입니다.",
      logoHref: "/",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "교구대회 소개", href: "" },
            { label: "교구 소개", href: "/kr#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "공지사항", href: "" },
            { label: "후원사 소개", href: "/kr#sponsor" },
          ],
        },
        {
          title: "참여",
          items: [
            { label: "DID 신청", href: "/kr/apply" },
            { label: "교구별 신청 현황", href: "/kr/status" },
          ],
        },
      ],
    },
    intro: {
      welcomeText: "WYD 2027 SEOUL DID 페이지에 오신걸 환영합니다.",
      logoAriaLabel: "교구 로고 모음",
    },
    mapPage: {
      title: "교구 소개",
      subtitle: "(마커를 클릭해주세요)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "DiD 신청하기",
      desc: "교구별 신청 페이지에서 참여 가능한 교구를 확인하고 바로 신청할 수 있습니다.",
      cta: "신청 페이지 이동",
      href: "/kr/apply",
    },
    sponsorPage: {
      title: "공식 후원사",
      inquiryTitle: "후원 문의",
    },
    prayPage: {
      titleLine1: "2027 서울 세계청년대회",
      titleLine2: "묵주기도 10억단 바치기",
      groupTitle: "단체 참여",
      groupDescLine1: "단체 소속으로 WYD 홈페이지를 통해",
      groupDescLine2: "봉헌 운동에 참여할 수 있습니다.",
      individualTitle: "개인 참여",
      individualDescLine1: "개인 누구나 쉽게",
      individualDescLine2: "봉헌 운동에 참여할 수 있습니다.",
    },
    fightPage: {
      titleParts: [
        { text: "2027 WYD", color: "#214D9D" },
        { text: " 와 ", color: "black" },
        { text: "교구대회를", color: "#E54A47" },
        { text: " 응원합니다! ", color: "black" },
        { text: "CHEER UP ", color: "black" },
        { text: "2027 WYD", color: "#214D9D" },
        { text: " & ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["손석희", "마르첼리노", "아나운서"],
      personAlt: "손석희 아나운서 응원영상",
    },
    applyPage: {
      heroAlt: "서브페이지 배경",
      heroTitle: "DID 신청",
      breadcrumb: ["참여 /", "신청"],
      leftMenuTitle: "참여",
      leftMenuItems: [
        { label: "DID 신청", href: "/kr/apply" },
        { label: "교구별 신청 현황", href: "/kr/status" },
      ],
      pageTitle: "DID 신청",
      cardTitle: (name: string) => `${name} 교구 DID 신청`,
      cardDesc: (name: string) =>
        `버튼을 누르면 ${name} 교구 DID 신청을 합니다.`,
      rateLabel: "신청률",
      applyBtn: "신청하기",
      privacyDialogTitle: "개인정보 수집·이용 동의",
      privacyDialogDesc:
        "DID 신청을 위해 아래 내용을 확인하시고 동의해 주세요.",
      privacyDialogDetail:
        "1. 수집 항목: 성명, 연락처(휴대전화번호), 이메일, 소속 교구, 생년월일\n2. 수집 목적: 2027 서울 세계청년대회 교구대회(DID) 신청 접수 및 안내\n3. 보유·이용 기간: 행사 종료 후 3개월까지 보유 후 파기\n4. 동의 거부 시 불이익: 동의를 거부하실 수 있으나, 거부 시 DID 신청이 불가합니다.",
      privacyAgreeLabel: "위 개인정보 수집·이용에 동의합니다.",
      privacyConfirmBtn: "신청 페이지로 이동",
      privacyCancelBtn: "취소",
    },
    statusPage: {
      heroAlt: "서브페이지 배경",
      heroTitle: "교구별 신청 현황",
      breadcrumb: ["참여 /", "신청 현황"],
      leftMenuTitle: "참여",
      leftMenuItems: [
        { label: "DID 신청", href: "/kr/apply" },
        { label: "교구별 신청 현황", href: "/kr/status" },
      ],
      pageTitle: "교구별 신청 현황",
    },
    slider: {
      pauseTitle: "일시정지 버튼",
      playTitle: "재생 버튼",
      prevTitle: "이전 슬라이드 버튼",
      nextTitle: "다음 슬라이드 버튼",
    },
  },

  en: {
    lang: "en",
    metadata: {
      title: "2027 WYD SEOUL DID",
      description:
        "Official website for 2027 World Youth Day Seoul. Explore 16 Catholic dioceses across Korea, find diocese information, schedules, and apply for your DID experience.",
      keywords:
        "2027 World Youth Day, WYD 2027, WYD Seoul 2027, Days in Diocese, DID, Catholic, Korea, Diocese of Incheon, Archdiocese of Seoul, Diocese of Suwon, Diocese of Uijeongbu, Diocese of Chuncheon, Diocese of Wonju, Diocese of Daejeon, Diocese of Cheongju, Archdiocese of Daegu, Diocese of Busan, Diocese of Masan, Diocese of Andong, Archdiocese of Gwangju, Diocese of Jeonju, Diocese of Jeju, Military Ordinariate, GMG, JMJ, GMG Séoul 2027, JMJ Seúl 2027, JMJ Séoul 2027, Korean Catholic Church, WYD Diocese",
      ogLocale: "en_US",
    },
    header: {
      logoAlt: "wyd logo",
      homeHref: "/en",
    },
    footer: {
      logoAlt: "DID Logo",
      homeHref: "/en",
      address: "Address: 1 Bakmun-ro, Dong-gu, Incheon, Republic of Korea",
      address2: "",
      email: "Email: wyd2027did@cbck.kr",
      phone: "+82-32-765-6960",
      hours: "Hours: 10:00 AM ~ 6:00 PM (KST)",
      sponsorInquiry: "Sponsorship Inquiry",
      sponsorEmail: "wyd2027@naver.com",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        { label: "Diocese of Incheon", href: "http://www.caincheon.or.kr/" },
        {
          label: "Incheon Youth Ministry",
          href: "https://youth.caincheon.or.kr/",
        },
      ],
      copyright: "Copyright ⓒ WYD2027 SEOUL DID All rights reserved",
    },
    menu: {
      dialogTitle: "DID Menu",
      dialogDescription: "DID Navigation Menu",
      logoHref: "/en",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "About DID", href: "" },
            { label: "Diocese Info & Apply", href: "/en#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Announcements", href: "" },
            { label: "Sponsors", href: "/en#sponsor" },
          ],
        },
        {
          title: "PARTICIPATE",
          items: [{ label: "DID Application", href: "/en/apply" }],
        },
      ],
    },
    intro: {
      welcomeText: "Welcome to WYD 2027 SEOUL DID.",
      logoAriaLabel: "Diocese logos",
    },
    mapPage: {
      title: "Diocese Info",
      subtitle: "(Click on a marker)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "Apply for DiD",
      desc: "Check available dioceses on the application page and apply right away.",
      cta: "Go to Application",
      href: "/en/apply",
    },
    sponsorPage: {
      title: "Official Sponsors",
      inquiryTitle: "Sponsorship Inquiry",
    },
    prayPage: {
      titleLine1: "2027 Seoul World Youth Day",
      titleLine2: "1 Billion Rosary Offering",
      groupTitle: "Group Participation",
      groupDescLine1: "Join the offering campaign",
      groupDescLine2: "as a group through the WYD website.",
      individualTitle: "Individual Participation",
      individualDescLine1: "Anyone can easily participate",
      individualDescLine2: "in the offering campaign.",
    },
    fightPage: {
      titleParts: [
        { text: "2027 WYD", color: "#214D9D" },
        { text: " and ", color: "black" },
        { text: "Diocesan Events", color: "#E54A47" },
        { text: " are supported! ", color: "black" },
        { text: "CHEER UP ", color: "black" },
        { text: "2027 WYD", color: "#214D9D" },
        { text: " & ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personAlt: "WYD 2027 Support Video",
    },
    applyPage: {
      heroAlt: "Sub page background",
      heroTitle: "DID Application",
      breadcrumb: ["Participate /", "Apply"],
      leftMenuTitle: "Participate",
      leftMenuItems: [{ label: "DID Application", href: "/en/apply" }],
      pageTitle: "DID Application",
      cardTitle: (name: string) => `${name} DID Application`,
      cardDesc: (name: string) => `Click the button to apply for ${name} DID.`,
      rateLabel: "Application Rate",
      applyBtn: "Apply",
      privacyDialogTitle:
        "Consent to Collection and Use of Personal Information",
      privacyDialogDesc:
        "Please review and agree to the following before applying for DID.",
      privacyDialogDetail:
        "1. Items Collected: Name, phone number, email, diocese affiliation, date of birth\n2. Purpose: Processing and communicating about your 2027 WYD Seoul DID application\n3. Retention Period: Retained until 3 months after the event, then destroyed\n4. Right to Refuse: You may refuse consent; however, your DID application cannot be processed without consent.",
      privacyAgreeLabel:
        "I agree to the collection and use of my personal information as described above.",
      privacyConfirmBtn: "Go to Application",
      privacyCancelBtn: "Cancel",
    },
    statusPage: {
      heroAlt: "Sub page background",
      heroTitle: "Application Status",
      breadcrumb: ["Participate /", "Status"],
      leftMenuTitle: "Participate",
      leftMenuItems: [{ label: "DID Application", href: "/en/apply" }],
      pageTitle: "Application Status",
    },
    slider: {
      pauseTitle: "Pause",
      playTitle: "Play",
      prevTitle: "Previous slide",
      nextTitle: "Next slide",
    },
  },
} as const;

export type Content = (typeof content)["kr"];
