export type Locale = "kr" | "en";

export const locales: Locale[] = ["kr", "en"];

export const content = {
  kr: {
    lang: "ko",
    metadata: {
      title: "WYD 2027 세계청년대회 교구대회 공식 홈페이지",
      description:
        "WYD 2027 서울 세계청년대회 교구대회 공식 사이트. 일정과 신청 정보를 안내합니다.",
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
      welcomeText: "WYD 2027 세계청년대회 교구대회 페이지에 오신 걸 환영합니다.",
      logoAriaLabel: "교구 로고 모음",
    },
    mainNoticePopup: {
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
      personAlt: "wyd did 응원영상",
    },
    applyPage: {
      heroAlt: "서브페이지 배경",
      heroTitle: "DID 신청",
      metaDescription:
        "WYD 2027 서울 DID 신청 안내. 교구별 신청 가능 여부와 현황을 확인하세요.",
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
        "WYD 2027 서울 DID 교구별 신청 현황과 참여 진행 상황을 확인하세요.",
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
        "WYD 2027 서울 DID 공지사항. 신청 일정과 운영 안내를 확인하세요.",
      detailDescription: (title: string) =>
        `WYD 2027 서울 교구대회(DID) 공지사항: ${title}. 신청 일정과 교구대회 운영 안내를 확인하세요.`,
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
        "WYD 2027 서울 DID 소개. 일정과 한국 16개 교구 정보를 안내합니다.",
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
      title: "WYD 2027 Seoul DID Official Website",
      description:
        "Official site for WYD 2027 Seoul DID with schedules and diocesan applications.",
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
      welcomeText: "Welcome to the WYD 2027 Seoul DID Official Website.",
      logoAriaLabel: "Diocese logos",
    },
    mainNoticePopup: {
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
      personAlt: "WYD 2027 Support Video",
    },
    applyPage: {
      heroAlt: "Sub page background",
      heroTitle: "DID Application",
      metaDescription:
        "Apply for WYD 2027 Seoul DID and check diocesan application status.",
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
        "View WYD 2027 Seoul DID application status by diocese.",
      breadcrumb: ["Participate /", "Status"],
      leftMenuTitle: "Participate",
      leftMenuItems: [{ label: "DID Application", href: "/en/apply" }],
      pageTitle: "Application Status",
    },
    noticePage: {
      heroAlt: "Sub page background",
      heroTitle: "Announcements",
      metaDescription:
        "Official WYD 2027 Seoul DID notices for schedules and event updates.",
      detailDescription: (title: string) =>
        `WYD 2027 Seoul DID announcement: ${title}. Read official application and event operation updates.`,
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
        "Learn about WYD 2027 Seoul DID schedules and diocesan programs.",
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
} as const;

export type Content = (typeof content)["kr"];
