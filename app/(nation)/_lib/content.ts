export type Locale =
  | "kr"
  | "en"
  | "es"
  | "fr"
  | "pt"
  | "it"
  | "pl"
  | "de"
  | "zh"
  | "zh-tw"
  | "fil"
  | "ja"
  | "vi";

export const locales: Locale[] = [
  "kr",
  "en",
  "es",
  "fr",
  "pt",
  "it",
  "pl",
  "de",
  "zh",
  "zh-tw",
  "fil",
  "ja",
  "vi",
];

export const localeLabels: Record<Locale, string> = {
  kr: "한국어",
  en: "English",
  es: "Español",
  fr: "Français",
  pt: "Português",
  it: "Italiano",
  pl: "Polski",
  de: "Deutsch",
  zh: "简体中文",
  "zh-tw": "繁體中文",
  fil: "Filipino",
  ja: "日本語",
  vi: "Tiếng Việt",
};

export const content = {
  kr: {
    lang: "ko",
    metadata: {
      title:
        "WYD2027 서울 세계청년대회 교구대회(DID) 공식 홈페이지",
      description:
        "WYD2027 서울 세계청년대회 교구대회(DID) 공식 홈페이지. 일정, 교구 소개, 참가 신청과 현황, 공지사항, 후원 정보를 확인하세요.",
      ogLocale: "ko_KR",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/kr",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/kr",
      address: "서울 광진구 면목로 74, 한국천주교중앙협의회, 04918",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "후원 문의",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        { label: "한국천주교주교회의", href: "https://www.cbck.or.kr" },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 세계청년대회 교구대회 All rights reserved",
    },
    menu: {
      dialogTitle: "DID 메뉴",
      dialogDescription: "DID 메뉴입니다.",
      logoHref: "/kr",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "교구대회 소개", href: "/kr/introduce" },
            { label: "교구 소개", href: "/kr#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "공지사항", href: "/kr/notice" },
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
      welcomeText:
        "WYD2027 서울 세계청년대회 교구대회(DID) 공식 홈페이지에 오신 걸 환영합니다.",
      logoAriaLabel: "교구 로고 모음",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 서울 교구대회(DID)",
      alt: "WYD2027 서울 세계청년대회 교구대회 DID 메인 이미지",
    },
    mainVerse: {
      lines: ["용기를 내어라.", "내가 세상을 이겼다."],
      ref: "(요한 16,33)",
      alt1: "WYD 2027 DID 메인 이미지 첫번째",
      alt2: "WYD 2027 DID 메인 이미지 두번째",
    },
    mainNoticePopup: {
      brand: "2027 WYD SEOUL DID",
      title: "교구대회 신청 안내",
      description:
        "해당 교구대회 신청은 교황청 평신도가정생명부(Dicastery for the Laity, Family and Life) 승인 이후 이뤄질 예정입니다.",
      hideToday: "오늘 하루 보지 않기",
      close: "닫기",
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
      personLabel2: ["정승제", "안토니오", "선생님"],
      personLabel3: ["이보영", "클라라", "선생님"],
      personLabel4: ["크라잉넛"],
      personLabel5: ["이해인", "클라우디아", "수녀님"],
      personLabel6: ["알베르토", "몬디"],
      personLabel7: ["손숙", "헬레나", "배우"],
      personLabel8: ["크리스티나", "콘팔로니에리"],
      personLabel9: ["바다", "최성희", "비비안나"],
      personLabel10: ["아키바 리에", "클라라"],
      personAlt: "wyd did 응원영상",
    },
    applyPage: {
      heroAlt: "서브페이지 배경",
      heroTitle: "DID 신청",
      metaDescription:
        "WYD2027 서울 교구대회(DID) 참가 신청 안내 페이지입니다. 교구별 신청 가능 여부와 신청 링크를 확인하고, 참여 가능한 교구의 DID 신청 페이지로 이동하세요.",
      breadcrumb: ["참여 /", "신청"],
      leftMenuTitle: "참여",
      leftMenuItems: [
        { label: "DID 신청", href: "/kr/apply" },
        { label: "교구별 신청 현황", href: "/kr/status" },
      ],
      pageTitle: "DID 신청",
      cardTitle: (name: string) => `${name} 교구 DID 신청`,
      cardDesc: () => `6월 1일부터 신청 가능합니다.`,
      rateLabel: "신청률",
      applyBtn: "신청하기",
      applyUnavailable: "아직 신청 기간이 아닙니다.",
      privacyDialogTitle: "개인정보 수집·이용 동의",
      privacyDialogDesc:
        "DID 신청을 위해 아래 내용을 확인하시고 동의해 주세요.",
      privacyDialogDetail:
        "1. 수집 항목: 성명, 연락처(휴대전화번호), 이메일, 소속 교구, 생년월일, 성별\n2. 수집 목적: 2027 서울 세계청년대회 교구대회(DID) 신청 접수 및 안내\n3. 보유·이용 기간: 행사 종료 후 3개월까지 보유 후 파기\n4. 동의 거부 시 불이익: 동의를 거부하실 수 있으나, 거부 시 DID 신청이 불가합니다.",
      privacyWarning:
        "⚠️ 중요 안내: 반드시 교회 도메인 이메일(@catholic.or.kr 등)로 신청해 주세요. 교회 도메인 메일이 아닌 경우 신청이 취소됩니다.",
      privacyAgreeLabel: "위 개인정보 수집·이용에 동의합니다.",
      privacyConfirmBtn: "신청 페이지로 이동",
      privacyCancelBtn: "취소",
    },
    statusPage: {
      heroAlt: "서브페이지 배경",
      heroTitle: "교구별 신청 현황",
      metaDescription:
        "WYD2027 서울 교구대회(DID) 교구별 신청 현황 페이지입니다. 각 교구의 목표 인원, 현재 신청 인원, 신청률과 참여 진행 상황을 확인하세요.",
      breadcrumb: ["참여 /", "신청 현황"],
      leftMenuTitle: "참여",
      leftMenuItems: [
        { label: "DID 신청", href: "/kr/apply" },
        { label: "교구별 신청 현황", href: "/kr/status" },
      ],
      pageTitle: "교구별 신청 현황",
    },
    noticePage: {
      heroAlt: "서브페이지 배경",
      heroTitle: "공지사항",
      metaDescription:
        "WYD2027 서울 교구대회(DID) 공식 공지사항입니다. 신청 일정, 운영 안내, 교구대회 소식과 주요 업데이트를 확인하세요.",
      detailDescription: (title: string) =>
        `WYD2027 서울 교구대회(DID) 공지사항: ${title}. 신청 일정, 운영 안내, 교구대회 소식과 주요 업데이트를 확인하세요.`,
      breadcrumb: ["NOTICE /", "공지사항"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "공지사항", href: "/kr/notice" },
        { label: "후원사 소개", href: "/kr#sponsor" },
      ],
      pageTitle: "공지사항",
      noItems: "등록된 공지가 없습니다.",
      prevPage: "이전",
      nextPage: "다음",
      orderLabel: "번호",
      titleLabel: "제목",
      authorLabel: "작성자",
      dateLabel: "작성일",
      backToList: "목록으로",
    },
    introducePage: {
      heroAlt: "서브페이지 배경",
      heroTitle: "교구대회 소개",
      metaDescription:
        "WYD2027 서울 교구대회(DID) 소개 페이지입니다. Days in Diocese 일정, 한국 교구 프로그램, 교구 소개와 행사 흐름을 확인하세요.",
      breadcrumb: ["2027 DID /", "교구대회 소개"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "교구대회 소개", href: "/kr/introduce" },
        { label: "교구 소개", href: "/kr#map" },
      ],
      pageTitle: "2027 WYD 교구대회 소개",
      scheduleTitle: "2027 WYD 교구대회 일정",
      scheduleHeaders: [
        "7/29(목)",
        "7/30(금)",
        "7/31(토)",
        "8/1(일)",
        "8/2(월)",
      ],
      scheduleWelcome: "환영",
      scheduleProgram: "교구별 교구대회 프로그램 참여",
      scheduleProgramSub: "(전례, 교리교육, 지역 탐방 등)",
      scheduleFarewell: "환송",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
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
      title: "WYD2027 Seoul DID Official Website",
      description:
        "WYD2027 Seoul DID official website. Schedules, application, notices.",
      ogLocale: "en_US",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/en",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/en",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Sponsorship Inquiry",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Catholic Bishops' Conference of Korea",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "DID Menu",
      dialogDescription: "DID Navigation Menu",
      logoHref: "/en",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "About DID", href: "/en/introduce" },
            { label: "Diocese Info & Apply", href: "/en#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Announcements", href: "/en/notice" },
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
      welcomeText: "Welcome to the WYD2027 Seoul DID Official Website.",
      logoAriaLabel: "Diocese logos",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 Seoul DID",
      alt: "WYD2027 Seoul DID main image",
    },
    mainVerse: {
      lines: ["Take courage.", "I have conquered", "the world."],
      ref: "(John 16:33)",
      alt1: "WYD 2027 DID Main Image 1",
      alt2: "WYD 2027 DID Main Image 2",
    },
    mainNoticePopup: {
      brand: "2027 WYD SEOUL DID",
      title: "DID Application Notice",
      description:
        "Applications for Days in Diocese will open after approval from the Dicastery for the Laity, Family and Life.",
      hideToday: "Do not show today",
      close: "Close",
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
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "WYD 2027 Support Video",
    },
    applyPage: {
      heroAlt: "Sub page background",
      heroTitle: "DID Application",
      metaDescription:
        "DID application guide for WYD2027 Seoul Days in Diocese. Check available dioceses, application links, and how to move to each diocesan application page.",
      breadcrumb: ["Participate /", "Apply"],
      leftMenuTitle: "Participate",
      leftMenuItems: [{ label: "DID Application", href: "/en/apply" }],
      pageTitle: "DID Application",
      cardTitle: (name: string) => `${name} DID Application`,
      cardDesc: () => `Applications open from June 1st.`,
      rateLabel: "Application Rate",
      applyBtn: "Apply",
      applyUnavailable: "Applications are not open yet.",
      privacyDialogTitle:
        "Consent to Collection and Use of Personal Information",
      privacyDialogDesc:
        "Please review and agree to the following before applying for DID.",
      privacyDialogDetail:
        "1. Items Collected: Name, phone number, email, diocese affiliation, date of birth, gender\n2. Purpose: Processing and communicating about your 2027 WYD Seoul DID application\n3. Retention Period: Retained until 3 months after the event, then destroyed\n4. Right to Refuse: You may refuse consent; however, your DID application cannot be processed without consent.",
      privacyWarning:
        "⚠️ IMPORTANT: Please apply using a church domain email (@catholic.or.kr, etc.). Applications without a church domain email will be cancelled.",
      privacyAgreeLabel:
        "I agree to the collection and use of my personal information as described above.",
      privacyConfirmBtn: "Go to Application",
      privacyCancelBtn: "Cancel",
    },
    statusPage: {
      heroAlt: "Sub page background",
      heroTitle: "Application Status",
      metaDescription:
        "WYD2027 Seoul Days in Diocese application status by diocese. Check target numbers, current applicants, application rates, and participation progress.",
      breadcrumb: ["Participate /", "Status"],
      leftMenuTitle: "Participate",
      leftMenuItems: [{ label: "DID Application", href: "/en/apply" }],
      pageTitle: "Application Status",
    },
    noticePage: {
      heroAlt: "Sub page background",
      heroTitle: "Announcements",
      metaDescription:
        "Official notices for WYD2027 Seoul Days in Diocese. Check application schedules, operation guides, DID news, and important updates.",
      detailDescription: (title: string) =>
        `WYD2027 Seoul Days in Diocese announcement: ${title}. Read application schedules, operation guides, DID news, and important updates.`,
      breadcrumb: ["NOTICE /", "Announcements"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Announcements", href: "/en/notice" },
        { label: "Sponsors", href: "/en#sponsor" },
      ],
      pageTitle: "Announcements",
      noItems: "No announcements yet.",
      prevPage: "Prev",
      nextPage: "Next",
      orderLabel: "No.",
      titleLabel: "Title",
      authorLabel: "Author",
      dateLabel: "Date",
      backToList: "Back to List",
    },
    introducePage: {
      heroAlt: "Sub page background",
      heroTitle: "About DID",
      metaDescription:
        "About WYD2027 Seoul Days in Diocese. Learn about DID schedules, Korean diocesan programs, diocese information, and the event flow.",
      breadcrumb: ["2027 DID /", "About DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "About DID", href: "/en/introduce" },
        { label: "Diocese Info", href: "/en#map" },
      ],
      pageTitle: "2027 WYD Days in Diocese",
      scheduleTitle: "2027 WYD DID Schedule",
      scheduleHeaders: [
        "7/29(Thu)",
        "7/30(Fri)",
        "7/31(Sat)",
        "8/1(Sun)",
        "8/2(Mon)",
      ],
      scheduleWelcome: "Welcome",
      scheduleProgram: "Diocesan Program Participation",
      scheduleProgramSub: "(Liturgy, Catechesis, Local Tours, etc.)",
      scheduleFarewell: "Farewell",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Pause",
      playTitle: "Play",
      prevTitle: "Previous slide",
      nextTitle: "Next slide",
    },
  },

  es: {
    lang: "es",
    metadata: {
      title: "Sitio web oficial del DID de la JMJ 2027 Seúl (WYD2027)",
      description:
        "Sitio web oficial del DID (Days in Diocese) de la JMJ 2027 Seúl. Calendario, diócesis, inscripción y avisos.",
      ogLocale: "es_ES",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/es",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/es",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Consultas de patrocinio",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Conferencia Episcopal de Corea",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "Menú DID",
      dialogDescription: "Menú de navegación del DID",
      logoHref: "/es",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "Acerca del DID", href: "/es/introduce" },
            { label: "Diócesis e inscripción", href: "/es#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Avisos", href: "/es/notice" },
            { label: "Patrocinadores", href: "/es#sponsor" },
          ],
        },
        {
          title: "PARTICIPAR",
          items: [{ label: "Inscripción al DID", href: "/es/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "Bienvenidos al sitio web oficial del DID de la JMJ 2027 Seúl.",
      logoAriaLabel: "Logotipos de las diócesis",
    },
    mainSlide: {
      title: "WYD2027 · JMJ 2027 Seúl DID",
      alt: "Imagen principal del DID de la JMJ 2027 Seúl",
    },
    mainVerse: {
      lines: ["¡Ánimo!", "Yo he vencido", "al mundo."],
      ref: "(Jn 16,33)",
      alt1: "Imagen principal 1 del DID de la JMJ 2027",
      alt2: "Imagen principal 2 del DID de la JMJ 2027",
    },
    mainNoticePopup: {
      brand: "JMJ 2027 SEÚL DID",
      title: "Aviso sobre la inscripción al DID",
      description:
        "Las inscripciones para los Days in Diocese se abrirán tras la aprobación del Dicasterio para los Laicos, la Familia y la Vida.",
      hideToday: "No mostrar hoy",
      close: "Cerrar",
    },
    mapPage: {
      title: "Diócesis",
      subtitle: "(Haga clic en un marcador)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "Inscríbase al DiD",
      desc: "Consulte las diócesis disponibles en la página de inscripción e inscríbase de inmediato.",
      cta: "Ir a la inscripción",
      href: "/es/apply",
    },
    sponsorPage: {
      title: "Patrocinadores oficiales",
      inquiryTitle: "Consultas de patrocinio",
    },
    prayPage: {
      titleLine1: "JMJ Seúl 2027",
      titleLine2: "Ofrenda de mil millones de decenas del Rosario",
      groupTitle: "Participación en grupo",
      groupDescLine1: "Únase a la campaña de oración",
      groupDescLine2: "como grupo a través del sitio web de la JMJ.",
      individualTitle: "Participación individual",
      individualDescLine1: "Cualquier persona puede participar fácilmente",
      individualDescLine2: "en la campaña de oración.",
    },
    fightPage: {
      titleParts: [
        { text: "JMJ 2027", color: "#214D9D" },
        { text: " y los ", color: "black" },
        { text: "eventos diocesanos", color: "#E54A47" },
        { text: " ¡reciben todo nuestro apoyo! ", color: "black" },
        { text: "¡ÁNIMO ", color: "black" },
        { text: "JMJ 2027", color: "#214D9D" },
        { text: " y ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "Video de apoyo a la JMJ 2027",
    },
    applyPage: {
      heroAlt: "Fondo de la subpágina",
      heroTitle: "Inscripción al DID",
      metaDescription:
        "Guía de inscripción al DID de la JMJ 2027 Seúl (Days in Diocese). Consulte las diócesis disponibles, los enlaces de inscripción y cómo acceder a la página de cada diócesis.",
      breadcrumb: ["Participar /", "Inscripción"],
      leftMenuTitle: "Participar",
      leftMenuItems: [{ label: "Inscripción al DID", href: "/es/apply" }],
      pageTitle: "Inscripción al DID",
      cardTitle: (name: string) => `Inscripción al DID — ${name}`,
      cardDesc: () => `Inscripciones abiertas desde el 1 de junio.`,
      rateLabel: "Tasa de inscripción",
      applyBtn: "Inscribirse",
      applyUnavailable: "Las inscripciones aún no están abiertas.",
      privacyDialogTitle:
        "Consentimiento para la recopilación y el uso de datos personales",
      privacyDialogDesc:
        "Revise y acepte lo siguiente antes de inscribirse al DID.",
      privacyDialogDetail:
        "1. Datos recopilados: nombre, número de teléfono, correo electrónico, diócesis de pertenencia, fecha de nacimiento, sexo\n2. Finalidad: tramitación y comunicación de su inscripción al DID de la JMJ 2027 Seúl\n3. Período de conservación: hasta 3 meses después del evento; luego se eliminarán\n4. Derecho a rechazar: puede negarse a dar su consentimiento; sin embargo, sin él no podrá tramitarse su inscripción al DID.",
      privacyWarning:
        "⚠️ IMPORTANTE: Inscríbase con un correo electrónico de dominio eclesial (@catholic.or.kr, etc.). Las inscripciones sin correo de dominio eclesial serán canceladas.",
      privacyAgreeLabel:
        "Acepto la recopilación y el uso de mis datos personales según lo descrito.",
      privacyConfirmBtn: "Ir a la inscripción",
      privacyCancelBtn: "Cancelar",
    },
    statusPage: {
      heroAlt: "Fondo de la subpágina",
      heroTitle: "Estado de las inscripciones",
      metaDescription:
        "Estado de las inscripciones al DID de la JMJ 2027 Seúl por diócesis. Consulte las plazas objetivo, los inscritos actuales y el progreso de la participación.",
      breadcrumb: ["Participar /", "Estado"],
      leftMenuTitle: "Participar",
      leftMenuItems: [{ label: "Inscripción al DID", href: "/es/apply" }],
      pageTitle: "Estado de las inscripciones",
    },
    noticePage: {
      heroAlt: "Fondo de la subpágina",
      heroTitle: "Avisos",
      metaDescription:
        "Avisos oficiales del DID de la JMJ 2027 Seúl. Consulte el calendario de inscripciones, las guías operativas, las noticias del DID y las novedades.",
      detailDescription: (title: string) =>
        `Aviso del DID de la JMJ 2027 Seúl: ${title}. Consulte el calendario de inscripciones, las guías operativas, las noticias del DID y las novedades.`,
      breadcrumb: ["NOTICE /", "Avisos"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Avisos", href: "/es/notice" },
        { label: "Patrocinadores", href: "/es#sponsor" },
      ],
      pageTitle: "Avisos",
      noItems: "No hay avisos por el momento.",
      prevPage: "Anterior",
      nextPage: "Siguiente",
      orderLabel: "N.º",
      titleLabel: "Título",
      authorLabel: "Autor",
      dateLabel: "Fecha",
      backToList: "Volver a la lista",
    },
    introducePage: {
      heroAlt: "Fondo de la subpágina",
      heroTitle: "Acerca del DID",
      metaDescription:
        "Acerca del DID (Days in Diocese) de la JMJ 2027 Seúl. Conozca el calendario del DID, los programas diocesanos coreanos, las diócesis y el desarrollo del evento.",
      breadcrumb: ["2027 DID /", "Acerca del DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "Acerca del DID", href: "/es/introduce" },
        { label: "Diócesis", href: "/es#map" },
      ],
      pageTitle: "Days in Diocese de la JMJ 2027",
      scheduleTitle: "Calendario del DID de la JMJ 2027",
      scheduleHeaders: [
        "29/7 (jue)",
        "30/7 (vie)",
        "31/7 (sáb)",
        "1/8 (dom)",
        "2/8 (lun)",
      ],
      scheduleWelcome: "Bienvenida",
      scheduleProgram: "Participación en los programas diocesanos",
      scheduleProgramSub: "(Liturgia, catequesis, visitas locales, etc.)",
      scheduleFarewell: "Despedida",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Pausa",
      playTitle: "Reproducir",
      prevTitle: "Diapositiva anterior",
      nextTitle: "Diapositiva siguiente",
    },
  },

  fr: {
    lang: "fr",
    metadata: {
      title: "Site officiel du DID des JMJ 2027 Séoul (WYD2027)",
      description:
        "Site officiel du DID (Days in Diocese) des JMJ 2027 Séoul. Calendrier, diocèses, inscription et annonces.",
      ogLocale: "fr_FR",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/fr",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/fr",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Demandes de parrainage",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Conférence des évêques catholiques de Corée",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "Menu DID",
      dialogDescription: "Menu de navigation du DID",
      logoHref: "/fr",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "À propos du DID", href: "/fr/introduce" },
            { label: "Diocèses et inscription", href: "/fr#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Annonces", href: "/fr/notice" },
            { label: "Partenaires", href: "/fr#sponsor" },
          ],
        },
        {
          title: "PARTICIPER",
          items: [{ label: "Inscription au DID", href: "/fr/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "Bienvenue sur le site officiel du DID des JMJ 2027 Séoul.",
      logoAriaLabel: "Logos des diocèses",
    },
    mainSlide: {
      title: "WYD2027 · JMJ 2027 Séoul DID",
      alt: "Image principale du DID des JMJ 2027 Séoul",
    },
    mainVerse: {
      lines: ["Courage !", "Moi, je suis vainqueur", "du monde."],
      ref: "(Jn 16, 33)",
      alt1: "Image principale 1 du DID des JMJ 2027",
      alt2: "Image principale 2 du DID des JMJ 2027",
    },
    mainNoticePopup: {
      brand: "JMJ 2027 SÉOUL DID",
      title: "Avis concernant l'inscription au DID",
      description:
        "Les inscriptions aux Days in Diocese ouvriront après l'approbation du Dicastère pour les Laïcs, la Famille et la Vie.",
      hideToday: "Ne plus afficher aujourd'hui",
      close: "Fermer",
    },
    mapPage: {
      title: "Diocèses",
      subtitle: "(Cliquez sur un marqueur)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "S'inscrire au DiD",
      desc: "Consultez les diocèses disponibles sur la page d'inscription et inscrivez-vous immédiatement.",
      cta: "Aller à l'inscription",
      href: "/fr/apply",
    },
    sponsorPage: {
      title: "Partenaires officiels",
      inquiryTitle: "Demandes de parrainage",
    },
    prayPage: {
      titleLine1: "JMJ Séoul 2027",
      titleLine2: "Offrande d'un milliard de dizaines de chapelet",
      groupTitle: "Participation en groupe",
      groupDescLine1: "Rejoignez la campagne d'offrande",
      groupDescLine2: "en groupe via le site des JMJ.",
      individualTitle: "Participation individuelle",
      individualDescLine1: "Chacun peut facilement participer",
      individualDescLine2: "à la campagne d'offrande.",
    },
    fightPage: {
      titleParts: [
        { text: "JMJ 2027", color: "#214D9D" },
        { text: " et les ", color: "black" },
        { text: "événements diocésains", color: "#E54A47" },
        { text: " ont tout notre soutien ! ", color: "black" },
        { text: "COURAGE ", color: "black" },
        { text: "JMJ 2027", color: "#214D9D" },
        { text: " & ", color: "black" },
        { text: "DID !", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "Vidéo de soutien aux JMJ 2027",
    },
    applyPage: {
      heroAlt: "Arrière-plan de la sous-page",
      heroTitle: "Inscription au DID",
      metaDescription:
        "Guide d'inscription au DID des JMJ 2027 Séoul (Days in Diocese). Consultez les diocèses disponibles, les liens d'inscription et l'accès à la page de chaque diocèse.",
      breadcrumb: ["Participer /", "Inscription"],
      leftMenuTitle: "Participer",
      leftMenuItems: [{ label: "Inscription au DID", href: "/fr/apply" }],
      pageTitle: "Inscription au DID",
      cardTitle: (name: string) => `Inscription au DID — ${name}`,
      cardDesc: () => `Inscriptions ouvertes à partir du 1er juin.`,
      rateLabel: "Taux d'inscription",
      applyBtn: "S'inscrire",
      applyUnavailable: "Les inscriptions ne sont pas encore ouvertes.",
      privacyDialogTitle:
        "Consentement à la collecte et à l'utilisation des données personnelles",
      privacyDialogDesc:
        "Veuillez lire et accepter ce qui suit avant de vous inscrire au DID.",
      privacyDialogDetail:
        "1. Données collectées : nom, numéro de téléphone, e-mail, diocèse d'appartenance, date de naissance, sexe\n2. Finalité : traitement et suivi de votre inscription au DID des JMJ 2027 Séoul\n3. Durée de conservation : jusqu'à 3 mois après l'événement, puis suppression\n4. Droit de refus : vous pouvez refuser votre consentement ; toutefois, sans celui-ci, votre inscription au DID ne pourra pas être traitée.",
      privacyWarning:
        "⚠️ IMPORTANT : Veuillez vous inscrire avec une adresse e-mail de domaine ecclésial (@catholic.or.kr, etc.). Les inscriptions sans adresse de domaine ecclésial seront annulées.",
      privacyAgreeLabel:
        "J'accepte la collecte et l'utilisation de mes données personnelles telles que décrites ci-dessus.",
      privacyConfirmBtn: "Aller à l'inscription",
      privacyCancelBtn: "Annuler",
    },
    statusPage: {
      heroAlt: "Arrière-plan de la sous-page",
      heroTitle: "État des inscriptions",
      metaDescription:
        "État des inscriptions au DID des JMJ 2027 Séoul par diocèse. Consultez les objectifs, les inscrits actuels et l'avancement de la participation.",
      breadcrumb: ["Participer /", "État"],
      leftMenuTitle: "Participer",
      leftMenuItems: [{ label: "Inscription au DID", href: "/fr/apply" }],
      pageTitle: "État des inscriptions",
    },
    noticePage: {
      heroAlt: "Arrière-plan de la sous-page",
      heroTitle: "Annonces",
      metaDescription:
        "Annonces officielles du DID des JMJ 2027 Séoul. Consultez le calendrier des inscriptions, les guides pratiques, les nouvelles du DID et les mises à jour.",
      detailDescription: (title: string) =>
        `Annonce du DID des JMJ 2027 Séoul : ${title}. Consultez le calendrier des inscriptions, les guides pratiques, les nouvelles du DID et les mises à jour.`,
      breadcrumb: ["NOTICE /", "Annonces"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Annonces", href: "/fr/notice" },
        { label: "Partenaires", href: "/fr#sponsor" },
      ],
      pageTitle: "Annonces",
      noItems: "Aucune annonce pour le moment.",
      prevPage: "Préc.",
      nextPage: "Suiv.",
      orderLabel: "N°",
      titleLabel: "Titre",
      authorLabel: "Auteur",
      dateLabel: "Date",
      backToList: "Retour à la liste",
    },
    introducePage: {
      heroAlt: "Arrière-plan de la sous-page",
      heroTitle: "À propos du DID",
      metaDescription:
        "À propos du DID (Days in Diocese) des JMJ 2027 Séoul. Découvrez le calendrier du DID, les programmes diocésains coréens, les diocèses et le déroulement de l'événement.",
      breadcrumb: ["2027 DID /", "À propos du DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "À propos du DID", href: "/fr/introduce" },
        { label: "Diocèses", href: "/fr#map" },
      ],
      pageTitle: "Days in Diocese des JMJ 2027",
      scheduleTitle: "Calendrier du DID des JMJ 2027",
      scheduleHeaders: [
        "29/7 (jeu)",
        "30/7 (ven)",
        "31/7 (sam)",
        "1/8 (dim)",
        "2/8 (lun)",
      ],
      scheduleWelcome: "Accueil",
      scheduleProgram: "Participation aux programmes diocésains",
      scheduleProgramSub: "(Liturgie, catéchèse, visites locales, etc.)",
      scheduleFarewell: "Envoi",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Pause",
      playTitle: "Lecture",
      prevTitle: "Diapositive précédente",
      nextTitle: "Diapositive suivante",
    },
  },

  pt: {
    lang: "pt",
    metadata: {
      title: "Site oficial do DID da JMJ 2027 Seul (WYD2027)",
      description:
        "Site oficial do DID (Days in Diocese) da JMJ 2027 Seul. Calendário, dioceses, inscrição e avisos.",
      ogLocale: "pt_PT",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/pt",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/pt",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Contato para patrocínio",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Conferência Episcopal da Coreia",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "Menu DID",
      dialogDescription: "Menu de navegação do DID",
      logoHref: "/pt",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "Sobre o DID", href: "/pt/introduce" },
            { label: "Dioceses e inscrição", href: "/pt#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Avisos", href: "/pt/notice" },
            { label: "Patrocinadores", href: "/pt#sponsor" },
          ],
        },
        {
          title: "PARTICIPAR",
          items: [{ label: "Inscrição no DID", href: "/pt/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "Bem-vindos ao site oficial do DID da JMJ 2027 Seul.",
      logoAriaLabel: "Logotipos das dioceses",
    },
    mainSlide: {
      title: "WYD2027 · JMJ 2027 Seul DID",
      alt: "Imagem principal do DID da JMJ 2027 Seul",
    },
    mainVerse: {
      lines: ["Tende coragem:", "Eu venci", "o mundo."],
      ref: "(Jo 16,33)",
      alt1: "Imagem principal 1 do DID da JMJ 2027",
      alt2: "Imagem principal 2 do DID da JMJ 2027",
    },
    mainNoticePopup: {
      brand: "JMJ 2027 SEUL DID",
      title: "Aviso sobre a inscrição no DID",
      description:
        "As inscrições para os Days in Diocese serão abertas após a aprovação do Dicastério para os Leigos, a Família e a Vida.",
      hideToday: "Não mostrar hoje",
      close: "Fechar",
    },
    mapPage: {
      title: "Dioceses",
      subtitle: "(Clique em um marcador)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "Inscreva-se no DiD",
      desc: "Confira as dioceses disponíveis na página de inscrição e inscreva-se imediatamente.",
      cta: "Ir para a inscrição",
      href: "/pt/apply",
    },
    sponsorPage: {
      title: "Patrocinadores oficiais",
      inquiryTitle: "Contato para patrocínio",
    },
    prayPage: {
      titleLine1: "JMJ Seul 2027",
      titleLine2: "Oferta de um bilhão de dezenas do Rosário",
      groupTitle: "Participação em grupo",
      groupDescLine1: "Participe da campanha de oração",
      groupDescLine2: "em grupo pelo site da JMJ.",
      individualTitle: "Participação individual",
      individualDescLine1: "Qualquer pessoa pode participar facilmente",
      individualDescLine2: "da campanha de oração.",
    },
    fightPage: {
      titleParts: [
        { text: "JMJ 2027", color: "#214D9D" },
        { text: " e os ", color: "black" },
        { text: "eventos diocesanos", color: "#E54A47" },
        { text: " têm todo o nosso apoio! ", color: "black" },
        { text: "FORÇA ", color: "black" },
        { text: "JMJ 2027", color: "#214D9D" },
        { text: " e ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "Vídeo de apoio à JMJ 2027",
    },
    applyPage: {
      heroAlt: "Plano de fundo da subpágina",
      heroTitle: "Inscrição no DID",
      metaDescription:
        "Guia de inscrição no DID da JMJ 2027 Seul (Days in Diocese). Confira as dioceses disponíveis, os links de inscrição e como acessar a página de cada diocese.",
      breadcrumb: ["Participar /", "Inscrição"],
      leftMenuTitle: "Participar",
      leftMenuItems: [{ label: "Inscrição no DID", href: "/pt/apply" }],
      pageTitle: "Inscrição no DID",
      cardTitle: (name: string) => `Inscrição no DID — ${name}`,
      cardDesc: () => `Inscrições abertas a partir de 1º de junho.`,
      rateLabel: "Taxa de inscrição",
      applyBtn: "Inscrever-se",
      applyUnavailable: "As inscrições ainda não estão abertas.",
      privacyDialogTitle:
        "Consentimento para a coleta e o uso de dados pessoais",
      privacyDialogDesc:
        "Leia e aceite o seguinte antes de se inscrever no DID.",
      privacyDialogDetail:
        "1. Dados coletados: nome, número de telefone, e-mail, diocese de pertencimento, data de nascimento, sexo\n2. Finalidade: processamento e comunicação sobre sua inscrição no DID da JMJ 2027 Seul\n3. Período de retenção: até 3 meses após o evento; depois, serão eliminados\n4. Direito de recusa: você pode recusar o consentimento; porém, sem ele, sua inscrição no DID não poderá ser processada.",
      privacyWarning:
        "⚠️ IMPORTANTE: Inscreva-se com um e-mail de domínio eclesial (@catholic.or.kr etc.). Inscrições sem e-mail de domínio eclesial serão canceladas.",
      privacyAgreeLabel:
        "Concordo com a coleta e o uso dos meus dados pessoais conforme descrito acima.",
      privacyConfirmBtn: "Ir para a inscrição",
      privacyCancelBtn: "Cancelar",
    },
    statusPage: {
      heroAlt: "Plano de fundo da subpágina",
      heroTitle: "Status das inscrições",
      metaDescription:
        "Status das inscrições no DID da JMJ 2027 Seul por diocese. Confira as metas, os inscritos atuais e o progresso da participação.",
      breadcrumb: ["Participar /", "Status"],
      leftMenuTitle: "Participar",
      leftMenuItems: [{ label: "Inscrição no DID", href: "/pt/apply" }],
      pageTitle: "Status das inscrições",
    },
    noticePage: {
      heroAlt: "Plano de fundo da subpágina",
      heroTitle: "Avisos",
      metaDescription:
        "Avisos oficiais do DID da JMJ 2027 Seul. Confira o calendário de inscrições, os guias operacionais, as notícias do DID e as atualizações.",
      detailDescription: (title: string) =>
        `Aviso do DID da JMJ 2027 Seul: ${title}. Confira o calendário de inscrições, os guias operacionais, as notícias do DID e as atualizações.`,
      breadcrumb: ["NOTICE /", "Avisos"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Avisos", href: "/pt/notice" },
        { label: "Patrocinadores", href: "/pt#sponsor" },
      ],
      pageTitle: "Avisos",
      noItems: "Nenhum aviso no momento.",
      prevPage: "Anterior",
      nextPage: "Próximo",
      orderLabel: "Nº",
      titleLabel: "Título",
      authorLabel: "Autor",
      dateLabel: "Data",
      backToList: "Voltar à lista",
    },
    introducePage: {
      heroAlt: "Plano de fundo da subpágina",
      heroTitle: "Sobre o DID",
      metaDescription:
        "Sobre o DID (Days in Diocese) da JMJ 2027 Seul. Conheça o calendário do DID, os programas diocesanos coreanos, as dioceses e o desenrolar do evento.",
      breadcrumb: ["2027 DID /", "Sobre o DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "Sobre o DID", href: "/pt/introduce" },
        { label: "Dioceses", href: "/pt#map" },
      ],
      pageTitle: "Days in Diocese da JMJ 2027",
      scheduleTitle: "Calendário do DID da JMJ 2027",
      scheduleHeaders: [
        "29/7 (qui)",
        "30/7 (sex)",
        "31/7 (sáb)",
        "1/8 (dom)",
        "2/8 (seg)",
      ],
      scheduleWelcome: "Acolhida",
      scheduleProgram: "Participação nos programas diocesanos",
      scheduleProgramSub: "(Liturgia, catequese, passeios locais etc.)",
      scheduleFarewell: "Despedida",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Pausar",
      playTitle: "Reproduzir",
      prevTitle: "Slide anterior",
      nextTitle: "Próximo slide",
    },
  },

  it: {
    lang: "it",
    metadata: {
      title: "Sito ufficiale del DID della GMG 2027 Seoul (WYD2027)",
      description:
        "Sito ufficiale del DID (Days in Diocese) della GMG 2027 Seoul. Calendario, diocesi, iscrizioni e avvisi.",
      ogLocale: "it_IT",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/it",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/it",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Richieste di sponsorizzazione",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Conferenza Episcopale Coreana",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "Menu DID",
      dialogDescription: "Menu di navigazione del DID",
      logoHref: "/it",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "Informazioni sul DID", href: "/it/introduce" },
            { label: "Diocesi e iscrizione", href: "/it#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Avvisi", href: "/it/notice" },
            { label: "Sponsor", href: "/it#sponsor" },
          ],
        },
        {
          title: "PARTECIPA",
          items: [{ label: "Iscrizione al DID", href: "/it/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "Benvenuti nel sito ufficiale del DID della GMG 2027 Seoul.",
      logoAriaLabel: "Loghi delle diocesi",
    },
    mainSlide: {
      title: "WYD2027 · GMG 2027 Seoul DID",
      alt: "Immagine principale del DID della GMG 2027 Seoul",
    },
    mainVerse: {
      lines: ["Coraggio!", "Io ho vinto", "il mondo."],
      ref: "(Gv 16,33)",
      alt1: "Immagine principale 1 del DID della GMG 2027",
      alt2: "Immagine principale 2 del DID della GMG 2027",
    },
    mainNoticePopup: {
      brand: "GMG 2027 SEOUL DID",
      title: "Avviso sull'iscrizione al DID",
      description:
        "Le iscrizioni ai Days in Diocese apriranno dopo l'approvazione del Dicastero per i Laici, la Famiglia e la Vita.",
      hideToday: "Non mostrare più oggi",
      close: "Chiudi",
    },
    mapPage: {
      title: "Diocesi",
      subtitle: "(Clicca su un segnaposto)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "Iscriviti al DiD",
      desc: "Controlla le diocesi disponibili nella pagina di iscrizione e iscriviti subito.",
      cta: "Vai all'iscrizione",
      href: "/it/apply",
    },
    sponsorPage: {
      title: "Sponsor ufficiali",
      inquiryTitle: "Richieste di sponsorizzazione",
    },
    prayPage: {
      titleLine1: "GMG Seoul 2027",
      titleLine2: "Offerta di un miliardo di decine del Rosario",
      groupTitle: "Partecipazione di gruppo",
      groupDescLine1: "Partecipa alla campagna di preghiera",
      groupDescLine2: "come gruppo tramite il sito della GMG.",
      individualTitle: "Partecipazione individuale",
      individualDescLine1: "Chiunque può partecipare facilmente",
      individualDescLine2: "alla campagna di preghiera.",
    },
    fightPage: {
      titleParts: [
        { text: "GMG 2027", color: "#214D9D" },
        { text: " e gli ", color: "black" },
        { text: "eventi diocesani", color: "#E54A47" },
        { text: " hanno tutto il nostro sostegno! ", color: "black" },
        { text: "FORZA ", color: "black" },
        { text: "GMG 2027", color: "#214D9D" },
        { text: " e ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "Video di sostegno alla GMG 2027",
    },
    applyPage: {
      heroAlt: "Sfondo della sottopagina",
      heroTitle: "Iscrizione al DID",
      metaDescription:
        "Guida all'iscrizione al DID della GMG 2027 Seoul (Days in Diocese). Controlla le diocesi disponibili, i link di iscrizione e come accedere alla pagina di ogni diocesi.",
      breadcrumb: ["Partecipa /", "Iscrizione"],
      leftMenuTitle: "Partecipa",
      leftMenuItems: [{ label: "Iscrizione al DID", href: "/it/apply" }],
      pageTitle: "Iscrizione al DID",
      cardTitle: (name: string) => `Iscrizione al DID — ${name}`,
      cardDesc: () => `Iscrizioni aperte dal 1° giugno.`,
      rateLabel: "Tasso di iscrizione",
      applyBtn: "Iscriviti",
      applyUnavailable: "Le iscrizioni non sono ancora aperte.",
      privacyDialogTitle:
        "Consenso alla raccolta e all'uso dei dati personali",
      privacyDialogDesc:
        "Leggi e accetta quanto segue prima di iscriverti al DID.",
      privacyDialogDetail:
        "1. Dati raccolti: nome, numero di telefono, e-mail, diocesi di appartenenza, data di nascita, sesso\n2. Finalità: gestione e comunicazioni relative alla tua iscrizione al DID della GMG 2027 Seoul\n3. Periodo di conservazione: fino a 3 mesi dopo l'evento, poi i dati saranno eliminati\n4. Diritto di rifiuto: puoi rifiutare il consenso; tuttavia, senza di esso l'iscrizione al DID non potrà essere gestita.",
      privacyWarning:
        "⚠️ IMPORTANTE: Iscriviti con un'e-mail di dominio ecclesiale (@catholic.or.kr, ecc.). Le iscrizioni senza e-mail di dominio ecclesiale saranno annullate.",
      privacyAgreeLabel:
        "Acconsento alla raccolta e all'uso dei miei dati personali come descritto sopra.",
      privacyConfirmBtn: "Vai all'iscrizione",
      privacyCancelBtn: "Annulla",
    },
    statusPage: {
      heroAlt: "Sfondo della sottopagina",
      heroTitle: "Stato delle iscrizioni",
      metaDescription:
        "Stato delle iscrizioni al DID della GMG 2027 Seoul per diocesi. Controlla gli obiettivi, gli iscritti attuali e l'avanzamento della partecipazione.",
      breadcrumb: ["Partecipa /", "Stato"],
      leftMenuTitle: "Partecipa",
      leftMenuItems: [{ label: "Iscrizione al DID", href: "/it/apply" }],
      pageTitle: "Stato delle iscrizioni",
    },
    noticePage: {
      heroAlt: "Sfondo della sottopagina",
      heroTitle: "Avvisi",
      metaDescription:
        "Avvisi ufficiali del DID della GMG 2027 Seoul. Consulta il calendario delle iscrizioni, le guide operative, le notizie del DID e gli aggiornamenti.",
      detailDescription: (title: string) =>
        `Avviso del DID della GMG 2027 Seoul: ${title}. Consulta il calendario delle iscrizioni, le guide operative, le notizie del DID e gli aggiornamenti.`,
      breadcrumb: ["NOTICE /", "Avvisi"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Avvisi", href: "/it/notice" },
        { label: "Sponsor", href: "/it#sponsor" },
      ],
      pageTitle: "Avvisi",
      noItems: "Nessun avviso al momento.",
      prevPage: "Prec.",
      nextPage: "Succ.",
      orderLabel: "N.",
      titleLabel: "Titolo",
      authorLabel: "Autore",
      dateLabel: "Data",
      backToList: "Torna all'elenco",
    },
    introducePage: {
      heroAlt: "Sfondo della sottopagina",
      heroTitle: "Informazioni sul DID",
      metaDescription:
        "Informazioni sul DID (Days in Diocese) della GMG 2027 Seoul. Scopri il calendario del DID, i programmi diocesani coreani, le diocesi e lo svolgimento dell'evento.",
      breadcrumb: ["2027 DID /", "Informazioni sul DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "Informazioni sul DID", href: "/it/introduce" },
        { label: "Diocesi", href: "/it#map" },
      ],
      pageTitle: "Days in Diocese della GMG 2027",
      scheduleTitle: "Calendario del DID della GMG 2027",
      scheduleHeaders: [
        "29/7 (gio)",
        "30/7 (ven)",
        "31/7 (sab)",
        "1/8 (dom)",
        "2/8 (lun)",
      ],
      scheduleWelcome: "Accoglienza",
      scheduleProgram: "Partecipazione ai programmi diocesani",
      scheduleProgramSub: "(Liturgia, catechesi, visite locali, ecc.)",
      scheduleFarewell: "Congedo",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Pausa",
      playTitle: "Riproduci",
      prevTitle: "Diapositiva precedente",
      nextTitle: "Diapositiva successiva",
    },
  },

  pl: {
    lang: "pl",
    metadata: {
      title: "Oficjalna strona DID ŚDM 2027 w Seulu (WYD2027)",
      description:
        "Oficjalna strona DID (Days in Diocese) ŚDM 2027 w Seulu. Harmonogram, diecezje, zapisy i ogłoszenia.",
      ogLocale: "pl_PL",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/pl",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/pl",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Kontakt w sprawie sponsoringu",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Konferencja Episkopatu Korei",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "Menu DID",
      dialogDescription: "Menu nawigacyjne DID",
      logoHref: "/pl",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "O DID", href: "/pl/introduce" },
            { label: "Diecezje i zapisy", href: "/pl#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Ogłoszenia", href: "/pl/notice" },
            { label: "Sponsorzy", href: "/pl#sponsor" },
          ],
        },
        {
          title: "UDZIAŁ",
          items: [{ label: "Zapisy na DID", href: "/pl/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "Witamy na oficjalnej stronie DID ŚDM 2027 w Seulu.",
      logoAriaLabel: "Loga diecezji",
    },
    mainSlide: {
      title: "WYD2027 · ŚDM 2027 Seul DID",
      alt: "Główna grafika DID ŚDM 2027 w Seulu",
    },
    mainVerse: {
      lines: ["Odwagi!", "Ja zwyciężyłem", "świat."],
      ref: "(J 16,33)",
      alt1: "Główna grafika 1 DID ŚDM 2027",
      alt2: "Główna grafika 2 DID ŚDM 2027",
    },
    mainNoticePopup: {
      brand: "ŚDM 2027 SEUL DID",
      title: "Informacja o zapisach na DID",
      description:
        "Zapisy na Days in Diocese rozpoczną się po zatwierdzeniu przez Dykasterię ds. Świeckich, Rodziny i Życia.",
      hideToday: "Nie pokazuj dziś",
      close: "Zamknij",
    },
    mapPage: {
      title: "Diecezje",
      subtitle: "(Kliknij znacznik)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "Zapisz się na DiD",
      desc: "Sprawdź dostępne diecezje na stronie zapisów i zapisz się od razu.",
      cta: "Przejdź do zapisów",
      href: "/pl/apply",
    },
    sponsorPage: {
      title: "Oficjalni sponsorzy",
      inquiryTitle: "Kontakt w sprawie sponsoringu",
    },
    prayPage: {
      titleLine1: "ŚDM Seul 2027",
      titleLine2: "Ofiarowanie miliarda dziesiątek różańca",
      groupTitle: "Udział grupowy",
      groupDescLine1: "Dołącz do kampanii modlitewnej",
      groupDescLine2: "jako grupa przez stronę ŚDM.",
      individualTitle: "Udział indywidualny",
      individualDescLine1: "Każdy może łatwo włączyć się",
      individualDescLine2: "w kampanię modlitewną.",
    },
    fightPage: {
      titleParts: [
        { text: "ŚDM 2027", color: "#214D9D" },
        { text: " i ", color: "black" },
        { text: "wydarzenia diecezjalne", color: "#E54A47" },
        { text: " mają nasze pełne wsparcie! ", color: "black" },
        { text: "POWODZENIA ", color: "black" },
        { text: "ŚDM 2027", color: "#214D9D" },
        { text: " i ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "Wideo wsparcia ŚDM 2027",
    },
    applyPage: {
      heroAlt: "Tło podstrony",
      heroTitle: "Zapisy na DID",
      metaDescription:
        "Przewodnik po zapisach na DID ŚDM 2027 w Seulu (Days in Diocese). Sprawdź dostępne diecezje, linki do zapisów i przejście na stronę każdej diecezji.",
      breadcrumb: ["Udział /", "Zapisy"],
      leftMenuTitle: "Udział",
      leftMenuItems: [{ label: "Zapisy na DID", href: "/pl/apply" }],
      pageTitle: "Zapisy na DID",
      cardTitle: (name: string) => `Zapisy na DID — ${name}`,
      cardDesc: () => `Zapisy od 1 czerwca.`,
      rateLabel: "Wskaźnik zapisów",
      applyBtn: "Zapisz się",
      applyUnavailable: "Zapisy nie zostały jeszcze otwarte.",
      privacyDialogTitle:
        "Zgoda na zbieranie i wykorzystywanie danych osobowych",
      privacyDialogDesc:
        "Przed zapisaniem się na DID zapoznaj się z poniższymi informacjami i wyraź zgodę.",
      privacyDialogDetail:
        "1. Zbierane dane: imię i nazwisko, numer telefonu, e-mail, diecezja, data urodzenia, płeć\n2. Cel: obsługa i komunikacja dotycząca zapisu na DID ŚDM 2027 w Seulu\n3. Okres przechowywania: do 3 miesięcy po wydarzeniu, następnie usunięcie\n4. Prawo odmowy: możesz odmówić zgody, jednak bez niej zapis na DID nie będzie możliwy.",
      privacyWarning:
        "⚠️ WAŻNE: Zapisz się, używając adresu e-mail w domenie kościelnej (@catholic.or.kr itp.). Zgłoszenia bez kościelnej domeny e-mail zostaną anulowane.",
      privacyAgreeLabel:
        "Wyrażam zgodę na zbieranie i wykorzystywanie moich danych osobowych zgodnie z powyższym opisem.",
      privacyConfirmBtn: "Przejdź do zapisów",
      privacyCancelBtn: "Anuluj",
    },
    statusPage: {
      heroAlt: "Tło podstrony",
      heroTitle: "Stan zapisów",
      metaDescription:
        "Stan zapisów na DID ŚDM 2027 w Seulu według diecezji. Sprawdź cele, aktualną liczbę zapisanych i postęp uczestnictwa.",
      breadcrumb: ["Udział /", "Stan"],
      leftMenuTitle: "Udział",
      leftMenuItems: [{ label: "Zapisy na DID", href: "/pl/apply" }],
      pageTitle: "Stan zapisów",
    },
    noticePage: {
      heroAlt: "Tło podstrony",
      heroTitle: "Ogłoszenia",
      metaDescription:
        "Oficjalne ogłoszenia DID ŚDM 2027 w Seulu. Sprawdź harmonogram zapisów, informacje organizacyjne, wiadomości DID i aktualizacje.",
      detailDescription: (title: string) =>
        `Ogłoszenie DID ŚDM 2027 w Seulu: ${title}. Sprawdź harmonogram zapisów, informacje organizacyjne, wiadomości DID i aktualizacje.`,
      breadcrumb: ["NOTICE /", "Ogłoszenia"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Ogłoszenia", href: "/pl/notice" },
        { label: "Sponsorzy", href: "/pl#sponsor" },
      ],
      pageTitle: "Ogłoszenia",
      noItems: "Brak ogłoszeń.",
      prevPage: "Poprz.",
      nextPage: "Nast.",
      orderLabel: "Nr",
      titleLabel: "Tytuł",
      authorLabel: "Autor",
      dateLabel: "Data",
      backToList: "Powrót do listy",
    },
    introducePage: {
      heroAlt: "Tło podstrony",
      heroTitle: "O DID",
      metaDescription:
        "O DID (Days in Diocese) ŚDM 2027 w Seulu. Poznaj harmonogram DID, programy koreańskich diecezji, diecezje i przebieg wydarzenia.",
      breadcrumb: ["2027 DID /", "O DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "O DID", href: "/pl/introduce" },
        { label: "Diecezje", href: "/pl#map" },
      ],
      pageTitle: "Days in Diocese ŚDM 2027",
      scheduleTitle: "Harmonogram DID ŚDM 2027",
      scheduleHeaders: [
        "29.07 (czw)",
        "30.07 (pt)",
        "31.07 (sob)",
        "1.08 (niedz)",
        "2.08 (pon)",
      ],
      scheduleWelcome: "Powitanie",
      scheduleProgram: "Udział w programach diecezjalnych",
      scheduleProgramSub: "(Liturgia, katecheza, zwiedzanie okolicy itp.)",
      scheduleFarewell: "Pożegnanie",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Pauza",
      playTitle: "Odtwórz",
      prevTitle: "Poprzedni slajd",
      nextTitle: "Następny slajd",
    },
  },

  de: {
    lang: "de",
    metadata: {
      title: "Offizielle Website des DID zum WJT 2027 in Seoul (WYD2027)",
      description:
        "Offizielle Website des DID (Days in Diocese) zum WJT 2027 in Seoul. Termine, Diözesen, Anmeldung und Mitteilungen.",
      ogLocale: "de_DE",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/de",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/de",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Sponsoring-Anfragen",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Katholische Bischofskonferenz von Korea",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "DID-Menü",
      dialogDescription: "DID-Navigationsmenü",
      logoHref: "/de",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "Über das DID", href: "/de/introduce" },
            { label: "Diözesen & Anmeldung", href: "/de#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Mitteilungen", href: "/de/notice" },
            { label: "Sponsoren", href: "/de#sponsor" },
          ],
        },
        {
          title: "MITMACHEN",
          items: [{ label: "DID-Anmeldung", href: "/de/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "Willkommen auf der offiziellen Website des DID zum WJT 2027 in Seoul.",
      logoAriaLabel: "Logos der Diözesen",
    },
    mainSlide: {
      title: "WYD2027 · WJT 2027 Seoul DID",
      alt: "Hauptbild des DID zum WJT 2027 in Seoul",
    },
    mainVerse: {
      lines: ["Habt Mut:", "Ich habe die Welt", "besiegt."],
      ref: "(Joh 16,33)",
      alt1: "Hauptbild 1 des DID zum WJT 2027",
      alt2: "Hauptbild 2 des DID zum WJT 2027",
    },
    mainNoticePopup: {
      brand: "WJT 2027 SEOUL DID",
      title: "Hinweis zur DID-Anmeldung",
      description:
        "Die Anmeldung zu den Days in Diocese beginnt nach der Genehmigung durch das Dikasterium für die Laien, die Familie und das Leben.",
      hideToday: "Heute nicht mehr anzeigen",
      close: "Schließen",
    },
    mapPage: {
      title: "Diözesen",
      subtitle: "(Klicken Sie auf einen Marker)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "Zum DiD anmelden",
      desc: "Prüfen Sie die verfügbaren Diözesen auf der Anmeldeseite und melden Sie sich direkt an.",
      cta: "Zur Anmeldung",
      href: "/de/apply",
    },
    sponsorPage: {
      title: "Offizielle Sponsoren",
      inquiryTitle: "Sponsoring-Anfragen",
    },
    prayPage: {
      titleLine1: "WJT Seoul 2027",
      titleLine2: "Eine Milliarde Rosenkranzgesätze als Opfergabe",
      groupTitle: "Teilnahme als Gruppe",
      groupDescLine1: "Nehmen Sie als Gruppe über die",
      groupDescLine2: "WJT-Website an der Gebetsaktion teil.",
      individualTitle: "Einzelteilnahme",
      individualDescLine1: "Jeder kann ganz einfach",
      individualDescLine2: "an der Gebetsaktion teilnehmen.",
    },
    fightPage: {
      titleParts: [
        { text: "WJT 2027", color: "#214D9D" },
        { text: " und die ", color: "black" },
        { text: "diözesanen Veranstaltungen", color: "#E54A47" },
        { text: " haben unsere volle Unterstützung! ", color: "black" },
        { text: "VIEL ERFOLG ", color: "black" },
        { text: "WJT 2027", color: "#214D9D" },
        { text: " & ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "Unterstützungsvideo zum WJT 2027",
    },
    applyPage: {
      heroAlt: "Hintergrund der Unterseite",
      heroTitle: "DID-Anmeldung",
      metaDescription:
        "Anmeldeleitfaden für das DID zum WJT 2027 in Seoul (Days in Diocese). Prüfen Sie verfügbare Diözesen, Anmeldelinks und den Zugang zur Seite jeder Diözese.",
      breadcrumb: ["Mitmachen /", "Anmeldung"],
      leftMenuTitle: "Mitmachen",
      leftMenuItems: [{ label: "DID-Anmeldung", href: "/de/apply" }],
      pageTitle: "DID-Anmeldung",
      cardTitle: (name: string) => `DID-Anmeldung — ${name}`,
      cardDesc: () => `Anmeldung ab dem 1. Juni möglich.`,
      rateLabel: "Anmeldequote",
      applyBtn: "Anmelden",
      applyUnavailable: "Die Anmeldung ist noch nicht geöffnet.",
      privacyDialogTitle:
        "Einwilligung in die Erhebung und Nutzung personenbezogener Daten",
      privacyDialogDesc:
        "Bitte lesen und akzeptieren Sie Folgendes, bevor Sie sich zum DID anmelden.",
      privacyDialogDetail:
        "1. Erhobene Daten: Name, Telefonnummer, E-Mail, Diözese, Geburtsdatum, Geschlecht\n2. Zweck: Bearbeitung und Kommunikation zu Ihrer DID-Anmeldung zum WJT 2027 in Seoul\n3. Aufbewahrungsfrist: bis 3 Monate nach der Veranstaltung, danach Löschung\n4. Widerrufsrecht: Sie können die Einwilligung verweigern; ohne sie kann Ihre DID-Anmeldung jedoch nicht bearbeitet werden.",
      privacyWarning:
        "⚠️ WICHTIG: Bitte melden Sie sich mit einer kirchlichen Domain-E-Mail an (@catholic.or.kr usw.). Anmeldungen ohne kirchliche Domain-E-Mail werden storniert.",
      privacyAgreeLabel:
        "Ich stimme der Erhebung und Nutzung meiner personenbezogenen Daten wie oben beschrieben zu.",
      privacyConfirmBtn: "Zur Anmeldung",
      privacyCancelBtn: "Abbrechen",
    },
    statusPage: {
      heroAlt: "Hintergrund der Unterseite",
      heroTitle: "Anmeldestatus",
      metaDescription:
        "Anmeldestatus des DID zum WJT 2027 in Seoul nach Diözese. Prüfen Sie Zielzahlen, aktuelle Anmeldungen und den Fortschritt der Teilnahme.",
      breadcrumb: ["Mitmachen /", "Status"],
      leftMenuTitle: "Mitmachen",
      leftMenuItems: [{ label: "DID-Anmeldung", href: "/de/apply" }],
      pageTitle: "Anmeldestatus",
    },
    noticePage: {
      heroAlt: "Hintergrund der Unterseite",
      heroTitle: "Mitteilungen",
      metaDescription:
        "Offizielle Mitteilungen zum DID des WJT 2027 in Seoul. Prüfen Sie Anmeldetermine, organisatorische Hinweise, DID-Neuigkeiten und Aktualisierungen.",
      detailDescription: (title: string) =>
        `Mitteilung zum DID des WJT 2027 in Seoul: ${title}. Prüfen Sie Anmeldetermine, organisatorische Hinweise, DID-Neuigkeiten und Aktualisierungen.`,
      breadcrumb: ["NOTICE /", "Mitteilungen"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Mitteilungen", href: "/de/notice" },
        { label: "Sponsoren", href: "/de#sponsor" },
      ],
      pageTitle: "Mitteilungen",
      noItems: "Derzeit keine Mitteilungen.",
      prevPage: "Zurück",
      nextPage: "Weiter",
      orderLabel: "Nr.",
      titleLabel: "Titel",
      authorLabel: "Autor",
      dateLabel: "Datum",
      backToList: "Zurück zur Liste",
    },
    introducePage: {
      heroAlt: "Hintergrund der Unterseite",
      heroTitle: "Über das DID",
      metaDescription:
        "Über das DID (Days in Diocese) zum WJT 2027 in Seoul. Erfahren Sie mehr über den DID-Zeitplan, die Programme der koreanischen Diözesen, die Diözesen und den Ablauf.",
      breadcrumb: ["2027 DID /", "Über das DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "Über das DID", href: "/de/introduce" },
        { label: "Diözesen", href: "/de#map" },
      ],
      pageTitle: "Days in Diocese zum WJT 2027",
      scheduleTitle: "DID-Programm zum WJT 2027",
      scheduleHeaders: [
        "29.7. (Do)",
        "30.7. (Fr)",
        "31.7. (Sa)",
        "1.8. (So)",
        "2.8. (Mo)",
      ],
      scheduleWelcome: "Empfang",
      scheduleProgram: "Teilnahme an den Diözesanprogrammen",
      scheduleProgramSub: "(Liturgie, Katechese, lokale Ausflüge usw.)",
      scheduleFarewell: "Verabschiedung",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Pause",
      playTitle: "Abspielen",
      prevTitle: "Vorherige Folie",
      nextTitle: "Nächste Folie",
    },
  },

  zh: {
    lang: "zh-Hans",
    metadata: {
      title: "2027首尔世界青年日教区日（DID）官方网站",
      description:
        "2027首尔世界青年日教区日（DID）官方网站。查看日程、教区介绍、报名及公告。",
      ogLocale: "zh_CN",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/zh",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/zh",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "赞助咨询",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        { label: "韩国天主教主教团", href: "https://www.cbck.or.kr" },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "DID菜单",
      dialogDescription: "DID导航菜单",
      logoHref: "/zh",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "关于DID", href: "/zh/introduce" },
            { label: "教区介绍与报名", href: "/zh#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "公告", href: "/zh/notice" },
            { label: "赞助商", href: "/zh#sponsor" },
          ],
        },
        {
          title: "参与",
          items: [{ label: "DID报名", href: "/zh/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "欢迎访问2027首尔世界青年日教区日（DID）官方网站。",
      logoAriaLabel: "教区标志",
    },
    mainSlide: {
      title: "WYD2027 · 2027首尔世青 DID",
      alt: "2027首尔世界青年日教区日DID主图",
    },
    mainVerse: {
      lines: ["你们放心，", "我已战胜了世界。"],
      ref: "(若 16:33)",
      alt1: "2027世青教区日DID主图1",
      alt2: "2027世青教区日DID主图2",
    },
    mainNoticePopup: {
      brand: "2027 首尔世青 DID",
      title: "教区日报名通知",
      description:
        "教区日（Days in Diocese）的报名将在圣座平信徒、家庭和生命部批准后开始。",
      hideToday: "今日不再显示",
      close: "关闭",
    },
    mapPage: {
      title: "教区介绍",
      subtitle: "(请点击标记)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "报名参加DiD",
      desc: "在报名页面查看可参与的教区并立即报名。",
      cta: "前往报名页面",
      href: "/zh/apply",
    },
    sponsorPage: {
      title: "官方赞助商",
      inquiryTitle: "赞助咨询",
    },
    prayPage: {
      titleLine1: "2027首尔世界青年日",
      titleLine2: "奉献十亿端玫瑰经",
      groupTitle: "团体参与",
      groupDescLine1: "可以团体名义通过世青官网",
      groupDescLine2: "参与奉献活动。",
      individualTitle: "个人参与",
      individualDescLine1: "任何人都可以轻松",
      individualDescLine2: "参与奉献活动。",
    },
    fightPage: {
      titleParts: [
        { text: "2027世青", color: "#214D9D" },
        { text: " 和 ", color: "black" },
        { text: "教区日", color: "#E54A47" },
        { text: "，我们为你应援！ ", color: "black" },
        { text: "加油 ", color: "black" },
        { text: "2027世青", color: "#214D9D" },
        { text: " 与 ", color: "black" },
        { text: "DID！", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "2027世青应援视频",
    },
    applyPage: {
      heroAlt: "子页面背景",
      heroTitle: "DID报名",
      metaDescription:
        "2027首尔世界青年日教区日（DID）报名指南。查看各教区报名情况和报名链接，前往可参与教区的DID报名页面。",
      breadcrumb: ["参与 /", "报名"],
      leftMenuTitle: "参与",
      leftMenuItems: [{ label: "DID报名", href: "/zh/apply" }],
      pageTitle: "DID报名",
      cardTitle: (name: string) => `${name} DID报名`,
      cardDesc: () => `6月1日起开放报名。`,
      rateLabel: "报名率",
      applyBtn: "报名",
      applyUnavailable: "报名尚未开始。",
      privacyDialogTitle: "个人信息收集与使用同意",
      privacyDialogDesc: "报名DID前，请确认并同意以下内容。",
      privacyDialogDetail:
        "1. 收集项目：姓名、联系电话、电子邮箱、所属教区、出生日期、性别\n2. 收集目的：受理并通知2027首尔世界青年日教区日（DID）报名\n3. 保存期限：活动结束后保存3个月，随后销毁\n4. 拒绝同意的影响：您可以拒绝同意，但拒绝后将无法报名DID。",
      privacyWarning:
        "⚠️ 重要提示：请务必使用教会域名邮箱（@catholic.or.kr 等）报名。未使用教会域名邮箱的报名将被取消。",
      privacyAgreeLabel: "我同意上述个人信息的收集与使用。",
      privacyConfirmBtn: "前往报名页面",
      privacyCancelBtn: "取消",
    },
    statusPage: {
      heroAlt: "子页面背景",
      heroTitle: "各教区报名情况",
      metaDescription:
        "2027首尔世界青年日教区日（DID）各教区报名情况。查看各教区的目标人数、当前报名人数、报名率及参与进度。",
      breadcrumb: ["参与 /", "报名情况"],
      leftMenuTitle: "参与",
      leftMenuItems: [{ label: "DID报名", href: "/zh/apply" }],
      pageTitle: "各教区报名情况",
    },
    noticePage: {
      heroAlt: "子页面背景",
      heroTitle: "公告",
      metaDescription:
        "2027首尔世界青年日教区日（DID）官方公告。查看报名日程、运营指南、教区日消息及主要更新。",
      detailDescription: (title: string) =>
        `2027首尔世青教区日（DID）公告：${title}。查看报名日程、运营指南、教区日消息及主要更新。`,
      breadcrumb: ["NOTICE /", "公告"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "公告", href: "/zh/notice" },
        { label: "赞助商", href: "/zh#sponsor" },
      ],
      pageTitle: "公告",
      noItems: "暂无公告。",
      prevPage: "上一页",
      nextPage: "下一页",
      orderLabel: "编号",
      titleLabel: "标题",
      authorLabel: "作者",
      dateLabel: "日期",
      backToList: "返回列表",
    },
    introducePage: {
      heroAlt: "子页面背景",
      heroTitle: "关于DID",
      metaDescription:
        "2027首尔世界青年日教区日（DID）介绍页面。了解Days in Diocese日程、韩国各教区项目、教区介绍及活动流程。",
      breadcrumb: ["2027 DID /", "关于DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "关于DID", href: "/zh/introduce" },
        { label: "教区介绍", href: "/zh#map" },
      ],
      pageTitle: "2027世界青年日教区日",
      scheduleTitle: "2027世青教区日日程",
      scheduleHeaders: [
        "7/29(四)",
        "7/30(五)",
        "7/31(六)",
        "8/1(日)",
        "8/2(一)",
      ],
      scheduleWelcome: "欢迎",
      scheduleProgram: "参与各教区的教区日活动",
      scheduleProgramSub: "（礼仪、教理讲授、当地参访等）",
      scheduleFarewell: "欢送",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "暂停",
      playTitle: "播放",
      prevTitle: "上一张",
      nextTitle: "下一张",
    },
  },

  "zh-tw": {
    lang: "zh-Hant",
    metadata: {
      title: "2027首爾世界青年日教區日（DID）官方網站",
      description:
        "2027首爾世界青年日教區日（DID）官方網站。查看日程、教區介紹、報名及公告。",
      ogLocale: "zh_TW",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/zh-tw",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/zh-tw",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "贊助諮詢",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        { label: "韓國天主教主教團", href: "https://www.cbck.or.kr" },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "DID選單",
      dialogDescription: "DID導覽選單",
      logoHref: "/zh-tw",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "關於DID", href: "/zh-tw/introduce" },
            { label: "教區介紹與報名", href: "/zh-tw#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "公告", href: "/zh-tw/notice" },
            { label: "贊助商", href: "/zh-tw#sponsor" },
          ],
        },
        {
          title: "參與",
          items: [{ label: "DID報名", href: "/zh-tw/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "歡迎造訪2027首爾世界青年日教區日（DID）官方網站。",
      logoAriaLabel: "教區標誌",
    },
    mainSlide: {
      title: "WYD2027 · 2027首爾世青 DID",
      alt: "2027首爾世界青年日教區日DID主圖",
    },
    mainVerse: {
      lines: ["你們放心，", "我已戰勝了世界。"],
      ref: "(若 16:33)",
      alt1: "2027世青教區日DID主圖1",
      alt2: "2027世青教區日DID主圖2",
    },
    mainNoticePopup: {
      brand: "2027 首爾世青 DID",
      title: "教區日報名通知",
      description:
        "教區日（Days in Diocese）的報名將在聖座平信徒、家庭和生命部批准後開始。",
      hideToday: "今日不再顯示",
      close: "關閉",
    },
    mapPage: {
      title: "教區介紹",
      subtitle: "(請點擊標記)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "報名參加DiD",
      desc: "在報名頁面查看可參與的教區並立即報名。",
      cta: "前往報名頁面",
      href: "/zh-tw/apply",
    },
    sponsorPage: {
      title: "官方贊助商",
      inquiryTitle: "贊助諮詢",
    },
    prayPage: {
      titleLine1: "2027首爾世界青年日",
      titleLine2: "奉獻十億端玫瑰經",
      groupTitle: "團體參與",
      groupDescLine1: "可以團體名義透過世青官網",
      groupDescLine2: "參與奉獻活動。",
      individualTitle: "個人參與",
      individualDescLine1: "任何人都可以輕鬆",
      individualDescLine2: "參與奉獻活動。",
    },
    fightPage: {
      titleParts: [
        { text: "2027世青", color: "#214D9D" },
        { text: " 和 ", color: "black" },
        { text: "教區日", color: "#E54A47" },
        { text: "，我們為你應援！ ", color: "black" },
        { text: "加油 ", color: "black" },
        { text: "2027世青", color: "#214D9D" },
        { text: " 與 ", color: "black" },
        { text: "DID！", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "2027世青應援影片",
    },
    applyPage: {
      heroAlt: "子頁面背景",
      heroTitle: "DID報名",
      metaDescription:
        "2027首爾世界青年日教區日（DID）報名指南。查看各教區報名情況和報名連結，前往可參與教區的DID報名頁面。",
      breadcrumb: ["參與 /", "報名"],
      leftMenuTitle: "參與",
      leftMenuItems: [{ label: "DID報名", href: "/zh-tw/apply" }],
      pageTitle: "DID報名",
      cardTitle: (name: string) => `${name} DID報名`,
      cardDesc: () => `6月1日起開放報名。`,
      rateLabel: "報名率",
      applyBtn: "報名",
      applyUnavailable: "報名尚未開始。",
      privacyDialogTitle: "個人資料蒐集與使用同意",
      privacyDialogDesc: "報名DID前，請確認並同意以下內容。",
      privacyDialogDetail:
        "1. 蒐集項目：姓名、聯絡電話、電子郵件、所屬教區、出生日期、性別\n2. 蒐集目的：受理並通知2027首爾世界青年日教區日（DID）報名\n3. 保存期限：活動結束後保存3個月，隨後銷毀\n4. 拒絕同意的影響：您可以拒絕同意，但拒絕後將無法報名DID。",
      privacyWarning:
        "⚠️ 重要提示：請務必使用教會網域信箱（@catholic.or.kr 等）報名。未使用教會網域信箱的報名將被取消。",
      privacyAgreeLabel: "我同意上述個人資料的蒐集與使用。",
      privacyConfirmBtn: "前往報名頁面",
      privacyCancelBtn: "取消",
    },
    statusPage: {
      heroAlt: "子頁面背景",
      heroTitle: "各教區報名情況",
      metaDescription:
        "2027首爾世界青年日教區日（DID）各教區報名情況。查看各教區的目標人數、目前報名人數、報名率及參與進度。",
      breadcrumb: ["參與 /", "報名情況"],
      leftMenuTitle: "參與",
      leftMenuItems: [{ label: "DID報名", href: "/zh-tw/apply" }],
      pageTitle: "各教區報名情況",
    },
    noticePage: {
      heroAlt: "子頁面背景",
      heroTitle: "公告",
      metaDescription:
        "2027首爾世界青年日教區日（DID）官方公告。查看報名日程、營運指南、教區日消息及主要更新。",
      detailDescription: (title: string) =>
        `2027首爾世青教區日（DID）公告：${title}。查看報名日程、營運指南、教區日消息及主要更新。`,
      breadcrumb: ["NOTICE /", "公告"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "公告", href: "/zh-tw/notice" },
        { label: "贊助商", href: "/zh-tw#sponsor" },
      ],
      pageTitle: "公告",
      noItems: "暫無公告。",
      prevPage: "上一頁",
      nextPage: "下一頁",
      orderLabel: "編號",
      titleLabel: "標題",
      authorLabel: "作者",
      dateLabel: "日期",
      backToList: "返回列表",
    },
    introducePage: {
      heroAlt: "子頁面背景",
      heroTitle: "關於DID",
      metaDescription:
        "2027首爾世界青年日教區日（DID）介紹頁面。了解Days in Diocese日程、韓國各教區項目、教區介紹及活動流程。",
      breadcrumb: ["2027 DID /", "關於DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "關於DID", href: "/zh-tw/introduce" },
        { label: "教區介紹", href: "/zh-tw#map" },
      ],
      pageTitle: "2027世界青年日教區日",
      scheduleTitle: "2027世青教區日日程",
      scheduleHeaders: [
        "7/29(四)",
        "7/30(五)",
        "7/31(六)",
        "8/1(日)",
        "8/2(一)",
      ],
      scheduleWelcome: "歡迎",
      scheduleProgram: "參與各教區的教區日活動",
      scheduleProgramSub: "（禮儀、教理講授、當地參訪等）",
      scheduleFarewell: "歡送",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "暫停",
      playTitle: "播放",
      prevTitle: "上一張",
      nextTitle: "下一張",
    },
  },

  fil: {
    lang: "fil",
    metadata: {
      title: "Opisyal na Website ng DID ng WYD 2027 Seoul",
      description:
        "Opisyal na website ng DID (Days in Diocese) ng WYD 2027 Seoul. Iskedyul, mga diyosesis, aplikasyon, at mga abiso.",
      ogLocale: "tl_PH",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/fil",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/fil",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Para sa Sponsorship",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Catholic Bishops' Conference of Korea",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "Menu ng DID",
      dialogDescription: "Menu ng nabigasyon ng DID",
      logoHref: "/fil",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "Tungkol sa DID", href: "/fil/introduce" },
            { label: "Mga Diyosesis at Aplikasyon", href: "/fil#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Mga Abiso", href: "/fil/notice" },
            { label: "Mga Sponsor", href: "/fil#sponsor" },
          ],
        },
        {
          title: "SUMALI",
          items: [{ label: "Aplikasyon sa DID", href: "/fil/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "Maligayang pagdating sa opisyal na website ng DID ng WYD 2027 Seoul.",
      logoAriaLabel: "Mga logo ng diyosesis",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 Seoul DID",
      alt: "Pangunahing larawan ng DID ng WYD 2027 Seoul",
    },
    mainVerse: {
      lines: ["Lakasan ninyo ang loob!", "Napagtagumpayan ko na", "ang sanlibutan."],
      ref: "(Juan 16:33)",
      alt1: "Pangunahing larawan 1 ng DID ng WYD 2027",
      alt2: "Pangunahing larawan 2 ng DID ng WYD 2027",
    },
    mainNoticePopup: {
      brand: "2027 WYD SEOUL DID",
      title: "Abiso sa Aplikasyon sa DID",
      description:
        "Magbubukas ang aplikasyon para sa Days in Diocese matapos aprubahan ng Dicastery for the Laity, Family and Life.",
      hideToday: "Huwag ipakita ngayong araw",
      close: "Isara",
    },
    mapPage: {
      title: "Mga Diyosesis",
      subtitle: "(I-click ang marker)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "Mag-apply sa DiD",
      desc: "Tingnan ang mga available na diyosesis sa pahina ng aplikasyon at mag-apply agad.",
      cta: "Pumunta sa Aplikasyon",
      href: "/fil/apply",
    },
    sponsorPage: {
      title: "Mga Opisyal na Sponsor",
      inquiryTitle: "Para sa Sponsorship",
    },
    prayPage: {
      titleLine1: "WYD Seoul 2027",
      titleLine2: "Pag-aalay ng Isang Bilyong Dekada ng Rosaryo",
      groupTitle: "Pangkat na Pakikilahok",
      groupDescLine1: "Sumali sa kampanya ng panalangin",
      groupDescLine2: "bilang grupo sa website ng WYD.",
      individualTitle: "Indibidwal na Pakikilahok",
      individualDescLine1: "Madaling makakasali ang sinuman",
      individualDescLine2: "sa kampanya ng panalangin.",
    },
    fightPage: {
      titleParts: [
        { text: "WYD 2027", color: "#214D9D" },
        { text: " at ang ", color: "black" },
        { text: "mga gawaing pandiyosesis", color: "#E54A47" },
        { text: " ay sinusuportahan natin! ", color: "black" },
        { text: "CHEER UP ", color: "black" },
        { text: "WYD 2027", color: "#214D9D" },
        { text: " & ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "Video ng suporta sa WYD 2027",
    },
    applyPage: {
      heroAlt: "Background ng subpage",
      heroTitle: "Aplikasyon sa DID",
      metaDescription:
        "Gabay sa aplikasyon sa DID ng WYD 2027 Seoul (Days in Diocese). Tingnan ang mga available na diyosesis, mga link ng aplikasyon, at kung paano pumunta sa pahina ng bawat diyosesis.",
      breadcrumb: ["Sumali /", "Aplikasyon"],
      leftMenuTitle: "Sumali",
      leftMenuItems: [{ label: "Aplikasyon sa DID", href: "/fil/apply" }],
      pageTitle: "Aplikasyon sa DID",
      cardTitle: (name: string) => `Aplikasyon sa DID — ${name}`,
      cardDesc: () => `Bukas ang aplikasyon simula Hunyo 1.`,
      rateLabel: "Antas ng Aplikasyon",
      applyBtn: "Mag-apply",
      applyUnavailable: "Hindi pa bukas ang aplikasyon.",
      privacyDialogTitle:
        "Pahintulot sa Pangongolekta at Paggamit ng Personal na Impormasyon",
      privacyDialogDesc:
        "Basahin at sang-ayunan ang sumusunod bago mag-apply sa DID.",
      privacyDialogDetail:
        "1. Mga kinokolektang datos: pangalan, numero ng telepono, e-mail, diyosesis, petsa ng kapanganakan, kasarian\n2. Layunin: pagproseso at komunikasyon tungkol sa iyong aplikasyon sa DID ng WYD 2027 Seoul\n3. Panahon ng pag-iingat: hanggang 3 buwan pagkatapos ng event, pagkatapos ay buburahin\n4. Karapatang tumanggi: maaari kang tumanggi; ngunit kung walang pahintulot, hindi mapoproseso ang iyong aplikasyon sa DID.",
      privacyWarning:
        "⚠️ MAHALAGA: Mag-apply gamit ang e-mail na may church domain (@catholic.or.kr, atbp.). Kakanselahin ang mga aplikasyong walang church domain e-mail.",
      privacyAgreeLabel:
        "Sumasang-ayon ako sa pangongolekta at paggamit ng aking personal na impormasyon gaya ng inilarawan sa itaas.",
      privacyConfirmBtn: "Pumunta sa Aplikasyon",
      privacyCancelBtn: "Kanselahin",
    },
    statusPage: {
      heroAlt: "Background ng subpage",
      heroTitle: "Katayuan ng Aplikasyon",
      metaDescription:
        "Katayuan ng aplikasyon sa DID ng WYD 2027 Seoul ayon sa diyosesis. Tingnan ang target na bilang, kasalukuyang mga aplikante, at progreso ng pakikilahok.",
      breadcrumb: ["Sumali /", "Katayuan"],
      leftMenuTitle: "Sumali",
      leftMenuItems: [{ label: "Aplikasyon sa DID", href: "/fil/apply" }],
      pageTitle: "Katayuan ng Aplikasyon",
    },
    noticePage: {
      heroAlt: "Background ng subpage",
      heroTitle: "Mga Abiso",
      metaDescription:
        "Mga opisyal na abiso ng DID ng WYD 2027 Seoul. Tingnan ang iskedyul ng aplikasyon, mga gabay, balita ng DID, at mga update.",
      detailDescription: (title: string) =>
        `Abiso ng DID ng WYD 2027 Seoul: ${title}. Tingnan ang iskedyul ng aplikasyon, mga gabay, balita ng DID, at mga update.`,
      breadcrumb: ["NOTICE /", "Mga Abiso"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Mga Abiso", href: "/fil/notice" },
        { label: "Mga Sponsor", href: "/fil#sponsor" },
      ],
      pageTitle: "Mga Abiso",
      noItems: "Wala pang abiso.",
      prevPage: "Nakaraan",
      nextPage: "Susunod",
      orderLabel: "Blg.",
      titleLabel: "Pamagat",
      authorLabel: "May-akda",
      dateLabel: "Petsa",
      backToList: "Bumalik sa Listahan",
    },
    introducePage: {
      heroAlt: "Background ng subpage",
      heroTitle: "Tungkol sa DID",
      metaDescription:
        "Tungkol sa DID (Days in Diocese) ng WYD 2027 Seoul. Alamin ang iskedyul ng DID, mga programa ng mga diyosesis sa Korea, mga diyosesis, at daloy ng event.",
      breadcrumb: ["2027 DID /", "Tungkol sa DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "Tungkol sa DID", href: "/fil/introduce" },
        { label: "Mga Diyosesis", href: "/fil#map" },
      ],
      pageTitle: "Days in Diocese ng WYD 2027",
      scheduleTitle: "Iskedyul ng DID ng WYD 2027",
      scheduleHeaders: [
        "7/29 (Huw)",
        "7/30 (Biy)",
        "7/31 (Sab)",
        "8/1 (Lin)",
        "8/2 (Lun)",
      ],
      scheduleWelcome: "Pagsalubong",
      scheduleProgram: "Pakikilahok sa mga programang pandiyosesis",
      scheduleProgramSub: "(Liturhiya, katekesis, paglilibot sa lugar, atbp.)",
      scheduleFarewell: "Pamamaalam",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "I-pause",
      playTitle: "I-play",
      prevTitle: "Nakaraang slide",
      nextTitle: "Susunod na slide",
    },
  },

  ja: {
    lang: "ja",
    metadata: {
      title: "WYD2027ソウル大会 教区大会（DID）公式サイト",
      description:
        "WYD2027ソウル世界青年の日 教区大会（DID）公式サイト。日程、教区紹介、参加申込、お知らせをご確認ください。",
      ogLocale: "ja_JP",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/ja",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/ja",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "協賛のお問い合わせ",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        { label: "韓国カトリック司教協議会", href: "https://www.cbck.or.kr" },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "DIDメニュー",
      dialogDescription: "DIDナビゲーションメニュー",
      logoHref: "/ja",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "DIDについて", href: "/ja/introduce" },
            { label: "教区紹介・申込", href: "/ja#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "お知らせ", href: "/ja/notice" },
            { label: "協賛企業", href: "/ja#sponsor" },
          ],
        },
        {
          title: "参加",
          items: [{ label: "DID申込", href: "/ja/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "WYD2027ソウル大会 教区大会（DID）公式サイトへようこそ。",
      logoAriaLabel: "教区ロゴ一覧",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 ソウル DID",
      alt: "WYD2027ソウル教区大会DIDメイン画像",
    },
    mainVerse: {
      lines: ["勇気を出しなさい。", "わたしは既に", "世に勝っている。"],
      ref: "(ヨハネ 16・33)",
      alt1: "WYD 2027 DID メイン画像1",
      alt2: "WYD 2027 DID メイン画像2",
    },
    mainNoticePopup: {
      brand: "2027 WYD ソウル DID",
      title: "教区大会申込のご案内",
      description:
        "Days in Diocese（教区大会）の申込は、教皇庁信徒・家庭・いのちの部署の承認後に開始される予定です。",
      hideToday: "今日は表示しない",
      close: "閉じる",
    },
    mapPage: {
      title: "教区紹介",
      subtitle: "(マーカーをクリックしてください)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "DiDに申し込む",
      desc: "申込ページで参加可能な教区を確認し、すぐに申し込めます。",
      cta: "申込ページへ",
      href: "/ja/apply",
    },
    sponsorPage: {
      title: "公式スポンサー",
      inquiryTitle: "協賛のお問い合わせ",
    },
    prayPage: {
      titleLine1: "2027ソウル世界青年の日",
      titleLine2: "ロザリオ10億連の祈りの奉献",
      groupTitle: "団体での参加",
      groupDescLine1: "団体としてWYDサイトから",
      groupDescLine2: "祈りの奉献に参加できます。",
      individualTitle: "個人での参加",
      individualDescLine1: "どなたでも気軽に",
      individualDescLine2: "祈りの奉献に参加できます。",
    },
    fightPage: {
      titleParts: [
        { text: "2027 WYD", color: "#214D9D" },
        { text: " と ", color: "black" },
        { text: "教区大会", color: "#E54A47" },
        { text: " を応援しています！ ", color: "black" },
        { text: "がんばれ ", color: "black" },
        { text: "2027 WYD", color: "#214D9D" },
        { text: " ＆ ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "WYD 2027 応援動画",
    },
    applyPage: {
      heroAlt: "サブページ背景",
      heroTitle: "DID申込",
      metaDescription:
        "WYD2027ソウル教区大会（DID）の参加申込ガイドです。教区別の申込可否と申込リンクを確認し、参加可能な教区のDID申込ページへ進めます。",
      breadcrumb: ["参加 /", "申込"],
      leftMenuTitle: "参加",
      leftMenuItems: [{ label: "DID申込", href: "/ja/apply" }],
      pageTitle: "DID申込",
      cardTitle: (name: string) => `${name} DID申込`,
      cardDesc: () => `6月1日から申込可能です。`,
      rateLabel: "申込率",
      applyBtn: "申し込む",
      applyUnavailable: "まだ申込期間ではありません。",
      privacyDialogTitle: "個人情報の収集・利用への同意",
      privacyDialogDesc:
        "DID申込の前に、以下の内容をご確認のうえ同意してください。",
      privacyDialogDetail:
        "1. 収集項目：氏名、連絡先（携帯電話番号）、メールアドレス、所属教区、生年月日、性別\n2. 収集目的：2027ソウルWYD教区大会（DID）申込の受付および案内\n3. 保有・利用期間：行事終了後3か月まで保有し、その後廃棄\n4. 同意拒否時の不利益：同意を拒否できますが、その場合DIDの申込はできません。",
      privacyWarning:
        "⚠️ 重要：必ず教会ドメインのメールアドレス（@catholic.or.kr など）でお申し込みください。教会ドメイン以外のメールの場合、申込は取り消されます。",
      privacyAgreeLabel: "上記の個人情報の収集・利用に同意します。",
      privacyConfirmBtn: "申込ページへ",
      privacyCancelBtn: "キャンセル",
    },
    statusPage: {
      heroAlt: "サブページ背景",
      heroTitle: "教区別申込状況",
      metaDescription:
        "WYD2027ソウル教区大会（DID）の教区別申込状況ページです。各教区の目標人数、現在の申込人数、申込率と参加の進捗をご確認ください。",
      breadcrumb: ["参加 /", "申込状況"],
      leftMenuTitle: "参加",
      leftMenuItems: [{ label: "DID申込", href: "/ja/apply" }],
      pageTitle: "教区別申込状況",
    },
    noticePage: {
      heroAlt: "サブページ背景",
      heroTitle: "お知らせ",
      metaDescription:
        "WYD2027ソウル教区大会（DID）の公式お知らせです。申込日程、運営案内、教区大会のニュースと主な更新情報をご確認ください。",
      detailDescription: (title: string) =>
        `WYD2027ソウル教区大会（DID）お知らせ：${title}。申込日程、運営案内、教区大会のニュースと主な更新情報をご確認ください。`,
      breadcrumb: ["NOTICE /", "お知らせ"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "お知らせ", href: "/ja/notice" },
        { label: "協賛企業", href: "/ja#sponsor" },
      ],
      pageTitle: "お知らせ",
      noItems: "お知らせはまだありません。",
      prevPage: "前へ",
      nextPage: "次へ",
      orderLabel: "番号",
      titleLabel: "タイトル",
      authorLabel: "作成者",
      dateLabel: "作成日",
      backToList: "一覧へ戻る",
    },
    introducePage: {
      heroAlt: "サブページ背景",
      heroTitle: "DIDについて",
      metaDescription:
        "WYD2027ソウル教区大会（DID）の紹介ページです。Days in Dioceseの日程、韓国各教区のプログラム、教区紹介と行事の流れをご確認ください。",
      breadcrumb: ["2027 DID /", "DIDについて"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "DIDについて", href: "/ja/introduce" },
        { label: "教区紹介", href: "/ja#map" },
      ],
      pageTitle: "2027 WYD 教区大会のご紹介",
      scheduleTitle: "2027 WYD 教区大会日程",
      scheduleHeaders: [
        "7/29(木)",
        "7/30(金)",
        "7/31(土)",
        "8/1(日)",
        "8/2(月)",
      ],
      scheduleWelcome: "歓迎",
      scheduleProgram: "各教区の教区大会プログラムに参加",
      scheduleProgramSub: "（典礼、カテケージス、地域訪問など）",
      scheduleFarewell: "送別",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "一時停止",
      playTitle: "再生",
      prevTitle: "前のスライド",
      nextTitle: "次のスライド",
    },
  },

  vi: {
    lang: "vi",
    metadata: {
      title: "Trang web chính thức DID của ĐHGTTG 2027 Seoul (WYD2027)",
      description:
        "Trang web chính thức DID (Days in Diocese) của Đại hội Giới trẻ Thế giới 2027 Seoul. Lịch trình, các giáo phận, đăng ký và thông báo.",
      ogLocale: "vi_VN",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/vi",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/vi",
      address:
        "Address: Catholic Bishops' Conference of Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republic of Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Liên hệ tài trợ",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Hội đồng Giám mục Công giáo Hàn Quốc",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Copyright ⓒ WYD 2027 Seoul DID Official Website All rights reserved",
    },
    menu: {
      dialogTitle: "Menu DID",
      dialogDescription: "Menu điều hướng DID",
      logoHref: "/vi",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "Giới thiệu DID", href: "/vi/introduce" },
            { label: "Các giáo phận & đăng ký", href: "/vi#map" },
          ],
        },
        {
          title: "NOTICE",
          items: [
            { label: "Thông báo", href: "/vi/notice" },
            { label: "Nhà tài trợ", href: "/vi#sponsor" },
          ],
        },
        {
          title: "THAM GIA",
          items: [{ label: "Đăng ký DID", href: "/vi/apply" }],
        },
      ],
    },
    intro: {
      welcomeText:
        "Chào mừng đến với trang web chính thức DID của ĐHGTTG 2027 Seoul.",
      logoAriaLabel: "Logo các giáo phận",
    },
    mainSlide: {
      title: "WYD2027 · ĐHGTTG 2027 Seoul DID",
      alt: "Hình ảnh chính DID của ĐHGTTG 2027 Seoul",
    },
    mainVerse: {
      lines: ["Hãy can đảm lên!", "Thầy đã thắng", "thế gian."],
      ref: "(Ga 16,33)",
      alt1: "Hình ảnh chính 1 DID của ĐHGTTG 2027",
      alt2: "Hình ảnh chính 2 DID của ĐHGTTG 2027",
    },
    mainNoticePopup: {
      brand: "ĐHGTTG 2027 SEOUL DID",
      title: "Thông báo về việc đăng ký DID",
      description:
        "Việc đăng ký Days in Diocese sẽ bắt đầu sau khi được Bộ Giáo dân, Gia đình và Sự sống phê chuẩn.",
      hideToday: "Hôm nay không hiển thị lại",
      close: "Đóng",
    },
    mapPage: {
      title: "Các giáo phận",
      subtitle: "(Nhấp vào điểm đánh dấu)",
    },
    applyCta: {
      label: "DID APPLY",
      title: "Đăng ký DiD",
      desc: "Xem các giáo phận có thể tham gia trên trang đăng ký và đăng ký ngay.",
      cta: "Đến trang đăng ký",
      href: "/vi/apply",
    },
    sponsorPage: {
      title: "Nhà tài trợ chính thức",
      inquiryTitle: "Liên hệ tài trợ",
    },
    prayPage: {
      titleLine1: "ĐHGTTG Seoul 2027",
      titleLine2: "Dâng một tỷ chục kinh Mân Côi",
      groupTitle: "Tham gia theo nhóm",
      groupDescLine1: "Tham gia chiến dịch cầu nguyện",
      groupDescLine2: "theo nhóm qua trang web ĐHGTTG.",
      individualTitle: "Tham gia cá nhân",
      individualDescLine1: "Bất kỳ ai cũng có thể dễ dàng",
      individualDescLine2: "tham gia chiến dịch cầu nguyện.",
    },
    fightPage: {
      titleParts: [
        { text: "ĐHGTTG 2027", color: "#214D9D" },
        { text: " và ", color: "black" },
        { text: "các sự kiện giáo phận", color: "#E54A47" },
        { text: " luôn được chúng tôi cổ vũ! ", color: "black" },
        { text: "CỐ LÊN ", color: "black" },
        { text: "ĐHGTTG 2027", color: "#214D9D" },
        { text: " & ", color: "black" },
        { text: "DID!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Announcer"],
      personLabel2: ["Jung Seung-je", "Antonio", "Teacher"],
      personLabel3: ["Lee Bo-young", "Clara", "Teacher"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Sister"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Actress"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personAlt: "Video cổ vũ ĐHGTTG 2027",
    },
    applyPage: {
      heroAlt: "Nền trang con",
      heroTitle: "Đăng ký DID",
      metaDescription:
        "Hướng dẫn đăng ký DID của ĐHGTTG 2027 Seoul (Days in Diocese). Xem các giáo phận có thể tham gia, liên kết đăng ký và cách đến trang đăng ký của từng giáo phận.",
      breadcrumb: ["Tham gia /", "Đăng ký"],
      leftMenuTitle: "Tham gia",
      leftMenuItems: [{ label: "Đăng ký DID", href: "/vi/apply" }],
      pageTitle: "Đăng ký DID",
      cardTitle: (name: string) => `Đăng ký DID — ${name}`,
      cardDesc: () => `Mở đăng ký từ ngày 1 tháng 6.`,
      rateLabel: "Tỷ lệ đăng ký",
      applyBtn: "Đăng ký",
      applyUnavailable: "Chưa mở đăng ký.",
      privacyDialogTitle:
        "Đồng ý thu thập và sử dụng thông tin cá nhân",
      privacyDialogDesc:
        "Vui lòng đọc và đồng ý với nội dung sau trước khi đăng ký DID.",
      privacyDialogDetail:
        "1. Thông tin thu thập: họ tên, số điện thoại, e-mail, giáo phận trực thuộc, ngày sinh, giới tính\n2. Mục đích: tiếp nhận và thông báo về việc đăng ký DID của ĐHGTTG 2027 Seoul\n3. Thời gian lưu trữ: đến 3 tháng sau sự kiện, sau đó sẽ hủy\n4. Quyền từ chối: bạn có thể từ chối đồng ý; tuy nhiên, nếu từ chối thì không thể đăng ký DID.",
      privacyWarning:
        "⚠️ QUAN TRỌNG: Vui lòng đăng ký bằng e-mail thuộc tên miền của Giáo hội (@catholic.or.kr, v.v.). Đăng ký không dùng e-mail tên miền Giáo hội sẽ bị hủy.",
      privacyAgreeLabel:
        "Tôi đồng ý với việc thu thập và sử dụng thông tin cá nhân như mô tả ở trên.",
      privacyConfirmBtn: "Đến trang đăng ký",
      privacyCancelBtn: "Hủy",
    },
    statusPage: {
      heroAlt: "Nền trang con",
      heroTitle: "Tình trạng đăng ký",
      metaDescription:
        "Tình trạng đăng ký DID của ĐHGTTG 2027 Seoul theo giáo phận. Xem chỉ tiêu, số người đã đăng ký hiện tại và tiến độ tham gia.",
      breadcrumb: ["Tham gia /", "Tình trạng"],
      leftMenuTitle: "Tham gia",
      leftMenuItems: [{ label: "Đăng ký DID", href: "/vi/apply" }],
      pageTitle: "Tình trạng đăng ký",
    },
    noticePage: {
      heroAlt: "Nền trang con",
      heroTitle: "Thông báo",
      metaDescription:
        "Thông báo chính thức về DID của ĐHGTTG 2027 Seoul. Xem lịch đăng ký, hướng dẫn tổ chức, tin tức DID và các cập nhật quan trọng.",
      detailDescription: (title: string) =>
        `Thông báo DID của ĐHGTTG 2027 Seoul: ${title}. Xem lịch đăng ký, hướng dẫn tổ chức, tin tức DID và các cập nhật quan trọng.`,
      breadcrumb: ["NOTICE /", "Thông báo"],
      leftMenuTitle: "NOTICE",
      leftMenuItems: [
        { label: "Thông báo", href: "/vi/notice" },
        { label: "Nhà tài trợ", href: "/vi#sponsor" },
      ],
      pageTitle: "Thông báo",
      noItems: "Chưa có thông báo.",
      prevPage: "Trước",
      nextPage: "Sau",
      orderLabel: "Số",
      titleLabel: "Tiêu đề",
      authorLabel: "Tác giả",
      dateLabel: "Ngày",
      backToList: "Về danh sách",
    },
    introducePage: {
      heroAlt: "Nền trang con",
      heroTitle: "Giới thiệu DID",
      metaDescription:
        "Giới thiệu DID (Days in Diocese) của ĐHGTTG 2027 Seoul. Tìm hiểu lịch trình DID, các chương trình của giáo phận Hàn Quốc, các giáo phận và tiến trình sự kiện.",
      breadcrumb: ["2027 DID /", "Giới thiệu DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "Giới thiệu DID", href: "/vi/introduce" },
        { label: "Các giáo phận", href: "/vi#map" },
      ],
      pageTitle: "Days in Diocese của ĐHGTTG 2027",
      scheduleTitle: "Lịch trình DID của ĐHGTTG 2027",
      scheduleHeaders: [
        "29/7 (Th 5)",
        "30/7 (Th 6)",
        "31/7 (Th 7)",
        "1/8 (CN)",
        "2/8 (Th 2)",
      ],
      scheduleWelcome: "Chào đón",
      scheduleProgram: "Tham gia các chương trình của giáo phận",
      scheduleProgramSub: "(Phụng vụ, giáo lý, tham quan địa phương, v.v.)",
      scheduleFarewell: "Tiễn biệt",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Tạm dừng",
      playTitle: "Phát",
      prevTitle: "Slide trước",
      nextTitle: "Slide tiếp theo",
    },
  },
} as const;

export type Content = (typeof content)["kr"];
