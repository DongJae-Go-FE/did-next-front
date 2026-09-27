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
  | "vi"
  | "ar"
  | "ur"
  | "tr"
  | "id"
  | "ms";

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
  "ar",
  "ur",
  "tr",
  "id",
  "ms",
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
  ar: "العربية",
  ur: "اردو (پاکستان)",
  tr: "Türkçe",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
};

export const content = {
  ar: {
    lang: "ar",
    metadata: {
      title: "WYD DID | أيام الأبرشيات سيول 2027",
      description:
        "الموقع الرسمي لأيام الأبرشيات لليوم العالمي للشباب 2027 في سيول. تعرّف على الجدول والأبرشيات والتسجيل والإعلانات.",
      ogLocale: "ar_AR",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/ar",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/ar",
      address:
        "العنوان: مؤتمر الأساقفة الكاثوليك في كوريا، 74 ميونموك-رو، غوانغجين-غو، سيول 04918، جمهورية كوريا",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "استفسارات الرعاية",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "مؤتمر الأساقفة الكاثوليك في كوريا",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "حقوق النشر ⓒ الموقع الرسمي لأيام الأبرشيات WYD 2027 سيول. جميع الحقوق محفوظة",
    },
    menu: {
      dialogTitle: "قائمة DID",
      dialogDescription: "قائمة التنقل في DID",
      logoHref: "/ar",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "عن DID", href: "/ar/introduce" },
            { label: "معلومات الأبرشيات والتسجيل", href: "/ar#map" },
          ],
        },
        {
          title: "الإعلانات",
          items: [
            { label: "الإعلانات", href: "/ar/notice" },
            { label: "الأسئلة الشائعة", href: "/ar/faq" },
            { label: "الرعاة", href: "/ar#sponsor" },
          ],
        },
        {
          title: "المشاركة",
          items: [
            { label: "التسجيل في DID", href: "/ar/apply" },
            { label: "حالة التسجيل", href: "/ar/status" },
          ],
        },
      ],
    },
    intro: {
      welcomeText: "مرحبًا بكم في الموقع الرسمي لأيام الأبرشيات لليوم العالمي للشباب 2027 في سيول.",
      logoAriaLabel: "شعارات الأبرشيات",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 Seoul DID",
      alt: "الصورة الرئيسية لأيام الأبرشيات WYD2027 سيول",
    },
    mainVerse: {
      lines: ["تشجّعوا!", "أنا قد غلبت", "العالم."],
      ref: "(يوحنا 16:33)",
      alt1: "الصورة الرئيسية 1 لأيام الأبرشيات WYD 2027",
      alt2: "الصورة الرئيسية 2 لأيام الأبرشيات WYD 2027",
    },
    mainNoticePopup: {
      brand: "2027 WYD SEOUL DID",
      title: "إعلان التسجيل في DID",
      description:
        "سيُفتح التسجيل لأيام الأبرشيات بعد موافقة دائرة العلمانيين والعائلة والحياة.",
      hideToday: "عدم العرض اليوم",
      close: "إغلاق",
    },
    mapPage: {
      title: "معلومات الأبرشيات",
      subtitle: "(انقر على علامة)",
    },
    applyCta: {
      label: "التسجيل في DID",
      title: "سجّل في DID",
      desc: "تعرّف على الأبرشيات المتاحة في صفحة التسجيل وسجّل الآن.",
      cta: "الانتقال إلى التسجيل",
      href: "/ar/apply",
    },
    sponsorPage: {
      title: "الرعاة الرسميون",
      inquiryTitle: "استفسارات الرعاية",
    },
    prayPage: {
      titleLine1: "اليوم العالمي للشباب 2027 في سيول",
      titleLine2: "تقدمة مليار صلاة مسبحة وردية",
      groupTitle: "المشاركة الجماعية",
      groupDescLine1: "شاركوا في حملة الصلاة",
      groupDescLine2: "كمجموعة عبر موقع اليوم العالمي للشباب.",
      individualTitle: "المشاركة الفردية",
      individualDescLine1: "يمكن للجميع المشاركة بسهولة",
      individualDescLine2: "في حملة الصلاة.",
    },
    fightPage: {
      titleParts: [
        { text: "ندعم بكل قلوبنا ", color: "black" },
        { text: "اليوم العالمي للشباب سيول 2027", color: "#214D9D" },
        { text: " و", color: "black" },
        { text: "أيام الأبرشيات!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "مذيع"],
      personLabel2: ["Jung Seung-je", "Antonio", "معلّم"],
      personLabel3: ["Lee Bo-young", "Clara", "معلّم"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "راهبة"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "ممثلة"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personLabel11: ["Kang Tae-sun", "(رئيس BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "قائد أوركسترا"],
      personLabel17: ["Kim Ha-jong", "Fr. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "فيديو دعم اليوم العالمي للشباب 2027",
    },
    applyPage: {
      heroAlt: "خلفية الصفحة الفرعية",
      heroTitle: "التسجيل في DID",
      metaDescription:
        "دليل التسجيل في أيام الأبرشيات لليوم العالمي للشباب 2027 في سيول. تعرّف على الأبرشيات المتاحة وروابط التسجيل وكيفية الوصول إلى صفحة التسجيل لكل أبرشية.",
      breadcrumb: ["المشاركة /", "التسجيل"],
      leftMenuTitle: "المشاركة",
      leftMenuItems: [
        { label: "التسجيل في DID", href: "/ar/apply" },
        { label: "حالة التسجيل", href: "/ar/status" },
      ],
      pageTitle: "التسجيل في DID",
      cardTitle: (name: string) => "التسجيل في DID — " + name + "",
      cardDesc: () => "التسجيل مفتوح.",
      rateLabel: "نسبة التسجيل",
      applyBtn: "التسجيل",
      applyClosed: "التسجيل مغلق",
      applyUnavailable: "لم يُفتح التسجيل بعد.",
      privacyDialogTitle:
        "الموافقة على جمع المعلومات الشخصية واستخدامها",
      privacyDialogDesc:
        "يرجى مراجعة ما يلي والموافقة عليه قبل التسجيل في DID.",
      privacyDialogDetail:
        "1. المعلومات المجمعة: الاسم، رقم الهاتف، البريد الإلكتروني، الأبرشية، تاريخ الميلاد، الجنس\n2. الغرض: معالجة طلب التسجيل في أيام الأبرشيات لليوم العالمي للشباب سيول 2027 والتواصل بشأنه\n3. مدة الاحتفاظ: حتى 3 أشهر بعد الحدث، ثم تُتلف المعلومات\n4. حق الرفض: يمكنك رفض الموافقة، لكن لا يمكن معالجة طلب التسجيل دونها.",
      privacyWarning:
        "⚠️ هام: يرجى التسجيل باستخدام بريد إلكتروني تابع لنطاق كنسي (@catholic.or.kr، إلخ). ستُلغى الطلبات التي لا تستخدم بريدًا تابعًا لنطاق كنسي.",
      privacyAgreeLabel:
        "أوافق على جمع معلوماتي الشخصية واستخدامها على النحو الموضح أعلاه.",
      privacyConfirmBtn: "الانتقال إلى التسجيل",
      privacyCancelBtn: "إلغاء",
    },
    statusPage: {
      heroAlt: "خلفية الصفحة الفرعية",
      heroTitle: "حالة التسجيل",
      metaDescription:
        "حالة التسجيل في أيام الأبرشيات لليوم العالمي للشباب 2027 في سيول حسب الأبرشية. اطّلع على الأعداد المستهدفة وأعداد المسجلين ونسب التسجيل وتقدّم المشاركة.",
      breadcrumb: ["المشاركة /", "الحالة"],
      leftMenuTitle: "المشاركة",
      leftMenuItems: [
        { label: "التسجيل في DID", href: "/ar/apply" },
        { label: "حالة التسجيل", href: "/ar/status" },
      ],
      pageTitle: "حالة التسجيل",
    },
    noticePage: {
      heroAlt: "خلفية الصفحة الفرعية",
      heroTitle: "الإعلانات",
      metaDescription:
        "الإعلانات الرسمية لأيام الأبرشيات لليوم العالمي للشباب 2027 في سيول. اطّلع على مواعيد التسجيل والإرشادات وأخبار DID والتحديثات المهمة.",
      detailDescription: (title: string) => "إعلان أيام الأبرشيات WYD2027 سيول: " + title + ". مواعيد التسجيل والإرشادات والأخبار والتحديثات المهمة.",
      breadcrumb: ["الإعلانات /", "الإعلانات"],
      leftMenuTitle: "الإعلانات",
      leftMenuItems: [
        { label: "الإعلانات", href: "/ar/notice" },
        { label: "الأسئلة الشائعة", href: "/ar/faq" },
        { label: "الرعاة", href: "/ar#sponsor" },
      ],
      pageTitle: "الإعلانات",
      noItems: "لا توجد إعلانات بعد.",
      prevPage: "السابق",
      nextPage: "التالي",
      orderLabel: "الرقم",
      titleLabel: "العنوان",
      authorLabel: "الكاتب",
      dateLabel: "التاريخ",
      backToList: "العودة إلى القائمة",
    },
    introducePage: {
      heroAlt: "خلفية الصفحة الفرعية",
      heroTitle: "عن DID",
      metaDescription:
        "تعرّف على أيام الأبرشيات لليوم العالمي للشباب 2027 في سيول: الجدول وبرامج الأبرشيات الكورية ومعلومات الأبرشيات وسير الفعاليات.",
      breadcrumb: ["2027 DID /", "عن DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "عن DID", href: "/ar/introduce" },
        { label: "معلومات الأبرشيات", href: "/ar#map" },
      ],
      pageTitle: "أيام الأبرشيات لليوم العالمي للشباب 2027",
      scheduleTitle: "جدول أيام الأبرشيات لليوم العالمي للشباب 2027",
      scheduleHeaders: [
        "29 يوليو (الخميس)",
        "30 يوليو (الجمعة)",
        "31 يوليو (السبت)",
        "1 أغسطس (الأحد)",
        "2 أغسطس (الاثنين)",
      ],
      scheduleWelcome: "الترحيب",
      scheduleProgram: "المشاركة في برامج الأبرشية",
      scheduleProgramSub: "(الليتورجيا، التعليم المسيحي، الجولات المحلية، إلخ)",
      scheduleFarewell: "الوداع",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "إيقاف مؤقت",
      playTitle: "تشغيل",
      prevTitle: "الشريحة السابقة",
      nextTitle: "الشريحة التالية",
    },
  },
  ur: {
    lang: "ur-PK",
    metadata: {
      title: "WYD DID | سیول 2027 اسقفی ایام",
      description:
        "سیول عالمی یومِ نوجوانان 2027 کے اسقفی ایام کی سرکاری ویب سائٹ۔ شیڈول، اسقفی علاقوں، درخواستوں اور اعلانات کی معلومات حاصل کریں۔",
      ogLocale: "ur_PK",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/ur",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/ur",
      address:
        "پتا: کوریائی کیتھولک بشپس کانفرنس، 74 میونموک رو، گوانگجن گو، سیول 04918، جمہوریہ کوریا",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "سرپرستی کے بارے میں استفسار",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "کوریائی کیتھولک بشپس کانفرنس",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "حقوق اشاعت ⓒ WYD 2027 سیول DID کی سرکاری ویب سائٹ۔ جملہ حقوق محفوظ ہیں",
    },
    menu: {
      dialogTitle: "DID مینو",
      dialogDescription: "DID نیویگیشن مینو",
      logoHref: "/ur",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "DID کا تعارف", href: "/ur/introduce" },
            { label: "اسقفی علاقوں کی معلومات اور درخواست", href: "/ur#map" },
          ],
        },
        {
          title: "اعلانات",
          items: [
            { label: "اعلانات", href: "/ur/notice" },
            { label: "اکثر پوچھے گئے سوالات", href: "/ur/faq" },
            { label: "سرپرست", href: "/ur#sponsor" },
          ],
        },
        {
          title: "شرکت کریں",
          items: [
            { label: "DID کے لیے درخواست", href: "/ur/apply" },
            { label: "درخواستوں کی صورت حال", href: "/ur/status" },
          ],
        },
      ],
    },
    intro: {
      welcomeText: "سیول میں عالمی یومِ نوجوانان 2027 کے اسقفی ایام کی سرکاری ویب سائٹ پر خوش آمدید۔",
      logoAriaLabel: "اسقفی علاقوں کے لوگو",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 Seoul DID",
      alt: "WYD2027 سیول DID کی مرکزی تصویر",
    },
    mainVerse: {
      lines: ["حوصلہ رکھو!", "میں غالب آیا ہوں", "دنیا پر۔"],
      ref: "(یوحنا 16:33)",
      alt1: "WYD 2027 DID کی مرکزی تصویر 1",
      alt2: "WYD 2027 DID کی مرکزی تصویر 2",
    },
    mainNoticePopup: {
      brand: "2027 WYD SEOUL DID",
      title: "DID درخواست کا اعلان",
      description:
        "اسقفی ایام کے لیے درخواستیں عام مومنین، خاندان اور زندگی کی ڈکاسٹری کی منظوری کے بعد کھولی جائیں گی۔",
      hideToday: "آج دوبارہ نہ دکھائیں",
      close: "بند کریں",
    },
    mapPage: {
      title: "اسقفی علاقوں کی معلومات",
      subtitle: "(نقشے پر نشان منتخب کریں)",
    },
    applyCta: {
      label: "DID کے لیے درخواست",
      title: "DID کے لیے درخواست دیں",
      desc: "درخواست کے صفحے پر دستیاب اسقفی علاقے دیکھیں اور ابھی درخواست دیں۔",
      cta: "درخواست کے صفحے پر جائیں",
      href: "/ur/apply",
    },
    sponsorPage: {
      title: "سرکاری سرپرست",
      inquiryTitle: "سرپرستی کے بارے میں استفسار",
    },
    prayPage: {
      titleLine1: "سیول عالمی یومِ نوجوانان 2027",
      titleLine2: "ایک ارب دعائے روزری کا نذرانہ",
      groupTitle: "اجتماعی شرکت",
      groupDescLine1: "دعائیہ مہم میں شامل ہوں",
      groupDescLine2: "WYD ویب سائٹ کے ذریعے بطور گروپ۔",
      individualTitle: "انفرادی شرکت",
      individualDescLine1: "ہر کوئی آسانی سے شامل ہو سکتا ہے",
      individualDescLine2: "اس دعائیہ مہم میں۔",
    },
    fightPage: {
      titleParts: [
        { text: "ہم دل سے حمایت کرتے ہیں ", color: "black" },
        { text: "سیول عالمی یومِ نوجوانان 2027", color: "#214D9D" },
        { text: " اور ", color: "black" },
        { text: "اسقفی ایام کی!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "میزبان"],
      personLabel2: ["Jung Seung-je", "Antonio", "استاد"],
      personLabel3: ["Lee Bo-young", "Clara", "استاد"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "راہبہ"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "اداکارہ"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personLabel11: ["Kang Tae-sun", "(BYN Black Yak کے چیئرمین)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "آرکسٹرا کنڈکٹر"],
      personLabel17: ["Kim Ha-jong", "Fr. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "WYD 2027 کی حمایت کی ویڈیو",
    },
    applyPage: {
      heroAlt: "ذیلی صفحے کا پس منظر",
      heroTitle: "DID کے لیے درخواست",
      metaDescription:
        "سیول WYD2027 اسقفی ایام کے لیے درخواست کی رہنمائی۔ دستیاب اسقفی علاقے، درخواست کے لنکس اور ہر اسقفی علاقے کے درخواست صفحے تک رسائی دیکھیں۔",
      breadcrumb: ["شرکت /", "درخواست دیں"],
      leftMenuTitle: "شرکت",
      leftMenuItems: [
        { label: "DID کے لیے درخواست", href: "/ur/apply" },
        { label: "درخواستوں کی صورت حال", href: "/ur/status" },
      ],
      pageTitle: "DID کے لیے درخواست",
      cardTitle: (name: string) => "" + name + " DID کے لیے درخواست",
      cardDesc: () => "درخواستیں کھلی ہیں۔",
      rateLabel: "درخواستوں کی شرح",
      applyBtn: "درخواست دیں",
      applyClosed: "درخواستیں بند ہیں",
      applyUnavailable: "درخواستیں ابھی نہیں کھلی ہیں۔",
      privacyDialogTitle:
        "ذاتی معلومات جمع کرنے اور استعمال کرنے کی رضامندی",
      privacyDialogDesc:
        "DID کے لیے درخواست دینے سے پہلے درج ذیل پڑھیں اور رضامندی دیں۔",
      privacyDialogDetail:
        "1. جمع کی جانے والی معلومات: نام، فون نمبر، ای میل، اسقفی علاقہ، تاریخ پیدائش، جنس\n2. مقصد: سیول WYD 2027 اسقفی ایام کی درخواست پر کارروائی اور اس کے بارے میں رابطہ\n3. محفوظ رکھنے کی مدت: تقریب کے بعد 3 ماہ تک، پھر معلومات تلف کر دی جائیں گی\n4. انکار کا حق: آپ رضامندی سے انکار کر سکتے ہیں، مگر رضامندی کے بغیر درخواست پر کارروائی نہیں ہو سکتی۔",
      privacyWarning:
        "⚠️ اہم: چرچ کے ڈومین والا ای میل (@catholic.or.kr وغیرہ) استعمال کریں۔ ایسے ای میل کے بغیر درخواستیں منسوخ کر دی جائیں گی۔",
      privacyAgreeLabel:
        "میں اوپر بیان کردہ طریقے سے اپنی ذاتی معلومات جمع کرنے اور استعمال کرنے پر رضامند ہوں۔",
      privacyConfirmBtn: "درخواست کے صفحے پر جائیں",
      privacyCancelBtn: "منسوخ کریں",
    },
    statusPage: {
      heroAlt: "ذیلی صفحے کا پس منظر",
      heroTitle: "درخواستوں کی صورت حال",
      metaDescription:
        "سیول WYD2027 اسقفی ایام کی اسقفی علاقے کے لحاظ سے درخواستوں کی صورت حال۔ ہدف، موجودہ درخواست دہندگان، درخواستوں کی شرح اور شرکت کی پیش رفت دیکھیں۔",
      breadcrumb: ["شرکت /", "صورت حال"],
      leftMenuTitle: "شرکت",
      leftMenuItems: [
        { label: "DID کے لیے درخواست", href: "/ur/apply" },
        { label: "درخواستوں کی صورت حال", href: "/ur/status" },
      ],
      pageTitle: "درخواستوں کی صورت حال",
    },
    noticePage: {
      heroAlt: "ذیلی صفحے کا پس منظر",
      heroTitle: "اعلانات",
      metaDescription:
        "سیول WYD2027 اسقفی ایام کے سرکاری اعلانات۔ درخواستوں کے شیڈول، انتظامی ہدایات، DID کی خبروں اور اہم تازہ معلومات سے آگاہ رہیں۔",
      detailDescription: (title: string) => "سیول WYD2027 اسقفی ایام کا اعلان: " + title + "۔ درخواستوں کا شیڈول، انتظامی ہدایات، خبریں اور اہم تازہ معلومات دیکھیں۔",
      breadcrumb: ["اعلانات /", "اعلانات"],
      leftMenuTitle: "اعلانات",
      leftMenuItems: [
        { label: "اعلانات", href: "/ur/notice" },
        { label: "اکثر پوچھے گئے سوالات", href: "/ur/faq" },
        { label: "سرپرست", href: "/ur#sponsor" },
      ],
      pageTitle: "اعلانات",
      noItems: "ابھی کوئی اعلان نہیں ہے۔",
      prevPage: "پچھلا",
      nextPage: "اگلا",
      orderLabel: "نمبر",
      titleLabel: "عنوان",
      authorLabel: "مصنف",
      dateLabel: "تاریخ",
      backToList: "فہرست پر واپس جائیں",
    },
    introducePage: {
      heroAlt: "ذیلی صفحے کا پس منظر",
      heroTitle: "DID کا تعارف",
      metaDescription:
        "سیول WYD2027 اسقفی ایام کا تعارف۔ شیڈول، کوریائی اسقفی پروگراموں، اسقفی علاقوں کی معلومات اور تقریب کی ترتیب کے بارے میں جانیں۔",
      breadcrumb: ["2027 DID /", "DID کا تعارف"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "DID کا تعارف", href: "/ur/introduce" },
        { label: "اسقفی علاقوں کی معلومات", href: "/ur#map" },
      ],
      pageTitle: "عالمی یومِ نوجوانان 2027 کے اسقفی ایام",
      scheduleTitle: "WYD 2027 اسقفی ایام کا شیڈول",
      scheduleHeaders: [
        "29 جولائی (جمعرات)",
        "30 جولائی (جمعہ)",
        "31 جولائی (ہفتہ)",
        "1 اگست (اتوار)",
        "2 اگست (پیر)",
      ],
      scheduleWelcome: "خوش آمدید",
      scheduleProgram: "اسقفی پروگراموں میں شرکت",
      scheduleProgramSub: "(عبادت، دینی تعلیم، مقامی سیر وغیرہ)",
      scheduleFarewell: "الوداع",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "عارضی طور پر روکیں",
      playTitle: "چلائیں",
      prevTitle: "پچھلی سلائیڈ",
      nextTitle: "اگلی سلائیڈ",
    },
  },
  tr: {
    lang: "tr",
    metadata: {
      title: "WYD DID | 2027 Seul Piskoposluk Günleri",
      description:
        "2027 Seul Dünya Gençlik Günü Piskoposluk Günleri resmî web sitesi. Takvim, piskoposluklar, başvurular ve duyurular.",
      ogLocale: "tr_TR",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/tr",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/tr",
      address:
        "Adres: Kore Katolik Piskoposlar Konferansı, 74 Myeonmok-ro, Gwangjin-gu, Seul 04918, Kore Cumhuriyeti",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Sponsorluk İletişimi",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Kore Katolik Piskoposlar Konferansı",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Telif hakkı ⓒ WYD 2027 Seul DID Resmî Web Sitesi. Tüm hakları saklıdır",
    },
    menu: {
      dialogTitle: "DID Menüsü",
      dialogDescription: "DID Gezinme Menüsü",
      logoHref: "/tr",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "DID Hakkında", href: "/tr/introduce" },
            { label: "Piskoposluk Bilgileri ve Başvuru", href: "/tr#map" },
          ],
        },
        {
          title: "DUYURULAR",
          items: [
            { label: "Duyurular", href: "/tr/notice" },
            { label: "Sıkça Sorulan Sorular", href: "/tr/faq" },
            { label: "Sponsorlar", href: "/tr#sponsor" },
          ],
        },
        {
          title: "KATILIM",
          items: [
            { label: "DID Başvurusu", href: "/tr/apply" },
            { label: "Başvuru Durumu", href: "/tr/status" },
          ],
        },
      ],
    },
    intro: {
      welcomeText: "WYD2027 Seul DID resmî web sitesine hoş geldiniz.",
      logoAriaLabel: "Piskoposluk logoları",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 Seoul DID",
      alt: "WYD2027 Seul DID ana görseli",
    },
    mainVerse: {
      lines: ["Cesur olun!", "Ben dünyayı", "yendim."],
      ref: "(Yuhanna 16:33)",
      alt1: "WYD 2027 DID ana görseli 1",
      alt2: "WYD 2027 DID ana görseli 2",
    },
    mainNoticePopup: {
      brand: "2027 WYD SEOUL DID",
      title: "DID Başvuru Duyurusu",
      description:
        "Piskoposluk Günleri başvuruları Laikler, Aile ve Yaşam Dikasteryası'nın onayından sonra açılacaktır.",
      hideToday: "Bugün tekrar gösterme",
      close: "Kapat",
    },
    mapPage: {
      title: "Piskoposluk Bilgileri",
      subtitle: "(Bir işarete tıklayın)",
    },
    applyCta: {
      label: "DID BAŞVURUSU",
      title: "DID'ye Başvurun",
      desc: "Başvuru sayfasında uygun piskoposlukları inceleyin ve hemen başvurun.",
      cta: "Başvuruya Git",
      href: "/tr/apply",
    },
    sponsorPage: {
      title: "Resmî Sponsorlar",
      inquiryTitle: "Sponsorluk İletişimi",
    },
    prayPage: {
      titleLine1: "2027 Seul Dünya Gençlik Günü",
      titleLine2: "Bir Milyar Tespih Duası Sunusu",
      groupTitle: "Grup Katılımı",
      groupDescLine1: "Dua sunusu kampanyasına",
      groupDescLine2: "WYD web sitesi üzerinden grup olarak katılın.",
      individualTitle: "Bireysel Katılım",
      individualDescLine1: "Dua sunusu kampanyasına",
      individualDescLine2: "herkes kolayca katılabilir.",
    },
    fightPage: {
      titleParts: [
        { text: "Tüm kalbimizle destekliyoruz: ", color: "black" },
        { text: "WYD Seul 2027", color: "#214D9D" },
        { text: " ve ", color: "black" },
        { text: "Piskoposluk Günleri!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Sunucu"],
      personLabel2: ["Jung Seung-je", "Antonio", "Öğretmen"],
      personLabel3: ["Lee Bo-young", "Clara", "Öğretmen"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Rahibe"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Oyuncu"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personLabel11: ["Kang Tae-sun", "(BYN Black Yak Başkanı)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Orkestra Şefi"],
      personLabel17: ["Kim Ha-jong", "Fr. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "WYD 2027 destek videosu",
    },
    applyPage: {
      heroAlt: "Alt sayfa arka planı",
      heroTitle: "DID Başvurusu",
      metaDescription:
        "WYD2027 Seul Piskoposluk Günleri başvuru rehberi. Uygun piskoposlukları, başvuru bağlantılarını ve piskoposluk başvuru sayfalarına nasıl ulaşacağınızı inceleyin.",
      breadcrumb: ["Katılım /", "Başvur"],
      leftMenuTitle: "Katılım",
      leftMenuItems: [
        { label: "DID Başvurusu", href: "/tr/apply" },
        { label: "Başvuru Durumu", href: "/tr/status" },
      ],
      pageTitle: "DID Başvurusu",
      cardTitle: (name: string) => "" + name + " DID Başvurusu",
      cardDesc: () => "Başvurular açık.",
      rateLabel: "Başvuru Oranı",
      applyBtn: "Başvur",
      applyClosed: "Başvurular Kapandı",
      applyUnavailable: "Başvurular henüz açılmadı.",
      privacyDialogTitle:
        "Kişisel Bilgilerin Toplanması ve Kullanılmasına Onay",
      privacyDialogDesc:
        "DID'ye başvurmadan önce lütfen aşağıdakileri inceleyip onaylayın.",
      privacyDialogDetail:
        "1. Toplanan bilgiler: Ad, telefon numarası, e-posta, bağlı olunan piskoposluk, doğum tarihi, cinsiyet\n2. Amaç: 2027 WYD Seul DID başvurunuzun işlenmesi ve başvuruyla ilgili iletişim\n3. Saklama süresi: Etkinlikten sonraki 3 aya kadar saklanır, ardından imha edilir\n4. Reddetme hakkı: Onay vermeyi reddedebilirsiniz; ancak onay olmadan DID başvurunuz işleme alınamaz.",
      privacyWarning:
        "⚠️ ÖNEMLİ: Lütfen kilise alan adına ait bir e-posta (@catholic.or.kr vb.) kullanın. Böyle bir e-posta olmadan yapılan başvurular iptal edilecektir.",
      privacyAgreeLabel:
        "Kişisel bilgilerimin yukarıda belirtilen şekilde toplanmasını ve kullanılmasını kabul ediyorum.",
      privacyConfirmBtn: "Başvuruya Git",
      privacyCancelBtn: "İptal",
    },
    statusPage: {
      heroAlt: "Alt sayfa arka planı",
      heroTitle: "Başvuru Durumu",
      metaDescription:
        "WYD2027 Seul Piskoposluk Günleri için piskoposluklara göre başvuru durumu. Hedef sayıları, mevcut başvuruları, başvuru oranlarını ve katılım ilerlemesini inceleyin.",
      breadcrumb: ["Katılım /", "Durum"],
      leftMenuTitle: "Katılım",
      leftMenuItems: [
        { label: "DID Başvurusu", href: "/tr/apply" },
        { label: "Başvuru Durumu", href: "/tr/status" },
      ],
      pageTitle: "Başvuru Durumu",
    },
    noticePage: {
      heroAlt: "Alt sayfa arka planı",
      heroTitle: "Duyurular",
      metaDescription:
        "WYD2027 Seul Piskoposluk Günleri resmî duyuruları. Başvuru takvimlerini, uygulama rehberlerini, DID haberlerini ve önemli güncellemeleri inceleyin.",
      detailDescription: (title: string) => "WYD2027 Seul Piskoposluk Günleri duyurusu: " + title + ". Başvuru takvimleri, rehberler, haberler ve önemli güncellemeler.",
      breadcrumb: ["DUYURULAR /", "Duyurular"],
      leftMenuTitle: "DUYURULAR",
      leftMenuItems: [
        { label: "Duyurular", href: "/tr/notice" },
        { label: "Sıkça Sorulan Sorular", href: "/tr/faq" },
        { label: "Sponsorlar", href: "/tr#sponsor" },
      ],
      pageTitle: "Duyurular",
      noItems: "Henüz duyuru yok.",
      prevPage: "Önceki",
      nextPage: "Sonraki",
      orderLabel: "No.",
      titleLabel: "Başlık",
      authorLabel: "Yazar",
      dateLabel: "Tarih",
      backToList: "Listeye Dön",
    },
    introducePage: {
      heroAlt: "Alt sayfa arka planı",
      heroTitle: "DID Hakkında",
      metaDescription:
        "WYD2027 Seul Piskoposluk Günleri hakkında. DID takvimini, Kore piskoposluk programlarını, piskoposluk bilgilerini ve etkinlik akışını keşfedin.",
      breadcrumb: ["2027 DID /", "DID Hakkında"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "DID Hakkında", href: "/tr/introduce" },
        { label: "Piskoposluk Bilgileri", href: "/tr#map" },
      ],
      pageTitle: "2027 WYD Piskoposluk Günleri",
      scheduleTitle: "2027 WYD DID Takvimi",
      scheduleHeaders: [
        "29 Temmuz (Per)",
        "30 Temmuz (Cum)",
        "31 Temmuz (Cmt)",
        "1 Ağustos (Paz)",
        "2 Ağustos (Pzt)",
      ],
      scheduleWelcome: "Karşılama",
      scheduleProgram: "Piskoposluk Programlarına Katılım",
      scheduleProgramSub: "(Litürji, din eğitimi, yerel geziler vb.)",
      scheduleFarewell: "Uğurlama",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Duraklat",
      playTitle: "Oynat",
      prevTitle: "Önceki slayt",
      nextTitle: "Sonraki slayt",
    },
  },
  id: {
    lang: "id",
    metadata: {
      title: "WYD DID | Hari-hari di Keuskupan Seoul 2027",
      description:
        "Situs resmi Hari-hari di Keuskupan untuk Hari Orang Muda Sedunia 2027 Seoul. Informasi jadwal, keuskupan, pendaftaran, dan pengumuman.",
      ogLocale: "id_ID",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/id",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/id",
      address:
        "Alamat: Konferensi Waligereja Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republik Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Pertanyaan Sponsor",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Konferensi Waligereja Korea",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Hak cipta ⓒ Situs Resmi DID WYD 2027 Seoul. Seluruh hak dilindungi",
    },
    menu: {
      dialogTitle: "Menu DID",
      dialogDescription: "Menu Navigasi DID",
      logoHref: "/id",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "Tentang DID", href: "/id/introduce" },
            { label: "Informasi Keuskupan & Pendaftaran", href: "/id#map" },
          ],
        },
        {
          title: "PENGUMUMAN",
          items: [
            { label: "Pengumuman", href: "/id/notice" },
            { label: "Tanya Jawab", href: "/id/faq" },
            { label: "Sponsor", href: "/id#sponsor" },
          ],
        },
        {
          title: "BERPARTISIPASI",
          items: [
            { label: "Pendaftaran DID", href: "/id/apply" },
            { label: "Status Pendaftaran", href: "/id/status" },
          ],
        },
      ],
    },
    intro: {
      welcomeText: "Selamat datang di situs resmi DID WYD2027 Seoul.",
      logoAriaLabel: "Logo keuskupan",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 Seoul DID",
      alt: "Gambar utama DID WYD2027 Seoul",
    },
    mainVerse: {
      lines: ["Kuatkanlah hatimu!", "Aku telah mengalahkan", "dunia."],
      ref: "(Yohanes 16:33)",
      alt1: "Gambar utama DID WYD 2027 1",
      alt2: "Gambar utama DID WYD 2027 2",
    },
    mainNoticePopup: {
      brand: "2027 WYD SEOUL DID",
      title: "Pengumuman Pendaftaran DID",
      description:
        "Pendaftaran Hari-hari di Keuskupan akan dibuka setelah persetujuan Dikasteri untuk Awam, Keluarga, dan Kehidupan.",
      hideToday: "Jangan tampilkan hari ini",
      close: "Tutup",
    },
    mapPage: {
      title: "Informasi Keuskupan",
      subtitle: "(Klik penanda)",
    },
    applyCta: {
      label: "DAFTAR DID",
      title: "Daftar DID",
      desc: "Lihat keuskupan yang tersedia di halaman pendaftaran dan segera daftar.",
      cta: "Ke Pendaftaran",
      href: "/id/apply",
    },
    sponsorPage: {
      title: "Sponsor Resmi",
      inquiryTitle: "Pertanyaan Sponsor",
    },
    prayPage: {
      titleLine1: "Hari Orang Muda Sedunia 2027 Seoul",
      titleLine2: "Persembahan Satu Miliar Doa Rosario",
      groupTitle: "Partisipasi Kelompok",
      groupDescLine1: "Ikuti gerakan persembahan doa",
      groupDescLine2: "secara berkelompok melalui situs WYD.",
      individualTitle: "Partisipasi Perorangan",
      individualDescLine1: "Siapa pun dapat dengan mudah ikut",
      individualDescLine2: "dalam gerakan persembahan doa.",
    },
    fightPage: {
      titleParts: [
        { text: "Kami sepenuh hati mendukung ", color: "black" },
        { text: "WYD Seoul 2027", color: "#214D9D" },
        { text: " dan ", color: "black" },
        { text: "Hari-hari di Keuskupan!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Penyiar"],
      personLabel2: ["Jung Seung-je", "Antonio", "Pengajar"],
      personLabel3: ["Lee Bo-young", "Clara", "Pengajar"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Suster"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Aktris"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personLabel11: ["Kang Tae-sun", "(Ketua BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Dirigen"],
      personLabel17: ["Kim Ha-jong", "Fr. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Video dukungan WYD 2027",
    },
    applyPage: {
      heroAlt: "Latar belakang halaman",
      heroTitle: "Pendaftaran DID",
      metaDescription:
        "Panduan pendaftaran Hari-hari di Keuskupan WYD2027 Seoul. Lihat keuskupan yang tersedia, tautan pendaftaran, dan cara mengakses halaman pendaftaran setiap keuskupan.",
      breadcrumb: ["Partisipasi /", "Daftar"],
      leftMenuTitle: "Partisipasi",
      leftMenuItems: [
        { label: "Pendaftaran DID", href: "/id/apply" },
        { label: "Status Pendaftaran", href: "/id/status" },
      ],
      pageTitle: "Pendaftaran DID",
      cardTitle: (name: string) => "Pendaftaran DID " + name + "",
      cardDesc: () => "Pendaftaran dibuka.",
      rateLabel: "Persentase Pendaftaran",
      applyBtn: "Daftar",
      applyClosed: "Pendaftaran Ditutup",
      applyUnavailable: "Pendaftaran belum dibuka.",
      privacyDialogTitle:
        "Persetujuan Pengumpulan dan Penggunaan Informasi Pribadi",
      privacyDialogDesc:
        "Harap baca dan setujui ketentuan berikut sebelum mendaftar DID.",
      privacyDialogDetail:
        "1. Informasi yang dikumpulkan: Nama, nomor telepon, email, keuskupan, tanggal lahir, jenis kelamin\n2. Tujuan: Memproses dan berkomunikasi tentang pendaftaran DID WYD Seoul 2027 Anda\n3. Masa penyimpanan: Hingga 3 bulan setelah acara, kemudian dimusnahkan\n4. Hak menolak: Anda dapat menolak persetujuan, tetapi pendaftaran DID tidak dapat diproses tanpa persetujuan.",
      privacyWarning:
        "⚠️ PENTING: Gunakan email dengan domain gereja (@catholic.or.kr, dll.). Pendaftaran tanpa email domain gereja akan dibatalkan.",
      privacyAgreeLabel:
        "Saya menyetujui pengumpulan dan penggunaan informasi pribadi saya sebagaimana dijelaskan di atas.",
      privacyConfirmBtn: "Ke Pendaftaran",
      privacyCancelBtn: "Batal",
    },
    statusPage: {
      heroAlt: "Latar belakang halaman",
      heroTitle: "Status Pendaftaran",
      metaDescription:
        "Status pendaftaran Hari-hari di Keuskupan WYD2027 Seoul per keuskupan. Lihat target, jumlah pendaftar, persentase pendaftaran, dan perkembangan partisipasi.",
      breadcrumb: ["Partisipasi /", "Status"],
      leftMenuTitle: "Partisipasi",
      leftMenuItems: [
        { label: "Pendaftaran DID", href: "/id/apply" },
        { label: "Status Pendaftaran", href: "/id/status" },
      ],
      pageTitle: "Status Pendaftaran",
    },
    noticePage: {
      heroAlt: "Latar belakang halaman",
      heroTitle: "Pengumuman",
      metaDescription:
        "Pengumuman resmi Hari-hari di Keuskupan WYD2027 Seoul. Lihat jadwal pendaftaran, panduan pelaksanaan, berita DID, dan pembaruan penting.",
      detailDescription: (title: string) => "Pengumuman Hari-hari di Keuskupan WYD2027 Seoul: " + title + ". Jadwal pendaftaran, panduan, berita, dan pembaruan penting.",
      breadcrumb: ["PENGUMUMAN /", "Pengumuman"],
      leftMenuTitle: "PENGUMUMAN",
      leftMenuItems: [
        { label: "Pengumuman", href: "/id/notice" },
        { label: "Tanya Jawab", href: "/id/faq" },
        { label: "Sponsor", href: "/id#sponsor" },
      ],
      pageTitle: "Pengumuman",
      noItems: "Belum ada pengumuman.",
      prevPage: "Sebelumnya",
      nextPage: "Berikutnya",
      orderLabel: "No.",
      titleLabel: "Judul",
      authorLabel: "Penulis",
      dateLabel: "Tanggal",
      backToList: "Kembali ke Daftar",
    },
    introducePage: {
      heroAlt: "Latar belakang halaman",
      heroTitle: "Tentang DID",
      metaDescription:
        "Tentang Hari-hari di Keuskupan WYD2027 Seoul. Pelajari jadwal DID, program keuskupan Korea, informasi keuskupan, dan rangkaian acara.",
      breadcrumb: ["2027 DID /", "Tentang DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "Tentang DID", href: "/id/introduce" },
        { label: "Informasi Keuskupan", href: "/id#map" },
      ],
      pageTitle: "Hari-hari di Keuskupan WYD 2027",
      scheduleTitle: "Jadwal DID WYD 2027",
      scheduleHeaders: [
        "29 Juli (Kam)",
        "30 Juli (Jum)",
        "31 Juli (Sab)",
        "1 Agustus (Min)",
        "2 Agustus (Sen)",
      ],
      scheduleWelcome: "Penyambutan",
      scheduleProgram: "Partisipasi Program Keuskupan",
      scheduleProgramSub: "(Liturgi, katekese, wisata lokal, dll.)",
      scheduleFarewell: "Perpisahan",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Jeda",
      playTitle: "Putar",
      prevTitle: "Slide sebelumnya",
      nextTitle: "Slide berikutnya",
    },
  },
  ms: {
    lang: "ms",
    metadata: {
      title: "WYD DID | Hari-hari di Keuskupan Seoul 2027",
      description:
        "Laman web rasmi Hari-hari di Keuskupan untuk Hari Belia Sedunia 2027 Seoul. Maklumat jadual, keuskupan, pendaftaran dan pengumuman.",
      ogLocale: "ms_MY",
    },
    header: {
      logoAlt: "wyd did",
      homeHref: "/ms",
    },
    footer: {
      logoAlt: "DID",
      homeHref: "/ms",
      address:
        "Alamat: Persidangan Uskup Katolik Korea, 74 Myeonmok-ro, Gwangjin-gu, Seoul 04918, Republik Korea",
      email: "wyd2027did@cbck.kr",
      sponsorInquiry: "Pertanyaan Penajaan",
      sponsorEmail: "wyd2027did@cbck.kr",
      links: [
        { label: "WYD2027SEOUL", href: "https://wydseoul.org/" },
        {
          label: "Persidangan Uskup Katolik Korea",
          href: "https://www.cbck.or.kr",
        },
      ],
      copyright:
        "Hak cipta ⓒ Laman Web Rasmi DID WYD 2027 Seoul. Hak cipta terpelihara",
    },
    menu: {
      dialogTitle: "Menu DID",
      dialogDescription: "Menu Navigasi DID",
      logoHref: "/ms",
      sections: [
        {
          title: "2027 DID",
          items: [
            { label: "Tentang DID", href: "/ms/introduce" },
            { label: "Maklumat Keuskupan & Pendaftaran", href: "/ms#map" },
          ],
        },
        {
          title: "PENGUMUMAN",
          items: [
            { label: "Pengumuman", href: "/ms/notice" },
            { label: "Soalan Lazim", href: "/ms/faq" },
            { label: "Penaja", href: "/ms#sponsor" },
          ],
        },
        {
          title: "SERTAI",
          items: [
            { label: "Pendaftaran DID", href: "/ms/apply" },
            { label: "Status Pendaftaran", href: "/ms/status" },
          ],
        },
      ],
    },
    intro: {
      welcomeText: "Selamat datang ke laman web rasmi DID WYD2027 Seoul.",
      logoAriaLabel: "Logo keuskupan",
    },
    mainSlide: {
      title: "WYD2027 · WYD 2027 Seoul DID",
      alt: "Imej utama DID WYD2027 Seoul",
    },
    mainVerse: {
      lines: ["Tabahkanlah hatimu!", "Aku telah mengalahkan", "dunia."],
      ref: "(Yohanes 16:33)",
      alt1: "Imej utama DID WYD 2027 1",
      alt2: "Imej utama DID WYD 2027 2",
    },
    mainNoticePopup: {
      brand: "2027 WYD SEOUL DID",
      title: "Pengumuman Pendaftaran DID",
      description:
        "Pendaftaran Hari-hari di Keuskupan akan dibuka selepas kelulusan Dikasteri untuk Awam, Keluarga dan Kehidupan.",
      hideToday: "Jangan paparkan hari ini",
      close: "Tutup",
    },
    mapPage: {
      title: "Maklumat Keuskupan",
      subtitle: "(Klik penanda)",
    },
    applyCta: {
      label: "DAFTAR DID",
      title: "Daftar DID",
      desc: "Semak keuskupan yang tersedia di halaman pendaftaran dan daftar sekarang.",
      cta: "Ke Pendaftaran",
      href: "/ms/apply",
    },
    sponsorPage: {
      title: "Penaja Rasmi",
      inquiryTitle: "Pertanyaan Penajaan",
    },
    prayPage: {
      titleLine1: "Hari Belia Sedunia 2027 Seoul",
      titleLine2: "Persembahan Satu Bilion Doa Rosario",
      groupTitle: "Penyertaan Berkumpulan",
      groupDescLine1: "Sertai kempen persembahan doa",
      groupDescLine2: "secara berkumpulan melalui laman web WYD.",
      individualTitle: "Penyertaan Individu",
      individualDescLine1: "Sesiapa sahaja boleh menyertai",
      individualDescLine2: "kempen persembahan doa dengan mudah.",
    },
    fightPage: {
      titleParts: [
        { text: "Kami menyokong sepenuh hati ", color: "black" },
        { text: "WYD Seoul 2027", color: "#214D9D" },
        { text: " dan ", color: "black" },
        { text: "Hari-hari di Keuskupan!", color: "#E54A47" },
      ],
      personLabel: ["Son Suk-hee", "Marcellino", "Penyiar"],
      personLabel2: ["Jung Seung-je", "Antonio", "Guru"],
      personLabel3: ["Lee Bo-young", "Clara", "Guru"],
      personLabel4: ["Crying Nut"],
      personLabel5: ["Lee Hae-in", "Claudia", "Suster"],
      personLabel6: ["Alberto", "Mondi"],
      personLabel7: ["Son Sook", "Helena", "Pelakon"],
      personLabel8: ["Christina", "Confalonieri"],
      personLabel9: ["Bada", "Choi Sung-hee", "Vivianna"],
      personLabel10: ["Akiba Rie", "Clara"],
      personLabel11: ["Kang Tae-sun", "(Pengerusi BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Konduktor"],
      personLabel17: ["Kim Ha-jong", "Fr. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Video sokongan WYD 2027",
    },
    applyPage: {
      heroAlt: "Latar belakang subhalaman",
      heroTitle: "Pendaftaran DID",
      metaDescription:
        "Panduan pendaftaran Hari-hari di Keuskupan WYD2027 Seoul. Semak keuskupan yang tersedia, pautan pendaftaran dan cara mengakses halaman pendaftaran setiap keuskupan.",
      breadcrumb: ["Penyertaan /", "Daftar"],
      leftMenuTitle: "Penyertaan",
      leftMenuItems: [
        { label: "Pendaftaran DID", href: "/ms/apply" },
        { label: "Status Pendaftaran", href: "/ms/status" },
      ],
      pageTitle: "Pendaftaran DID",
      cardTitle: (name: string) => "Pendaftaran DID " + name + "",
      cardDesc: () => "Pendaftaran dibuka.",
      rateLabel: "Kadar Pendaftaran",
      applyBtn: "Daftar",
      applyClosed: "Pendaftaran Ditutup",
      applyUnavailable: "Pendaftaran belum dibuka.",
      privacyDialogTitle:
        "Persetujuan Pengumpulan dan Penggunaan Maklumat Peribadi",
      privacyDialogDesc:
        "Sila baca dan setujui perkara berikut sebelum mendaftar DID.",
      privacyDialogDetail:
        "1. Maklumat dikumpulkan: Nama, nombor telefon, e-mel, keuskupan, tarikh lahir, jantina\n2. Tujuan: Memproses dan berkomunikasi tentang pendaftaran DID WYD Seoul 2027 anda\n3. Tempoh penyimpanan: Sehingga 3 bulan selepas acara, kemudian dimusnahkan\n4. Hak menolak: Anda boleh menolak persetujuan, tetapi pendaftaran DID tidak boleh diproses tanpa persetujuan.",
      privacyWarning:
        "⚠️ PENTING: Sila gunakan e-mel berdomain gereja (@catholic.or.kr dan sebagainya). Pendaftaran tanpa e-mel berdomain gereja akan dibatalkan.",
      privacyAgreeLabel:
        "Saya bersetuju dengan pengumpulan dan penggunaan maklumat peribadi saya seperti yang dinyatakan di atas.",
      privacyConfirmBtn: "Ke Pendaftaran",
      privacyCancelBtn: "Batal",
    },
    statusPage: {
      heroAlt: "Latar belakang subhalaman",
      heroTitle: "Status Pendaftaran",
      metaDescription:
        "Status pendaftaran Hari-hari di Keuskupan WYD2027 Seoul mengikut keuskupan. Semak sasaran, jumlah pendaftar, kadar pendaftaran dan perkembangan penyertaan.",
      breadcrumb: ["Penyertaan /", "Status"],
      leftMenuTitle: "Penyertaan",
      leftMenuItems: [
        { label: "Pendaftaran DID", href: "/ms/apply" },
        { label: "Status Pendaftaran", href: "/ms/status" },
      ],
      pageTitle: "Status Pendaftaran",
    },
    noticePage: {
      heroAlt: "Latar belakang subhalaman",
      heroTitle: "Pengumuman",
      metaDescription:
        "Pengumuman rasmi Hari-hari di Keuskupan WYD2027 Seoul. Semak jadual pendaftaran, panduan pelaksanaan, berita DID dan kemas kini penting.",
      detailDescription: (title: string) => "Pengumuman Hari-hari di Keuskupan WYD2027 Seoul: " + title + ". Jadual pendaftaran, panduan, berita dan kemas kini penting.",
      breadcrumb: ["PENGUMUMAN /", "Pengumuman"],
      leftMenuTitle: "PENGUMUMAN",
      leftMenuItems: [
        { label: "Pengumuman", href: "/ms/notice" },
        { label: "Soalan Lazim", href: "/ms/faq" },
        { label: "Penaja", href: "/ms#sponsor" },
      ],
      pageTitle: "Pengumuman",
      noItems: "Belum ada pengumuman.",
      prevPage: "Sebelumnya",
      nextPage: "Seterusnya",
      orderLabel: "No.",
      titleLabel: "Tajuk",
      authorLabel: "Penulis",
      dateLabel: "Tarikh",
      backToList: "Kembali ke Senarai",
    },
    introducePage: {
      heroAlt: "Latar belakang subhalaman",
      heroTitle: "Tentang DID",
      metaDescription:
        "Tentang Hari-hari di Keuskupan WYD2027 Seoul. Ketahui jadual DID, program keuskupan Korea, maklumat keuskupan dan perjalanan acara.",
      breadcrumb: ["2027 DID /", "Tentang DID"],
      leftMenuTitle: "2027 DID",
      leftMenuItems: [
        { label: "Tentang DID", href: "/ms/introduce" },
        { label: "Maklumat Keuskupan", href: "/ms#map" },
      ],
      pageTitle: "Hari-hari di Keuskupan WYD 2027",
      scheduleTitle: "Jadual DID WYD 2027",
      scheduleHeaders: [
        "29 Julai (Kha)",
        "30 Julai (Jum)",
        "31 Julai (Sab)",
        "1 Ogos (Ahd)",
        "2 Ogos (Isn)",
      ],
      scheduleWelcome: "Sambutan",
      scheduleProgram: "Penyertaan Program Keuskupan",
      scheduleProgramSub: "(Liturgi, katekese, lawatan tempatan dan sebagainya)",
      scheduleFarewell: "Perpisahan",
      dioceseNames: ["SUWON", "INCHEON", "DAEJEON", "JEJU"],
    },
    slider: {
      pauseTitle: "Jeda",
      playTitle: "Main",
      prevTitle: "Slaid sebelumnya",
      nextTitle: "Slaid seterusnya",
    },
  },
  kr: {
    lang: "ko",
    metadata: {
      title:
        "WYD DID | 2027 서울 세계청년대회 교구대회 공식 홈페이지",
      description:
        "WYD DID 공식 홈페이지. 2027 서울 세계청년대회 교구대회 일정, 신청, 공지사항을 확인하세요.",
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
            { label: "자주하는 질문", href: "/kr/faq" },
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
      title: "DID 신청하기",
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
        { text: "2027 서울 WYD", color: "#214D9D" },
        { text: "와 ", color: "black" },
        { text: "교구대회", color: "#E54A47" },
        { text: "를 온 마음으로 응원합니다!", color: "black" },
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
      personLabel11: ["강태선", "(BYN 블랙야크 회장)"],
      personLabel12: ["우디", "김상우 베드로"],
      personLabel13: ["이국종", "블라시오"],
      personLabel14: ["이기우", "요셉"],
      personLabel15: ["밀라논나 장명숙", "안젤라"],
      personLabel16: ["백윤학", "지휘자"],
      personLabel17: ["김하종", "빈첸시오 신부"],
      personLabel18: ["하예린", "요안나"],
      personLabel19: ["안치환"],
      personLabel20: ["김태원", "바오로"],
      personLabel21: ["박완규", "사도요한"],
      personLabel22: ["갓등중창단 OB"],
      personLabel23: ["에드윈 킴", "바실리오"],
      personLabel24: ["레이어스 클래식"],
      personLabel25: ["트리오 좋은세상만들기"],
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
      cardDesc: () => `신청 가능합니다.`,
      rateLabel: "신청률",
      applyBtn: "신청하기",
      applyClosed: "모집완료",
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
        { label: "자주하는 질문", href: "/kr/faq" },
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
      title: "WYD DID | 2027 Seoul Days in Diocese",
      description:
        "Official WYD DID site for 2027 Seoul Days in Diocese. Schedules and notices.",
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
            { label: "FAQ", href: "/en/faq" },
            { label: "Sponsors", href: "/en#sponsor" },
          ],
        },
        {
          title: "PARTICIPATE",
          items: [
            { label: "DID Application", href: "/en/apply" },
            { label: "Application Status", href: "/en/status" },
          ],
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
      lines: ["Take courage!", "I have overcome", "the world."],
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
        { text: "We wholeheartedly support ", color: "black" },
        { text: "WYD Seoul 2027", color: "#214D9D" },
        { text: " and ", color: "black" },
        { text: "Days in Diocese!", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Chairman of BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Conductor"],
      personLabel17: ["Kim Ha-jong", "Fr. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "WYD 2027 Support Video",
    },
    applyPage: {
      heroAlt: "Sub page background",
      heroTitle: "DID Application",
      metaDescription:
        "DID application guide for WYD2027 Seoul Days in Diocese. Check available dioceses, application links, and how to move to each diocesan application page.",
      breadcrumb: ["Participate /", "Apply"],
      leftMenuTitle: "Participate",
      leftMenuItems: [
        { label: "DID Application", href: "/en/apply" },
        { label: "Application Status", href: "/en/status" },
      ],
      pageTitle: "DID Application",
      cardTitle: (name: string) => `${name} DID Application`,
      cardDesc: () => `Applications are open.`,
      rateLabel: "Application Rate",
      applyBtn: "Apply",
      applyClosed: "Applications Closed",
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
      leftMenuItems: [
        { label: "DID Application", href: "/en/apply" },
        { label: "Application Status", href: "/en/status" },
      ],
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
        { label: "FAQ", href: "/en/faq" },
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
            { label: "Preguntas frecuentes", href: "/es/faq" },
            { label: "Patrocinadores", href: "/es#sponsor" },
          ],
        },
        {
          title: "PARTICIPAR",
          items: [
            { label: "Inscripción al DID", href: "/es/apply" },
            { label: "Estado de las inscripciones", href: "/es/status" },
          ],
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
        { text: "¡Apoyamos con todo nuestro corazón la ", color: "black" },
        { text: "JMJ Seúl 2027", color: "#214D9D" },
        { text: " y los ", color: "black" },
        { text: "Encuentros Diocesanos!", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Presidente de BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Director de orquesta"],
      personLabel17: ["Kim Ha-jong", "P. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Video de apoyo a la JMJ 2027",
    },
    applyPage: {
      heroAlt: "Fondo de la subpágina",
      heroTitle: "Inscripción al DID",
      metaDescription:
        "Guía de inscripción al DID de la JMJ 2027 Seúl (Days in Diocese). Consulte las diócesis disponibles, los enlaces de inscripción y cómo acceder a la página de cada diócesis.",
      breadcrumb: ["Participar /", "Inscripción"],
      leftMenuTitle: "Participar",
      leftMenuItems: [
        { label: "Inscripción al DID", href: "/es/apply" },
        { label: "Estado de las inscripciones", href: "/es/status" },
      ],
      pageTitle: "Inscripción al DID",
      cardTitle: (name: string) => `Inscripción al DID — ${name}`,
      cardDesc: () => `Inscripciones abiertas.`,
      rateLabel: "Tasa de inscripción",
      applyBtn: "Inscribirse",
      applyClosed: "Inscripciones cerradas",
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
      leftMenuItems: [
        { label: "Inscripción al DID", href: "/es/apply" },
        { label: "Estado de las inscripciones", href: "/es/status" },
      ],
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
        { label: "Preguntas frecuentes", href: "/es/faq" },
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
            { label: "Questions fréquentes", href: "/fr/faq" },
            { label: "Partenaires", href: "/fr#sponsor" },
          ],
        },
        {
          title: "PARTICIPER",
          items: [
            { label: "Inscription au DID", href: "/fr/apply" },
            { label: "État des inscriptions", href: "/fr/status" },
          ],
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
        { text: "Nous soutenons de tout cœur les ", color: "black" },
        { text: "JMJ Séoul 2027", color: "#214D9D" },
        { text: " et les ", color: "black" },
        { text: "Journées en diocèse !", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Président de BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Chef d'orchestre"],
      personLabel17: ["Kim Ha-jong", "P. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Vidéo de soutien aux JMJ 2027",
    },
    applyPage: {
      heroAlt: "Arrière-plan de la sous-page",
      heroTitle: "Inscription au DID",
      metaDescription:
        "Guide d'inscription au DID des JMJ 2027 Séoul (Days in Diocese). Consultez les diocèses disponibles, les liens d'inscription et l'accès à la page de chaque diocèse.",
      breadcrumb: ["Participer /", "Inscription"],
      leftMenuTitle: "Participer",
      leftMenuItems: [
        { label: "Inscription au DID", href: "/fr/apply" },
        { label: "État des inscriptions", href: "/fr/status" },
      ],
      pageTitle: "Inscription au DID",
      cardTitle: (name: string) => `Inscription au DID — ${name}`,
      cardDesc: () => `Inscriptions ouvertes.`,
      rateLabel: "Taux d'inscription",
      applyBtn: "S'inscrire",
      applyClosed: "Inscriptions closes",
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
      leftMenuItems: [
        { label: "Inscription au DID", href: "/fr/apply" },
        { label: "État des inscriptions", href: "/fr/status" },
      ],
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
        { label: "Questions fréquentes", href: "/fr/faq" },
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
            { label: "Perguntas frequentes", href: "/pt/faq" },
            { label: "Patrocinadores", href: "/pt#sponsor" },
          ],
        },
        {
          title: "PARTICIPAR",
          items: [
            { label: "Inscrição no DID", href: "/pt/apply" },
            { label: "Status das inscrições", href: "/pt/status" },
          ],
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
        { text: "Apoiamos de todo o coração a ", color: "black" },
        { text: "JMJ Seul 2027", color: "#214D9D" },
        { text: " e os ", color: "black" },
        { text: "Encontros Diocesanos!", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Presidente da BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Maestro"],
      personLabel17: ["Kim Ha-jong", "Pe. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Vídeo de apoio à JMJ 2027",
    },
    applyPage: {
      heroAlt: "Plano de fundo da subpágina",
      heroTitle: "Inscrição no DID",
      metaDescription:
        "Guia de inscrição no DID da JMJ 2027 Seul (Days in Diocese). Confira as dioceses disponíveis, os links de inscrição e como acessar a página de cada diocese.",
      breadcrumb: ["Participar /", "Inscrição"],
      leftMenuTitle: "Participar",
      leftMenuItems: [
        { label: "Inscrição no DID", href: "/pt/apply" },
        { label: "Status das inscrições", href: "/pt/status" },
      ],
      pageTitle: "Inscrição no DID",
      cardTitle: (name: string) => `Inscrição no DID — ${name}`,
      cardDesc: () => `Inscrições abertas.`,
      rateLabel: "Taxa de inscrição",
      applyBtn: "Inscrever-se",
      applyClosed: "Inscrições encerradas",
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
      leftMenuItems: [
        { label: "Inscrição no DID", href: "/pt/apply" },
        { label: "Status das inscrições", href: "/pt/status" },
      ],
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
        { label: "Perguntas frequentes", href: "/pt/faq" },
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
            { label: "Domande frequenti", href: "/it/faq" },
            { label: "Sponsor", href: "/it#sponsor" },
          ],
        },
        {
          title: "PARTECIPA",
          items: [
            { label: "Iscrizione al DID", href: "/it/apply" },
            { label: "Stato delle iscrizioni", href: "/it/status" },
          ],
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
        { text: "Sosteniamo con tutto il cuore la ", color: "black" },
        { text: "GMG Seoul 2027", color: "#214D9D" },
        { text: " e gli ", color: "black" },
        { text: "Incontri Diocesani!", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Presidente di BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Direttore d'orchestra"],
      personLabel17: ["Kim Ha-jong", "P. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Video di sostegno alla GMG 2027",
    },
    applyPage: {
      heroAlt: "Sfondo della sottopagina",
      heroTitle: "Iscrizione al DID",
      metaDescription:
        "Guida all'iscrizione al DID della GMG 2027 Seoul (Days in Diocese). Controlla le diocesi disponibili, i link di iscrizione e come accedere alla pagina di ogni diocesi.",
      breadcrumb: ["Partecipa /", "Iscrizione"],
      leftMenuTitle: "Partecipa",
      leftMenuItems: [
        { label: "Iscrizione al DID", href: "/it/apply" },
        { label: "Stato delle iscrizioni", href: "/it/status" },
      ],
      pageTitle: "Iscrizione al DID",
      cardTitle: (name: string) => `Iscrizione al DID — ${name}`,
      cardDesc: () => `Iscrizioni aperte.`,
      rateLabel: "Tasso di iscrizione",
      applyBtn: "Iscriviti",
      applyClosed: "Iscrizioni chiuse",
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
      leftMenuItems: [
        { label: "Iscrizione al DID", href: "/it/apply" },
        { label: "Stato delle iscrizioni", href: "/it/status" },
      ],
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
        { label: "Domande frequenti", href: "/it/faq" },
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
            { label: "Najczęstsze pytania", href: "/pl/faq" },
            { label: "Sponsorzy", href: "/pl#sponsor" },
          ],
        },
        {
          title: "UDZIAŁ",
          items: [
            { label: "Zapisy na DID", href: "/pl/apply" },
            { label: "Stan zapisów", href: "/pl/status" },
          ],
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
        { text: "Całym sercem wspieramy ", color: "black" },
        { text: "ŚDM Seul 2027", color: "#214D9D" },
        { text: " i ", color: "black" },
        { text: "Spotkania Diecezjalne!", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Prezes BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Dyrygent"],
      personLabel17: ["Kim Ha-jong", "Ks. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Wideo wsparcia ŚDM 2027",
    },
    applyPage: {
      heroAlt: "Tło podstrony",
      heroTitle: "Zapisy na DID",
      metaDescription:
        "Przewodnik po zapisach na DID ŚDM 2027 w Seulu (Days in Diocese). Sprawdź dostępne diecezje, linki do zapisów i przejście na stronę każdej diecezji.",
      breadcrumb: ["Udział /", "Zapisy"],
      leftMenuTitle: "Udział",
      leftMenuItems: [
        { label: "Zapisy na DID", href: "/pl/apply" },
        { label: "Stan zapisów", href: "/pl/status" },
      ],
      pageTitle: "Zapisy na DID",
      cardTitle: (name: string) => `Zapisy na DID — ${name}`,
      cardDesc: () => `Zapisy otwarte.`,
      rateLabel: "Wskaźnik zapisów",
      applyBtn: "Zapisz się",
      applyClosed: "Zapisy zakończone",
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
      leftMenuItems: [
        { label: "Zapisy na DID", href: "/pl/apply" },
        { label: "Stan zapisów", href: "/pl/status" },
      ],
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
        { label: "Najczęstsze pytania", href: "/pl/faq" },
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
            { label: "Häufige Fragen", href: "/de/faq" },
            { label: "Sponsoren", href: "/de#sponsor" },
          ],
        },
        {
          title: "MITMACHEN",
          items: [
            { label: "DID-Anmeldung", href: "/de/apply" },
            { label: "Anmeldestatus", href: "/de/status" },
          ],
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
        { text: "Wir unterstützen den ", color: "black" },
        { text: "WJT Seoul 2027", color: "#214D9D" },
        { text: " und die ", color: "black" },
        { text: "diözesanen Begegnungen von Herzen!", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Vorsitzender von BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Dirigent"],
      personLabel17: ["Kim Ha-jong", "P. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Unterstützungsvideo zum WJT 2027",
    },
    applyPage: {
      heroAlt: "Hintergrund der Unterseite",
      heroTitle: "DID-Anmeldung",
      metaDescription:
        "Anmeldeleitfaden für das DID zum WJT 2027 in Seoul (Days in Diocese). Prüfen Sie verfügbare Diözesen, Anmeldelinks und den Zugang zur Seite jeder Diözese.",
      breadcrumb: ["Mitmachen /", "Anmeldung"],
      leftMenuTitle: "Mitmachen",
      leftMenuItems: [
        { label: "DID-Anmeldung", href: "/de/apply" },
        { label: "Anmeldestatus", href: "/de/status" },
      ],
      pageTitle: "DID-Anmeldung",
      cardTitle: (name: string) => `DID-Anmeldung — ${name}`,
      cardDesc: () => `Anmeldung möglich.`,
      rateLabel: "Anmeldequote",
      applyBtn: "Anmelden",
      applyClosed: "Anmeldung geschlossen",
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
      leftMenuItems: [
        { label: "DID-Anmeldung", href: "/de/apply" },
        { label: "Anmeldestatus", href: "/de/status" },
      ],
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
        { label: "Häufige Fragen", href: "/de/faq" },
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
            { label: "常见问题", href: "/zh/faq" },
            { label: "赞助商", href: "/zh#sponsor" },
          ],
        },
        {
          title: "参与",
          items: [
            { label: "DID报名", href: "/zh/apply" },
            { label: "各教区报名情况", href: "/zh/status" },
          ],
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
        { text: "我们全心支持", color: "black" },
        { text: "2027首尔世青", color: "#214D9D" },
        { text: "和", color: "black" },
        { text: "教区日！", color: "#E54A47" },
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
      personLabel11: ["姜泰善", "(BYN BlackYak 会长)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "指挥家"],
      personLabel17: ["Kim Ha-jong", "文森佐神父"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "2027世青应援视频",
    },
    applyPage: {
      heroAlt: "子页面背景",
      heroTitle: "DID报名",
      metaDescription:
        "2027首尔世界青年日教区日（DID）报名指南。查看各教区报名情况和报名链接，前往可参与教区的DID报名页面。",
      breadcrumb: ["参与 /", "报名"],
      leftMenuTitle: "参与",
      leftMenuItems: [
        { label: "DID报名", href: "/zh/apply" },
        { label: "各教区报名情况", href: "/zh/status" },
      ],
      pageTitle: "DID报名",
      cardTitle: (name: string) => `${name} DID报名`,
      cardDesc: () => `现已开放报名。`,
      rateLabel: "报名率",
      applyBtn: "报名",
      applyClosed: "报名已截止",
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
      leftMenuItems: [
        { label: "DID报名", href: "/zh/apply" },
        { label: "各教区报名情况", href: "/zh/status" },
      ],
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
        { label: "常见问题", href: "/zh/faq" },
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
            { label: "常見問題", href: "/zh-tw/faq" },
            { label: "贊助商", href: "/zh-tw#sponsor" },
          ],
        },
        {
          title: "參與",
          items: [
            { label: "DID報名", href: "/zh-tw/apply" },
            { label: "各教區報名情況", href: "/zh-tw/status" },
          ],
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
        { text: "我們全心支持", color: "black" },
        { text: "2027首爾世青", color: "#214D9D" },
        { text: "和", color: "black" },
        { text: "教區日！", color: "#E54A47" },
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
      personLabel11: ["姜泰善", "(BYN BlackYak 會長)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "指揮家"],
      personLabel17: ["Kim Ha-jong", "文森佐神父"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "2027世青應援影片",
    },
    applyPage: {
      heroAlt: "子頁面背景",
      heroTitle: "DID報名",
      metaDescription:
        "2027首爾世界青年日教區日（DID）報名指南。查看各教區報名情況和報名連結，前往可參與教區的DID報名頁面。",
      breadcrumb: ["參與 /", "報名"],
      leftMenuTitle: "參與",
      leftMenuItems: [
        { label: "DID報名", href: "/zh-tw/apply" },
        { label: "各教區報名情況", href: "/zh-tw/status" },
      ],
      pageTitle: "DID報名",
      cardTitle: (name: string) => `${name} DID報名`,
      cardDesc: () => `現已開放報名。`,
      rateLabel: "報名率",
      applyBtn: "報名",
      applyClosed: "報名已截止",
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
      leftMenuItems: [
        { label: "DID報名", href: "/zh-tw/apply" },
        { label: "各教區報名情況", href: "/zh-tw/status" },
      ],
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
        { label: "常見問題", href: "/zh-tw/faq" },
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
            { label: "Mga Madalas Itanong", href: "/fil/faq" },
            { label: "Mga Sponsor", href: "/fil#sponsor" },
          ],
        },
        {
          title: "SUMALI",
          items: [
            { label: "Aplikasyon sa DID", href: "/fil/apply" },
            { label: "Katayuan ng Aplikasyon", href: "/fil/status" },
          ],
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
        { text: "Buong puso naming sinusuportahan ang ", color: "black" },
        { text: "WYD Seoul 2027", color: "#214D9D" },
        { text: " at ang ", color: "black" },
        { text: "Days in Diocese!", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Chairman ng BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Konduktor"],
      personLabel17: ["Kim Ha-jong", "Fr. Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Video ng suporta sa WYD 2027",
    },
    applyPage: {
      heroAlt: "Background ng subpage",
      heroTitle: "Aplikasyon sa DID",
      metaDescription:
        "Gabay sa aplikasyon sa DID ng WYD 2027 Seoul (Days in Diocese). Tingnan ang mga available na diyosesis, mga link ng aplikasyon, at kung paano pumunta sa pahina ng bawat diyosesis.",
      breadcrumb: ["Sumali /", "Aplikasyon"],
      leftMenuTitle: "Sumali",
      leftMenuItems: [
        { label: "Aplikasyon sa DID", href: "/fil/apply" },
        { label: "Katayuan ng Aplikasyon", href: "/fil/status" },
      ],
      pageTitle: "Aplikasyon sa DID",
      cardTitle: (name: string) => `Aplikasyon sa DID — ${name}`,
      cardDesc: () => `Bukas na ang aplikasyon.`,
      rateLabel: "Antas ng Aplikasyon",
      applyBtn: "Mag-apply",
      applyClosed: "Sarado na ang aplikasyon",
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
      leftMenuItems: [
        { label: "Aplikasyon sa DID", href: "/fil/apply" },
        { label: "Katayuan ng Aplikasyon", href: "/fil/status" },
      ],
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
        { label: "Mga Madalas Itanong", href: "/fil/faq" },
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
            { label: "よくある質問", href: "/ja/faq" },
            { label: "協賛企業", href: "/ja#sponsor" },
          ],
        },
        {
          title: "参加",
          items: [
            { label: "DID申込", href: "/ja/apply" },
            { label: "教区別申込状況", href: "/ja/status" },
          ],
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
        { text: "2027ソウルWYD", color: "#214D9D" },
        { text: "と", color: "black" },
        { text: "教区大会", color: "#E54A47" },
        { text: "を心から応援しています！", color: "black" },
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
      personLabel11: ["カン・テソン", "(BYN ブラックヤク会長)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "指揮者"],
      personLabel17: ["Kim Ha-jong", "ヴィンチェンツォ神父"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "WYD 2027 応援動画",
    },
    applyPage: {
      heroAlt: "サブページ背景",
      heroTitle: "DID申込",
      metaDescription:
        "WYD2027ソウル教区大会（DID）の参加申込ガイドです。教区別の申込可否と申込リンクを確認し、参加可能な教区のDID申込ページへ進めます。",
      breadcrumb: ["参加 /", "申込"],
      leftMenuTitle: "参加",
      leftMenuItems: [
        { label: "DID申込", href: "/ja/apply" },
        { label: "教区別申込状況", href: "/ja/status" },
      ],
      pageTitle: "DID申込",
      cardTitle: (name: string) => `${name} DID申込`,
      cardDesc: () => `お申し込みいただけます。`,
      rateLabel: "申込率",
      applyBtn: "申し込む",
      applyClosed: "募集終了",
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
      leftMenuItems: [
        { label: "DID申込", href: "/ja/apply" },
        { label: "教区別申込状況", href: "/ja/status" },
      ],
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
        { label: "よくある質問", href: "/ja/faq" },
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
            { label: "Câu hỏi thường gặp", href: "/vi/faq" },
            { label: "Nhà tài trợ", href: "/vi#sponsor" },
          ],
        },
        {
          title: "THAM GIA",
          items: [
            { label: "Đăng ký DID", href: "/vi/apply" },
            { label: "Tình trạng đăng ký", href: "/vi/status" },
          ],
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
        { text: "Chúng tôi hết lòng ủng hộ ", color: "black" },
        { text: "ĐHGTTG Seoul 2027", color: "#214D9D" },
        { text: " và ", color: "black" },
        { text: "Days in Diocese!", color: "#E54A47" },
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
      personLabel11: ["Kang Tae-sun", "(Chủ tịch BYN Black Yak)"],
      personLabel12: ["Woody", "Kim Sang-woo Peter"],
      personLabel13: ["Lee Kook-jong", "Blaise"],
      personLabel14: ["Lee Gi-woo", "Joseph"],
      personLabel15: ["Milanonna Jang Myung-sook", "Angela"],
      personLabel16: ["Baek Yun-hak", "Nhạc trưởng"],
      personLabel17: ["Kim Ha-jong", "Cha Vincenzo"],
      personLabel18: ["Ha Ye-rin", "Joanna"],
      personLabel19: ["Ahn Chi-hwan"],
      personLabel20: ["Kim Tae-won", "Paul"],
      personLabel21: ["Park Wan-kyu", "John the Apostle"],
      personLabel22: ["Gatdeung Chorus OB"],
      personLabel23: ["Edwin Kim", "Basil"],
      personLabel24: ["Layers Classic"],
      personLabel25: ["Trio", "Making a Better World"],
      personAlt: "Video cổ vũ ĐHGTTG 2027",
    },
    applyPage: {
      heroAlt: "Nền trang con",
      heroTitle: "Đăng ký DID",
      metaDescription:
        "Hướng dẫn đăng ký DID của ĐHGTTG 2027 Seoul (Days in Diocese). Xem các giáo phận có thể tham gia, liên kết đăng ký và cách đến trang đăng ký của từng giáo phận.",
      breadcrumb: ["Tham gia /", "Đăng ký"],
      leftMenuTitle: "Tham gia",
      leftMenuItems: [
        { label: "Đăng ký DID", href: "/vi/apply" },
        { label: "Tình trạng đăng ký", href: "/vi/status" },
      ],
      pageTitle: "Đăng ký DID",
      cardTitle: (name: string) => `Đăng ký DID — ${name}`,
      cardDesc: () => `Đã mở đăng ký.`,
      rateLabel: "Tỷ lệ đăng ký",
      applyBtn: "Đăng ký",
      applyClosed: "Đã đóng đăng ký",
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
      leftMenuItems: [
        { label: "Đăng ký DID", href: "/vi/apply" },
        { label: "Tình trạng đăng ký", href: "/vi/status" },
      ],
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
        { label: "Câu hỏi thường gặp", href: "/vi/faq" },
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

export type FaqItem = {
  q: string;
  a: string[];
};

export type FaqPageContent = {
  heroAlt: string;
  heroTitle: string;
  metaDescription: string;
  breadcrumb: string[];
  pageTitle: string;
  items: FaqItem[];
  chatbot: {
    title: string;
    desc: string;
    button: string;
  };
};

export const CHATBOT_URL =
  "https://chatgpt.com/g/g-6a74724a112081918c8fefdcae6da5dc-gyogudaehoee-daehae-muleoboseyo";

export const faqContent: Record<Locale, FaqPageContent> = {
  "ar": {
    "heroAlt": "خلفية الصفحة الفرعية",
    "heroTitle": "الأسئلة الشائعة",
    "metaDescription": "الأسئلة الشائعة حول الاستضافة المنزلية لأيام الأبرشيات (DID) لليوم العالمي للشباب 2027 في سيول: شروط الاستضافة واستقبال الحجاج والوجبات والاختلافات الثقافية والطوارئ.",
    "breadcrumb": [
      "الإعلانات /",
      "الأسئلة الشائعة"
    ],
    "pageTitle": "الأسئلة الشائعة حول الاستضافة المنزلية",
    "items": [
      {
        "q": "هل توجد شروط للأسر المضيفة؟",
        "a": [
          "يمكن لأي أسرة كاثوليكية التقدم عبر رعيتها. يجب أن تستطيع كل أسرة استقبال حاجَّين على الأقل وتوفير مساحة لأكياس النوم قدرها 2 م × 1.5 م للشخص. يرجى ذكر أي مخاوف (مثل الحساسية من الحيوانات الأليفة) أو تفضيلات لعدد الضيوف وجنسهم في الطلب، وسنراعيها قدر الإمكان عند التوزيع. بالنسبة للحجاج ذوي الإعاقة، نتأكد أولًا من قدرة الأسرة على استضافتهم، ثم نوضح الدعم الإضافي الذي تقدمه الأبرشية بحسب نوع الإعاقة، سواء كانت جسدية أو بصرية أو سمعية أو معرفية وغيرها."
        ]
      },
      {
        "q": "هل يمكنني معرفة معلومات الحجاج مسبقًا؟",
        "a": [
          "نعم. بعد توزيع الحجاج، ستتلقون معلوماتهم الأساسية مسبقًا، مثل الجنسية والجنس والعمر والقيود الغذائية والإعاقة. من الجميل إعداد تحية بلغتهم الأم أو بطاقة ترحيب، أو التعرف قليلًا على ثقافة بلدهم."
        ]
      },
      {
        "q": "كيف نستقبلهم في اليوم الأول؟ هل يجب استقبالهم في المطار؟",
        "a": [
          "يساعد فريق متطوعي الاستقبال في المطار التابع للأبرشية أو الرعية في استقبال الحجاج وتوديعهم، ويكفي أن تلتقوا بهم في المكان والوقت اللذين تحددهما الأبرشية. بعد رحلة طويلة، قد يرغبون في ترتيب أمتعتهم والراحة. ساعدوهم على الاستقرار براحة: عرّفوهم بمكان الحمام وأرقام الطوارئ، وقدّموا فراشًا إضافيًا (يحضر الحجاج أكياس النوم الخاصة بهم) وبعض الوجبات الخفيفة."
        ]
      },
      {
        "q": "ماذا لو واجه حاج مشكلة عند دخول البلاد؟",
        "a": [
          "يتولى الحاج وقائد مجموعته الوطنية التعامل أولًا مع مشكلات الدخول. إذا فُقدت أمتعته، فإن توفير الضروريات العاجلة كالملابس الداخلية وأدوات النظافة يساعد كثيرًا. ستشكّل لجان تنظيم اليوم العالمي للشباب في الأبرشيات (DID) ولجنة سيول للحدث الرئيسي فرقًا لدعم الاستضافة المنزلية ومعالجة المشكلات. احفظوا أرقام الطوارئ التي تُقدَّم خلال التدريب."
        ]
      },
      {
        "q": "كيف أُعدّ الوجبات؟ أقلق بشأن النباتيين والأنظمة الغذائية الخاصة.",
        "a": [
          "ستُقدَّم إرشادات أساسية للوجبات خلال التدريب على الاستضافة. على الأسر توفير الإفطار لأن الحجاج يتناولونه قبل الخروج لبرنامج اليوم. وقد تستدعي الظروف أحيانًا إعداد العشاء أيضًا.",
          "قد يتجنب بعض الحجاج لحم الخنزير أو الكحول لأسباب ثقافية، أو يكونون نباتيين، أو يعانون من الحساسية. تحققوا من احتياجاتهم قبل تقديم الطعام باستخدام الصور أو تطبيق ترجمة. رغم كثرة التفاصيل، تبقى الوجبة البسيطة المقدَّمة بمحبة في الذاكرة أطول من قائمة طعام مثالية."
        ]
      },
      {
        "q": "هل توجد اختلافات ثقافية في استخدام المرحاض والحمام؟",
        "a": [
          "قد لا يألف بعض الحجاج عادات الحمامات الكورية. من المفيد وضع إرشادات مصوَّرة بسيطة توضّح مكان التخلص من ورق المرحاض المستخدم وكيفية استخدام الشطاف وغيرها. كما يساعد تحديد مواعيد الاستحمام وترتيب الأدوار مسبقًا على تجنب الارتباك."
        ]
      },
      {
        "q": "ماذا يحدث إذا ضاعت أشياء ثمينة أو سُرقت؟",
        "a": [
          "الحجاج مسؤولون أساسًا عن ممتلكاتهم. يشتري معظمهم تأمين سفر قبل المغادرة، لذا تُعالَج الخسائر عادة عبر التأمين. عند الإبلاغ عن فقدان شيء، اتصلوا فورًا بمنسق اليوم العالمي للشباب في الرعية أو فريق الاستضافة بالأبرشية. وتتوسط إدارة العمليات بالأبرشية في المسائل التي قد تؤدي إلى نزاعات قانونية."
        ]
      },
      {
        "q": "ماذا أفعل إذا مرض حاج واحتاج إلى المستشفى؟",
        "a": [
          "تحققوا مسبقًا من الأدوية ووثيقة تأمين السفر وأرقام الطوارئ الخاصة بالحاج. للرعاية العادية، رافقوه إلى مستشفى قريب أو قسم الطوارئ؛ وفي حالة طارئة اتصلوا فورًا بالرقم 119 ثم أبلغوا الأبرشية. يغطي تأمين الحاج عادة تكاليف العلاج. إذا لزمت الترجمة، يمكن الاتصال بمركز خدمات الحكومة المحلية (120) أو مركز الاتصال للهجرة (1345)."
        ]
      },
      {
        "q": "ماذا لو نشأ خلاف حول العودة المتأخرة أو موعد العودة إلى المنزل؟",
        "a": [
          "قد يعود الحجاج متأخرين بحسب البرنامج. وضّحوا نظام المنزل واطلبوا منهم إبلاغكم مسبقًا إذا سيتأخرون. إذا خشيتم حدوث خلاف، اطلبوا مساعدة الأبرشية."
        ]
      },
      {
        "q": "هل قد يكون بين الحجاج قاصرون؟ ما الذي يجب مراعاته؟",
        "a": [
          "تبدأ المشاركة في اليوم العالمي للشباب من سن 15 عامًا، لذا تشمل قاصرين. وللسلامة، يُوزَّعون مع حجاج بالغين. يُرجى من الأسر التي تستقبلهم إيلاؤهم عناية إضافية، وستقدم الأبرشية إرشادات خاصة.",
          "يختلف سن الرشد القانوني بين البلدان، لكن القانون الكوري يسري في كوريا. يبدأ الرشد في كوريا عند 19 عامًا، أي في عام 2027 من وُلدوا عام 2008 أو قبله. أما الأصغر سنًا فيُحظر عليهم شرب الكحول والتدخين في كوريا بغض النظر عن قوانين بلدهم. يرجى توضيح ذلك للحجاج من أجل حمايتهم."
        ]
      },
      {
        "q": "أخشى ألا تكون بيننا لغة مشتركة.",
        "a": [
          "شهدت اللقاءات السابقة صداقات عميقة رغم عدم وجود لغة مشتركة. تساعد تطبيقات الترجمة وبطاقات المحادثة المصوَّرة المُعدَّة لهذا الحدث، وهي أدوات للتواصل المعزَّز والبديل، على تجاوز حاجز اللغة. حتى دون كلمات مثالية، تُفهَم الابتسامة الصادقة في كل مكان."
        ]
      },
      {
        "q": "هل هناك آداب ثقافية ينبغي الانتباه لها؟",
        "a": [
          "تكفي مراعاة بعض المبادئ الأساسية. تجنبوا التعمق في مواضيع قد تُثير الخلاف كالدين والسياسة والتاريخ. قد يُفهَم التواصل الجسدي كاحتضان الكتف أو العناق بصورة مختلفة بين الثقافات؛ انتظروا حتى يبادر الشخص الآخر. واطلبوا الإذن دائمًا قبل التصوير أو تسجيل الفيديو."
        ]
      },
      {
        "q": "أريد أن أمنحهم ذكريات جميلة عن كوريا. ماذا يمكننا أن نفعل؟",
        "a": [
          "ما رأيكم في ارتداء الهانبوك معًا أو تناول الشاي التقليدي؟ إذا توفر وقت، زوروا سوقًا قريبًا أو مطعمًا أو متجرًا أو جيمجيلبانغ (ساونا كورية) أو معلمًا محليًا أو مزارًا مقدسًا في الأبرشية للتعريف بثقافة كوريا وتراثها الإيماني. كما أن كتابة اسم الحاج بالهانغول وتقديمه هدية قد تصبح ذكرى جميلة يحتفظ بها طوال حياته."
        ]
      }
    ],
    "chatbot": {
      "title": "هل لديكم أسئلة أخرى؟",
      "desc": "اسألوا روبوت المحادثة الخاص بـ DID. يمكنه الإجابة أيضًا عن أسئلة لم تتناولها هذه الصفحة.",
      "button": "اسأل روبوت المحادثة"
    }
  },
  "ur": {
    "heroAlt": "ذیلی صفحے کا پس منظر",
    "heroTitle": "اکثر پوچھے گئے سوالات",
    "metaDescription": "سیول WYD2027 اسقفی ایام (DID) کی گھریلو میزبانی کے بارے میں سوالات: میزبانوں کی اہلیت، زائرین کا استقبال، کھانا، ثقافتی فرق اور ہنگامی حالات۔",
    "breadcrumb": [
      "اعلانات /",
      "اکثر پوچھے گئے سوالات"
    ],
    "pageTitle": "گھریلو میزبانی کے بارے میں سوالات",
    "items": [
      {
        "q": "کیا میزبان خاندانوں کے لیے کوئی اہلیت یا شرائط ہیں؟",
        "a": [
          "کوئی بھی کیتھولک خاندان اپنی پیرش کے ذریعے درخواست دے سکتا ہے۔ ہر گھر میں کم از کم دو زائرین کی میزبانی اور ان کے سلیپنگ بیگ بچھانے کے لیے فی شخص 2 میٹر × 1.5 میٹر جگہ ہونی چاہیے۔ پالتو جانوروں سے الرجی جیسی تشویش یا مہمانوں کی تعداد اور جنس کی ترجیحات درخواست میں لکھیں؛ تقسیم کے وقت انہیں ممکن حد تک مدنظر رکھا جائے گا۔ معذوری والے زائرین کے لیے پہلے میزبان کی سہولت کی تصدیق کی جاتی ہے، پھر معذوری کی نوعیت، مثلاً جسمانی، بصری، سماعت یا ذہنی، کے مطابق اسقفی علاقے کی اضافی مدد بتائی جاتی ہے۔"
        ]
      },
      {
        "q": "کیا زائرین کی معلومات پہلے مل سکتی ہیں؟",
        "a": [
          "جی ہاں۔ زائرین مقرر ہونے کے بعد قومیت، جنس، عمر، غذائی پابندیوں اور معذوری جیسی بنیادی معلومات پہلے فراہم کی جائیں گی۔ ان کی مادری زبان میں سلام یا خوش آمدید کارڈ تیار کرنا، یا ان کے ملک کی ثقافت کے بارے میں کچھ جاننا اچھا ہوگا۔"
        ]
      },
      {
        "q": "پہلے دن استقبال کیسے کریں؟ کیا ہوائی اڈے سے لانا ضروری ہے؟",
        "a": [
          "اسقفی علاقے یا پیرش کی ہوائی اڈے پر استقبالیہ رضاکار ٹیم آمد اور روانگی میں مدد کرے گی۔ آپ اسقفی علاقے کے بتائے ہوئے مقام اور وقت پر ملیں۔ طویل سفر کے بعد وہ سامان کھول کر آرام کرنا چاہیں گے۔ انہیں آرام دہ ماحول دیں، غسل خانے کی جگہ اور ہنگامی رابطے بتائیں، اضافی بستر پیش کریں (سلیپنگ بیگ زائرین خود لائیں گے) اور ہلکی غذا تیار رکھیں۔"
        ]
      },
      {
        "q": "اگر کسی زائر کو ملک میں داخلے کا مسئلہ ہو تو کیا کریں؟",
        "a": [
          "داخلے کے مسائل پہلے زائر اور اس کے ملکی گروپ کا رہنما حل کرتے ہیں۔ سامان گم ہونے پر زیرجامے اور غسل کی اشیا جیسی فوری ضروریات فراہم کرنا بڑی مدد ہوگی۔ ہر اسقفی علاقے کی WYD تنظیمی کمیٹی (DID) اور سیول WYD کمیٹی (مرکزی تقریب) گھریلو میزبانی کی مدد اور مسائل کے حل کے لیے ٹیمیں قائم کریں گی۔ تربیت میں دیے گئے ہنگامی رابطہ نمبر محفوظ کر لیں۔"
        ]
      },
      {
        "q": "کھانا کیسے تیار کریں؟ سبزی خور یا خصوصی غذا کے بارے میں فکر ہے۔",
        "a": [
          "بنیادی غذائی رہنمائی میزبانی کی تربیت میں دی جائے گی۔ زائرین روزانہ کے پروگرام سے پہلے ناشتہ کرتے ہیں، اس لیے میزبان خاندان ناشتہ فراہم کریں۔ کبھی حالات کے مطابق رات کا کھانا بھی تیار کرنا پڑ سکتا ہے۔",
          "کچھ زائرین ثقافتی وجوہ سے سور کے گوشت یا شراب سے پرہیز کرتے ہیں، سبزی خور ہوتے ہیں یا انہیں الرجی ہوتی ہے۔ کھانا پیش کرنے سے پہلے تصاویر یا ترجمے کی ایپ سے ضروریات معلوم کریں۔ توجہ کی باتیں بہت ہوں تب بھی محبت سے تیار کیا گیا سادہ کھانا ایک بالکل موزوں مینو سے زیادہ دیر یاد رہتا ہے۔"
        ]
      },
      {
        "q": "کیا بیت الخلا اور غسل خانے کے استعمال میں ثقافتی فرق ہوتے ہیں؟",
        "a": [
          "کچھ زائرین کوریائی غسل خانے کے طریقوں سے واقف نہیں ہوں گے۔ استعمال شدہ ٹوائلٹ پیپر کہاں ڈالنا ہے یا بڈیٹ کیسے استعمال کرنا ہے، اس کی سادہ تصویری ہدایات مددگار ہیں۔ نہانے کے اوقات اور باری پہلے طے کرنے سے بھی الجھن کم ہوتی ہے۔"
        ]
      },
      {
        "q": "اگر قیمتی سامان گم یا چوری ہو جائے تو کیا ہوگا؟",
        "a": [
          "زائرین بنیادی طور پر اپنے سامان کے ذمہ دار ہیں۔ زیادہ تر سفر سے پہلے سفری بیمہ لیتے ہیں، اس لیے نقصان عموماً بیمے کے ذریعے نمٹایا جاتا ہے۔ گمشدگی کی اطلاع پر فوراً پیرش کے WYD رابطہ کار یا اسقفی میزبانی ٹیم سے رابطہ کریں۔ قانونی تنازع بننے والے معاملات میں اسقفی انتظامی مرکز ثالثی کرے گا۔"
        ]
      },
      {
        "q": "اگر زائر بیمار ہو اور ہسپتال جانا پڑے تو کیا کریں؟",
        "a": [
          "زائر کی دواؤں، سفری بیمے کی دستاویز اور ہنگامی رابطوں کو پہلے دیکھ لیں۔ عام علاج کے لیے قریبی ہسپتال یا ایمرجنسی میں ساتھ جائیں؛ ہنگامی حالت میں فوراً 119 پر فون کریں، پھر اسقفی علاقے کو اطلاع دیں۔ علاج کے اخراجات عموماً زائر کے بیمے سے پورے ہوتے ہیں۔ ترجمان درکار ہو تو مقامی حکومت کے کال سینٹر (120) یا امیگریشن رابطہ مرکز (1345) سے رابطہ کیا جا سکتا ہے۔"
        ]
      },
      {
        "q": "دیر سے واپسی یا گھر آنے کے وقت پر اختلاف ہو تو کیا کریں؟",
        "a": [
          "پروگرام کے مطابق زائرین دیر سے واپس آ سکتے ہیں۔ گھر کا معمول واضح بتائیں اور دیر ہونے پر پہلے اطلاع دینے کو کہیں۔ اختلاف کی تشویش ہو تو اسقفی علاقے سے مدد لیں۔"
        ]
      },
      {
        "q": "کیا زائرین میں نابالغ بھی ہوں گے؟ کن باتوں کا خیال رکھیں؟",
        "a": [
          "WYD میں شرکت 15 سال کی عمر سے شروع ہوتی ہے، اس لیے نابالغ بھی شامل ہوں گے۔ حفاظت کے لیے انہیں بالغ زائرین کے ساتھ رکھا جاتا ہے۔ ان کی میزبانی کرنے والے خاندان اضافی توجہ دیں؛ اسقفی علاقہ الگ رہنمائی بھی فراہم کرے گا۔",
          "قانونی بلوغت کی عمر ملکوں میں مختلف ہے، مگر کوریا میں کوریائی قانون لاگو ہوتا ہے۔ کوریا میں بلوغت 19 سال سے شروع ہوتی ہے، یعنی 2027 میں 2008 یا اس سے پہلے پیدا ہونے والے افراد۔ اس سے کم عمر افراد کے لیے کوریا میں شراب نوشی اور سگریٹ نوشی ممنوع ہے، چاہے ان کے ملک کا قانون کچھ بھی ہو۔ زائرین کو ان کے تحفظ کے لیے یہ بات بتائیں۔"
        ]
      },
      {
        "q": "مجھے فکر ہے کہ ہماری کوئی مشترک زبان نہیں ہوگی۔",
        "a": [
          "گزشتہ WYD اجتماعات میں مشترک زبان کے بغیر بھی گہری دوستیوں کی بہت سی خوب صورت مثالیں ہیں۔ فون کی ترجمہ ایپ یا اس تقریب کے لیے بنائے گئے تصویری مکالماتی کارڈ، یعنی معاون اور متبادل ابلاغ کے آلات، زبان کی رکاوٹ کم کرتے ہیں۔ کامل الفاظ نہ بھی ہوں تو ایک روشن مسکراہٹ ہر جگہ سمجھی جاتی ہے۔"
        ]
      },
      {
        "q": "کیا ثقافتی آداب کے بارے میں خاص احتیاط ضروری ہے؟",
        "a": [
          "چند بنیادی اصول کافی مدد کرتے ہیں۔ مذہب، سیاست یا تاریخ جیسے اختلاف پیدا کرنے والے موضوعات میں زیادہ نہ جائیں۔ کندھے پر ہاتھ رکھنے یا گلے ملنے جیسے جسمانی رابطے مختلف ثقافتوں میں مختلف سمجھے جا سکتے ہیں؛ دوسرے شخص کے آغاز کا انتظار کریں۔ تصویر یا ویڈیو بنانے سے پہلے ہمیشہ اجازت لیں۔"
        ]
      },
      {
        "q": "میں انہیں کوریا کی اچھی یادیں دینا چاہتا ہوں۔ کیا کریں؟",
        "a": [
          "مل کر ہانبوک پہننا یا روایتی چائے پینا کیسا رہے گا؟ فارغ وقت میں قریبی بازار، اچھے ریستوران، سہولت اسٹور، جمجل بانگ (کوریائی سونا)، مقامی مقامات یا اسقفی علاقے کے مقدس مقام کی سیر کر کے کوریا کی ثقافت اور ایمانی ورثہ دکھائیں۔ زائر کا نام ہانگُل میں لکھ کر تحفہ دینا بھی زندگی بھر کی خوب صورت یاد بن سکتا ہے۔"
        ]
      }
    ],
    "chatbot": {
      "title": "کیا مزید سوالات ہیں؟",
      "desc": "DID چیٹ بوٹ سے پوچھیں۔ یہ ان سوالات کے جواب بھی دے سکتا ہے جو اس صفحے پر شامل نہیں ہیں۔",
      "button": "چیٹ بوٹ سے پوچھیں"
    }
  },
  "tr": {
    "heroAlt": "Alt sayfa arka planı",
    "heroTitle": "Sıkça Sorulan Sorular",
    "metaDescription": "WYD2027 Seul Piskoposluk Günleri (DID) ev sahipliği hakkında sıkça sorulan sorular. Ev sahipliği koşulları, hacıların karşılanması, yemekler, kültürel farklılıklar ve acil durumlar.",
    "breadcrumb": [
      "DUYURULAR /",
      "Sıkça Sorulan Sorular"
    ],
    "pageTitle": "Ev Sahipliği Hakkında Sıkça Sorulan Sorular",
    "items": [
      {
        "q": "Ev sahibi aileler için koşullar var mı?",
        "a": [
          "Her Katolik aile kendi cemaati aracılığıyla başvurabilir. Her hane en az iki hacıyı ağırlayabilmeli ve uyku tulumlarını sermeleri için kişi başına 2 m × 1,5 m alan sağlamalıdır. Evcil hayvan alerjisi gibi kaygılarınızı veya misafir sayısı ve cinsiyet tercihlerinizi başvuru formunda belirtin; yerleştirmede bunları mümkün olduğunca dikkate alacağız. Engelli hacılar için önce ailenin uygunluğu doğrulanır, ardından engel türüne (bedensel, görme, işitme, bilişsel vb.) göre piskoposluğun ek desteği hakkında bilgi verilir."
        ]
      },
      {
        "q": "Hacılar hakkında önceden bilgi alabilir miyim?",
        "a": [
          "Evet. Yerleştirmeden sonra uyruk, cinsiyet, yaş, beslenme kısıtlamaları ve engellilik durumu gibi temel bilgiler önceden paylaşılır. Kendi dillerinde bir selamlama veya hoş geldiniz kartı hazırlamanız ve ülkelerinin kültürünü biraz öğrenmeniz güzel olur."
        ]
      },
      {
        "q": "İlk gün nasıl karşılamalıyız? Havaalanından almamız gerekiyor mu?",
        "a": [
          "Piskoposluk veya cemaatin havaalanı karşılama gönüllüleri geliş ve ayrılışlarda yardımcı olur. Hacılarla piskoposluğun bildirdiği yer ve saatte buluşmanız yeterlidir. Uzun yolculuktan sonra dinlenmek isteyebilirler. Gösterişli bir karşılama yerine rahat etmelerini sağlayın; banyoyu gösterin, acil iletişim bilgilerini paylaşın, ek yatak takımı sunun (uyku tulumlarını kendileri getirirler) ve atıştırmalık hazırlayın."
        ]
      },
      {
        "q": "Bir hacı ülkeye girişte sorun yaşarsa ne yapmalıyız?",
        "a": [
          "Giriş işlemleriyle ilgili sorunlarla öncelikle hacı ve ülkesinin grup lideri ilgilenir. Bagaj kaybolursa iç çamaşırı ve kişisel bakım ürünleri gibi acil ihtiyaçları sağlamak çok yardımcı olur. Her piskoposluğun WYD organizasyon komitesi (DID) ve Seul WYD organizasyon komitesi (ana etkinlik), destek ve sorunların çözümü için ev sahipliği ekipleri kuracaktır. Eğitimde verilen acil iletişim numaralarını kaydedin."
        ]
      },
      {
        "q": "Yemekleri nasıl hazırlamalıyım? Vejetaryen veya özel beslenme konusunda endişeliyim.",
        "a": [
          "Temel yemek rehberi ev sahipliği eğitiminde verilir. Hacılar günlük programa çıkmadan önce kahvaltı yaptıkları için ev sahipleri kahvaltı sağlamalıdır. Koşullara bağlı olarak bazen akşam yemeği de gerekebilir.",
          "Bazı hacılar kültürel nedenlerle domuz eti veya alkolden kaçınabilir, vejetaryen olabilir ya da alerjileri bulunabilir. Yemek sunmadan önce fotoğraf veya çeviri uygulamasıyla ihtiyaçlarını kontrol edin. Dikkat edilecek çok şey olsa da içtenlikle hazırlanan basit bir yemek, kusursuz bir menüden daha uzun süre hatırlanır."
        ]
      },
      {
        "q": "Tuvalet ve banyo kullanımında kültürel farklılıklar var mı?",
        "a": [
          "Kore'deki banyo alışkanlıkları bazı hacılara yabancı gelebilir. Kullanılmış tuvalet kâğıdının nereye atılacağı veya taharet sisteminin nasıl kullanılacağı gibi konularda basit resimli açıklamalar asmak yararlıdır. Duş saatlerini ve sırasını önceden belirlemek karışıklığı önler."
        ]
      },
      {
        "q": "Değerli eşyalar kaybolur veya çalınırsa ne olur?",
        "a": [
          "Hacılar öncelikle kendi eşyalarından sorumludur. Çoğu seyahat öncesinde sigorta yaptırdığından kayıplar genellikle sigortayla karşılanır. Kayıp bildirildiğinde hemen cemaatinizin WYD sorumlusuyla veya piskoposluğun ev sahipliği ekibiyle iletişime geçin. Hukuki anlaşmazlığa dönüşebilecek konularda piskoposluk operasyon merkezi arabuluculuk yapar."
        ]
      },
      {
        "q": "Bir hacı hastalanıp hastaneye gitmek zorunda kalırsa ne yapmalıyım?",
        "a": [
          "İlaçlarını, seyahat sigortası belgesini ve acil iletişim bilgilerini önceden kontrol edin. Genel bakım için yakındaki hastaneye veya acil servise eşlik edin; acil durumda hemen 119'u arayın ve ardından piskoposluğu bilgilendirin. Sağlık giderleri genellikle hacının sigortasından karşılanır. Tercüme gerekiyorsa yerel yönetim çağrı merkezini (120) veya göçmenlik iletişim merkezini (1345) arayabilirsiniz."
        ]
      },
      {
        "q": "Geç dönüşler veya eve dönüş saati konusunda anlaşmazlık olursa?",
        "a": [
          "Programa bağlı olarak hacılar geç dönebilir. Evinizin düzenini açıkça anlatın ve geç kalacaklarsa önceden haber vermelerini isteyin. Anlaşmazlık konusunda endişeniz varsa piskoposluktan yardım alın."
        ]
      },
      {
        "q": "Hacılar arasında reşit olmayanlar olabilir mi? Nelere dikkat etmeliyiz?",
        "a": [
          "WYD'ye katılım 15 yaşından başladığı için reşit olmayanlar da vardır; güvenlik için yetişkin hacılarla birlikte yerleştirilirler. Onları ağırlayan ailelerden özel ilgi göstermeleri istenir; piskoposluk ayrıca ek rehberlik sağlayacaktır.",
          "Reşit olma yaşı ülkeye göre değişir, ancak Kore'de Kore yasaları geçerlidir. Kore'de yetişkinlik 19 yaşında başlar; 2027 itibarıyla 2008 veya daha önce doğanlar bu kapsamdadır. Daha genç olanlar için kendi ülkelerindeki kurallardan bağımsız olarak Kore'de alkol ve sigara kullanımı yasaktır. Hacıları bilgilendirin; bu onları korumak içindir."
        ]
      },
      {
        "q": "Ortak bir dilimiz olmayacağından endişeliyim.",
        "a": [
          "Geçmiş WYD etkinliklerinde ortak dil olmadan kurulan derin dostlukların pek çok güzel öyküsü vardır. Telefon çeviri uygulamaları veya bu etkinlik için hazırlanan resimli konuşma kartları, yani destekleyici ve alternatif iletişim araçları, dil engelini aşmayı kolaylaştırır. Kusursuz kelimeler olmasa bile içten bir gülümseme her yerde anlaşılır."
        ]
      },
      {
        "q": "Dikkat etmemiz gereken kültürel görgü kuralları var mı?",
        "a": [
          "Birkaç temel ilke yeterlidir. Din, siyaset veya tarih gibi ayrışma yaratabilecek konulara fazla girmeyin. Omuza dokunma veya sarılma gibi fiziksel temas kültürlere göre farklı algılanabilir; karşı taraf başlatana kadar bekleyin. Fotoğraf veya video çekmeden önce mutlaka izin alın."
        ]
      },
      {
        "q": "Kore hakkında güzel anılar bırakmak istiyorum. Ne yapabiliriz?",
        "a": [
          "Birlikte hanbok giymeye veya geleneksel çay içmeye ne dersiniz? Boş zaman varsa yakındaki pazarı, güzel bir restoranı, marketi, jjimjilbang'ı (Kore saunası), yerel gezilecek yerleri veya piskoposluğunuzdaki kutsal bir mekânı ziyaret ederek Kore'nin kültürünü ve inanç mirasını paylaşın. Hacının adını Hangul ile yazıp hediye etmek de ömür boyu saklayacağı güzel bir hatıra olabilir."
        ]
      }
    ],
    "chatbot": {
      "title": "Başka sorularınız mı var?",
      "desc": "DID sohbet botuna sorun. Bu sayfada yer almayan soruları da yanıtlayabilir.",
      "button": "Sohbet Botuna Sor"
    }
  },
  "id": {
    "heroAlt": "Latar belakang halaman",
    "heroTitle": "Tanya Jawab",
    "metaDescription": "Tanya jawab tentang homestay Hari-hari di Keuskupan (DID) WYD2027 Seoul: syarat tuan rumah, penyambutan peziarah, makanan, perbedaan budaya, dan keadaan darurat.",
    "breadcrumb": [
      "PENGUMUMAN /",
      "Tanya Jawab"
    ],
    "pageTitle": "Tanya Jawab Homestay",
    "items": [
      {
        "q": "Apakah ada persyaratan bagi keluarga tuan rumah homestay?",
        "a": [
          "Setiap keluarga Katolik dapat mendaftar melalui parokinya. Setiap rumah harus dapat menerima sedikitnya dua peziarah dan menyediakan ruang untuk kantong tidur, 2 m × 1,5 m per orang. Cantumkan hal yang perlu diperhatikan (misalnya alergi hewan peliharaan) atau preferensi jumlah tamu dan jenis kelamin pada formulir; kami akan berusaha mempertimbangkannya saat penempatan. Untuk peziarah penyandang disabilitas, kami terlebih dahulu memastikan kesiapan tuan rumah, lalu memberikan informasi dukungan tambahan keuskupan sesuai jenis disabilitas (fisik, penglihatan, pendengaran, kognitif, dan sebagainya)."
        ]
      },
      {
        "q": "Bisakah saya mendapat informasi peziarah sebelumnya?",
        "a": [
          "Ya. Setelah penempatan, Anda akan menerima informasi dasar seperti kewarganegaraan, jenis kelamin, usia, pantangan makanan, dan disabilitas. Akan menyenangkan jika Anda menyiapkan sapaan dalam bahasa mereka, kartu sambutan, atau mempelajari sedikit budaya negara mereka."
        ]
      },
      {
        "q": "Bagaimana menyambut mereka pada hari pertama? Haruskah kami menjemput di bandara?",
        "a": [
          "Tim relawan penyambutan bandara dari keuskupan atau paroki membantu penjemputan dan pengantaran. Anda cukup bertemu pada tempat dan waktu yang diumumkan keuskupan. Setelah perjalanan panjang, mereka mungkin ingin membongkar barang dan beristirahat. Bantu mereka merasa nyaman: tunjukkan kamar mandi, bagikan kontak darurat, tawarkan perlengkapan tidur tambahan (peziarah membawa kantong tidur sendiri), dan sediakan makanan ringan."
        ]
      },
      {
        "q": "Bagaimana jika peziarah mengalami masalah saat masuk ke Korea?",
        "a": [
          "Masalah imigrasi pertama-tama ditangani oleh peziarah dan pemimpin kelompok negaranya. Jika bagasi hilang, menyediakan kebutuhan mendesak seperti pakaian dalam dan perlengkapan mandi akan sangat membantu. Panitia WYD setiap keuskupan (DID) dan panitia WYD Seoul (acara utama) akan membentuk tim homestay untuk mendukung keluarga dan menangani masalah. Simpan nomor darurat yang diberikan saat pelatihan homestay."
        ]
      },
      {
        "q": "Bagaimana menyiapkan makanan? Saya khawatir tentang vegetarian atau diet khusus.",
        "a": [
          "Panduan dasar makanan akan diberikan saat pelatihan homestay. Karena peziarah sarapan sebelum mengikuti kegiatan, keluarga tuan rumah perlu menyediakan sarapan. Dalam keadaan tertentu, makan malam juga mungkin diperlukan.",
          "Sebagian peziarah menghindari daging babi atau alkohol karena budaya, merupakan vegetarian, atau memiliki alergi. Periksa kebutuhan mereka sebelum menyajikan makanan, dengan bantuan foto atau aplikasi penerjemah. Walaupun banyak hal perlu diperhatikan, makanan sederhana yang disiapkan dengan tulus akan dikenang lebih lama daripada menu yang sempurna."
        ]
      },
      {
        "q": "Apakah ada perbedaan budaya dalam penggunaan toilet dan kamar mandi?",
        "a": [
          "Sebagian peziarah mungkin belum terbiasa dengan kamar mandi Korea. Pasang panduan bergambar sederhana tentang tempat membuang tisu toilet bekas, penggunaan bidet, dan sebagainya. Menentukan waktu dan urutan mandi sebelumnya juga membantu menghindari kebingungan."
        ]
      },
      {
        "q": "Bagaimana jika barang berharga hilang atau dicuri?",
        "a": [
          "Peziarah terutama bertanggung jawab atas barang pribadi mereka. Sebagian besar membeli asuransi perjalanan sebelum berangkat, sehingga kehilangan biasanya ditangani melalui asuransi. Jika peziarah melaporkan kehilangan, segera hubungi koordinator WYD paroki atau tim homestay keuskupan. Masalah yang dapat menimbulkan sengketa hukum akan dimediasi oleh pusat operasional keuskupan."
        ]
      },
      {
        "q": "Apa yang harus dilakukan jika peziarah sakit dan perlu ke rumah sakit?",
        "a": [
          "Periksa terlebih dahulu obat-obatan, dokumen asuransi perjalanan, dan kontak darurat mereka. Untuk perawatan biasa, dampingi ke rumah sakit atau unit gawat darurat terdekat; dalam keadaan darurat, segera telepon 119 lalu beri tahu keuskupan. Biaya medis biasanya ditanggung asuransi peziarah. Jika perlu penerjemahan, hubungi pusat layanan pemerintah daerah (120) atau pusat kontak imigrasi (1345)."
        ]
      },
      {
        "q": "Bagaimana jika ada konflik tentang pulang larut malam atau jam pulang?",
        "a": [
          "Tergantung program, peziarah mungkin pulang larut. Jelaskan rutinitas rumah Anda dan minta mereka memberi kabar terlebih dahulu jika terlambat. Jika khawatir terjadi konflik, hubungi keuskupan untuk bantuan."
        ]
      },
      {
        "q": "Apakah ada peziarah di bawah umur? Apa yang perlu diperhatikan?",
        "a": [
          "Peserta WYD mulai dari usia 15 tahun, sehingga ada peserta di bawah umur. Demi keselamatan, mereka ditempatkan bersama peziarah dewasa. Keluarga yang menerima mereka diminta memberi perhatian khusus; keuskupan akan menyediakan panduan tambahan.",
          "Usia dewasa menurut hukum berbeda di setiap negara, tetapi hukum Korea berlaku di Korea. Usia dewasa di Korea adalah 19 tahun, sehingga pada 2027 berlaku bagi mereka yang lahir pada 2008 atau sebelumnya. Bagi yang lebih muda, minum alkohol dan merokok dilarang di Korea terlepas dari hukum negara asal. Jelaskan hal ini kepada peziarah sebagai upaya melindungi mereka."
        ]
      },
      {
        "q": "Saya khawatir kami tidak memiliki bahasa yang sama.",
        "a": [
          "Banyak kisah persahabatan mendalam dari WYD sebelumnya terjalin tanpa bahasa yang sama. Aplikasi penerjemah di ponsel atau kartu percakapan bergambar yang dibuat untuk acara ini, sebagai alat komunikasi augmentatif dan alternatif, membantu mengatasi hambatan bahasa. Bahkan tanpa kata-kata sempurna, senyum hangat dapat dipahami di mana saja."
        ]
      },
      {
        "q": "Adakah tata krama budaya yang perlu diperhatikan?",
        "a": [
          "Pegang beberapa prinsip dasar. Hindari membahas terlalu dalam topik yang dapat memecah belah seperti agama, politik, atau sejarah. Kontak fisik seperti merangkul bahu atau memeluk dapat dimaknai berbeda antarbudaya; tunggu hingga pihak lain memulai. Selalu minta izin sebelum mengambil foto atau video."
        ]
      },
      {
        "q": "Saya ingin memberi kenangan indah tentang Korea. Apa yang bisa dilakukan?",
        "a": [
          "Bagaimana jika mengenakan hanbok bersama atau menikmati teh tradisional? Jika ada waktu, kunjungi pasar terdekat, restoran, minimarket, jjimjilbang (sauna Korea), objek wisata, atau tempat suci di keuskupan untuk berbagi budaya dan warisan iman Korea. Menuliskan nama peziarah dalam Hangul sebagai hadiah juga menjadi kenang-kenangan indah seumur hidup."
        ]
      }
    ],
    "chatbot": {
      "title": "Masih ada pertanyaan?",
      "desc": "Tanyakan kepada chatbot DID. Chatbot juga dapat menjawab pertanyaan yang belum dibahas di sini.",
      "button": "Tanya Chatbot"
    }
  },
  "ms": {
    "heroAlt": "Latar belakang subhalaman",
    "heroTitle": "Soalan Lazim",
    "metaDescription": "Soalan lazim tentang homestay Hari-hari di Keuskupan (DID) WYD2027 Seoul: kelayakan tuan rumah, sambutan peziarah, makanan, perbezaan budaya dan kecemasan.",
    "breadcrumb": [
      "PENGUMUMAN /",
      "Soalan Lazim"
    ],
    "pageTitle": "Soalan Lazim Homestay",
    "items": [
      {
        "q": "Adakah syarat kelayakan untuk keluarga tuan rumah homestay?",
        "a": [
          "Mana-mana keluarga Katolik boleh memohon melalui paroki masing-masing. Setiap rumah perlu menerima sekurang-kurangnya dua peziarah dan menyediakan ruang untuk beg tidur, 2 m × 1.5 m seorang. Nyatakan kebimbangan seperti alahan haiwan peliharaan atau pilihan bilangan tetamu dan jantina dalam borang; kami akan cuba mengambil kiranya semasa penempatan. Bagi peziarah kurang upaya, kesediaan tuan rumah disahkan terlebih dahulu, kemudian sokongan tambahan keuskupan diterangkan mengikut jenis ketidakupayaan (fizikal, penglihatan, pendengaran, kognitif dan sebagainya)."
        ]
      },
      {
        "q": "Bolehkah saya menerima maklumat peziarah lebih awal?",
        "a": [
          "Ya. Selepas penempatan, maklumat asas seperti kewarganegaraan, jantina, umur, sekatan pemakanan dan ketidakupayaan akan diberikan lebih awal. Anda boleh menyediakan ucapan dalam bahasa mereka, kad alu-aluan atau mempelajari sedikit budaya negara mereka."
        ]
      },
      {
        "q": "Bagaimanakah kami patut menyambut mereka pada hari pertama? Perlukah menjemput di lapangan terbang?",
        "a": [
          "Pasukan sukarelawan sambutan lapangan terbang keuskupan atau paroki membantu ketibaan dan pelepasan. Anda hanya perlu bertemu pada tempat dan waktu yang dimaklumkan keuskupan. Selepas perjalanan panjang, mereka mungkin mahu mengemas barang dan berehat. Bantu mereka berasa selesa: tunjukkan bilik air, berikan nombor kecemasan, tawarkan peralatan tidur tambahan (peziarah membawa beg tidur sendiri) dan sediakan makanan ringan."
        ]
      },
      {
        "q": "Bagaimana jika peziarah menghadapi masalah memasuki Korea?",
        "a": [
          "Masalah imigresen ditangani terlebih dahulu oleh peziarah dan ketua kumpulan negara mereka. Jika bagasi hilang, bekalan segera seperti pakaian dalam dan kelengkapan mandian amat membantu. Jawatankuasa penganjur WYD setiap keuskupan (DID) dan jawatankuasa WYD Seoul (acara utama) akan menubuhkan pasukan homestay untuk sokongan dan penyelesaian masalah. Simpan nombor kecemasan yang diberikan semasa latihan homestay."
        ]
      },
      {
        "q": "Bagaimanakah makanan perlu disediakan? Saya bimbang tentang vegetarian atau diet khas.",
        "a": [
          "Panduan asas makanan akan diberikan semasa latihan homestay. Oleh sebab peziarah bersarapan sebelum keluar mengikuti program, keluarga tuan rumah perlu menyediakan sarapan. Dalam keadaan tertentu, makan malam juga mungkin perlu disediakan.",
          "Sesetengah peziarah mengelakkan daging babi atau alkohol atas sebab budaya, mengamalkan vegetarian atau mempunyai alahan. Semak keperluan mereka sebelum menghidangkan makanan, menggunakan gambar atau aplikasi terjemahan. Walaupun banyak perkara perlu dipertimbangkan, hidangan ringkas yang disediakan dengan ikhlas lebih lama dikenang daripada menu yang sempurna."
        ]
      },
      {
        "q": "Adakah perbezaan budaya dalam penggunaan tandas dan bilik air?",
        "a": [
          "Sesetengah peziarah mungkin tidak biasa dengan amalan bilik air Korea. Panduan bergambar ringkas tentang tempat membuang tisu tandas terpakai, cara menggunakan bidet dan sebagainya dapat membantu. Menetapkan waktu serta giliran mandi lebih awal juga mengelakkan kekeliruan."
        ]
      },
      {
        "q": "Apa berlaku jika barang berharga hilang atau dicuri?",
        "a": [
          "Peziarah bertanggungjawab terutamanya terhadap barang sendiri. Kebanyakan membeli insurans perjalanan sebelum berlepas, jadi kehilangan biasanya diuruskan melalui insurans. Jika kehilangan dilaporkan, segera hubungi penyelaras WYD paroki atau pasukan homestay keuskupan. Perkara yang mungkin menimbulkan pertikaian undang-undang akan diperantarai oleh pusat operasi keuskupan."
        ]
      },
      {
        "q": "Apa perlu dilakukan jika peziarah sakit dan perlu ke hospital?",
        "a": [
          "Semak ubat-ubatan, dokumen insurans perjalanan dan nombor kecemasan mereka lebih awal. Untuk rawatan biasa, temani mereka ke hospital atau jabatan kecemasan berdekatan; dalam kecemasan, segera hubungi 119 kemudian maklumkan keuskupan. Kos perubatan biasanya dilindungi insurans peziarah. Jika perlukan jurubahasa, hubungi pusat panggilan kerajaan tempatan (120) atau pusat hubungan imigresen (1345)."
        ]
      },
      {
        "q": "Bagaimana jika timbul konflik tentang pulang lewat atau waktu pulang?",
        "a": [
          "Bergantung pada program, peziarah mungkin pulang lewat. Terangkan rutin rumah anda dengan jelas dan minta mereka memaklumkan lebih awal jika lewat. Jika bimbang tentang konflik, hubungi keuskupan untuk bantuan."
        ]
      },
      {
        "q": "Adakah peziarah bawah umur? Apa yang perlu diberi perhatian?",
        "a": [
          "Penyertaan WYD bermula pada usia 15 tahun, jadi ada peserta bawah umur. Demi keselamatan, mereka ditempatkan bersama peziarah dewasa. Keluarga yang menerima mereka diminta memberikan perhatian tambahan; keuskupan akan menyediakan panduan khusus.",
          "Umur dewasa di sisi undang-undang berbeza mengikut negara, tetapi undang-undang Korea terpakai di Korea. Umur dewasa di Korea ialah 19 tahun, maka pada 2027 ia merangkumi mereka yang lahir pada 2008 atau sebelumnya. Bagi yang lebih muda, minum alkohol dan merokok adalah dilarang di Korea tanpa mengira undang-undang negara asal. Maklumkan perkara ini kepada peziarah demi melindungi mereka."
        ]
      },
      {
        "q": "Saya bimbang kami tidak berkongsi bahasa yang sama.",
        "a": [
          "Banyak kisah persahabatan erat daripada WYD terdahulu terjalin tanpa bahasa yang sama. Aplikasi terjemahan telefon atau kad perbualan bergambar yang disediakan untuk acara ini, sebagai alat komunikasi augmentatif dan alternatif, dapat membantu mengatasi halangan bahasa. Walaupun kata-kata tidak sempurna, senyuman mesra difahami di mana-mana."
        ]
      },
      {
        "q": "Adakah adab budaya yang perlu dijaga?",
        "a": [
          "Beberapa prinsip asas sudah banyak membantu. Elakkan perbincangan mendalam tentang topik yang boleh memecahbelahkan seperti agama, politik atau sejarah. Sentuhan seperti merangkul bahu atau berpelukan boleh ditafsirkan berbeza mengikut budaya; tunggu pihak lain memulakannya. Sentiasa minta izin sebelum mengambil gambar atau video."
        ]
      },
      {
        "q": "Saya mahu memberikan kenangan indah tentang Korea. Apa yang sesuai?",
        "a": [
          "Bagaimana jika memakai hanbok bersama atau menikmati teh tradisional? Jika ada masa lapang, kunjungi pasar berdekatan, restoran, kedai serbaneka, jjimjilbang (sauna Korea), tarikan tempatan atau tempat suci dalam keuskupan untuk berkongsi budaya dan warisan iman Korea. Menulis nama peziarah dalam Hangul sebagai hadiah juga menjadi kenang-kenangan indah sepanjang hayat."
        ]
      }
    ],
    "chatbot": {
      "title": "Masih ada soalan?",
      "desc": "Tanya chatbot DID. Chatbot juga boleh menjawab soalan yang tidak diliputi di sini.",
      "button": "Tanya Chatbot"
    }
  },
  kr: {
    heroAlt: "서브페이지 배경",
    heroTitle: "자주하는 질문",
    metaDescription:
      "WYD2027 서울 교구대회(DID) 홈스테이 자주하는 질문(FAQ)입니다. 호스트 신청 자격, 순례자 맞이, 식사 준비, 문화 차이, 비상 상황 대응 방법을 확인하세요.",
    breadcrumb: ["NOTICE /", "자주하는 질문"],
    pageTitle: "홈스테이 자주하는 질문",
    items: [
      {
        q: "홈스테이 호스트 신청 자격과 조건이 있나요?",
        a: [
          "가톨릭 신자 가정이면 누구나 소속 본당을 통해 신청할 수 있습니다. 다만, 가정당 최소 2명 이상 순례자를 맞이해야 하며, 그들이 침낭을 펼칠 수 있는 공간(인당 2m×1.5m)을 제공할 수 있어야 합니다. 주의(반려동물을 키우는 경우 알레르기 문제) 또는 희망(수용 인원, 성별) 사항이 있는 경우 신청서를 통해 알려 주시면 이를 최대한 반영하여 순례자들을 배정합니다. 특히 장애인 순례자 배정은 사전에 호스트의 수용 가능 여부를 확인한 다음, 순례자의 장애 유형(신체·시각·청각·인지 등)에 따라 교구의 추가 지원 사항을 함께 안내해 드립니다.",
        ],
      },
      {
        q: "순례자 정보를 미리 알 수 있나요?",
        a: [
          "네. 순례자가 배정되면 그들의 기본 정보(국적, 성별, 연령, 식이 제한, 장애 여부 등)를 미리 안내해 드립니다. 이를 바탕으로 사전에 순례자의 모국어 인사와 환영 카드 등을 준비하거나 해당 국가의 문화를 익혀 두면 좋겠습니다.",
        ],
      },
      {
        q: "첫날 어떻게 맞이하면 좋을까요? 공항에 마중 나가야 하나요?",
        a: [
          "교구나 본당의 ‘공항 환영 봉사자 팀’이 순례자의 마중과 배웅을 지원하므로 교구가 안내하는 장소와 시간에 순례자들을 만나시면 됩니다. 아마도 장시간 이동으로 지친 그들은 짐을 풀고 쉬기를 원할 것입니다. 거창하게 환영하기보다는 편히 쉴 수 있도록 배려해 주시고, 화장실 위치, 비상 연락처, 여분의 침구(기본 침낭은 순례자 지참), 준비된 간식 등을 간략히 안내해 주시면 좋겠습니다.",
        ],
      },
      {
        q: "순례자에게 입국 문제가 생기면 어떻게 하나요?",
        a: [
          "입국 문제는 순례자 본인과 각 나라 인솔자가 일차적으로 대응합니다. 수하물을 분실하였다면 당장 필요한 생필품(속옷, 세면도구 등)을 제공해 주는 것이 그들에게 큰 도움이 됩니다. 참고로 홈스테이를 지원하고, 발생하는 문제들에 대응하기 위해 교구별 WYD 조직위원회(교구대회)와 서울 WYD 조직위원회(본대회)에서 홈스테이 팀을 운영할 예정입니다. 비상 상황을 위해 홈스테이 교육 때 안내하는 긴급 연락처를 꼭 저장해 두세요.",
        ],
      },
      {
        q: "식사는 어떻게 준비해야 하나요? 채식이나 특수 식단이 걱정입니다.",
        a: [
          "기본 식단은 홈스테이 교육 때 안내해 드립니다. 순례자들은 아침을 먹고 외부 일정을 소화하러 나가야 하기에, 가정에서 아침을 제공해 주어야 합니다. 간혹 사정에 따라 저녁을 마련해 주어야 할 상황이 생길 수도 있습니다.",
          "순례자 중에는 문화적으로 돼지고기나 알코올을 피하거나, 채식주의자나 알레르기 보유자도 있을 수 있습니다. 음식을 제공하기 전에 사진이나 번역 앱을 활용하여 개인별 정보를 파악하시면 도움이 될 것입니다. 언뜻 주의 사항이 많아 보이지만, 완벽한 맞춤 식단보다 정성 어린 소박한 상차림이 더 기억에 남는다고 합니다.",
        ],
      },
      {
        q: "화장실, 욕실 사용 문화 차이도 있을까요?",
        a: [
          "우리나라의 화장실 사용 방식을 낯설게 느끼는 순례자들도 있습니다. 다 쓴 휴지를 어디에 버려야 하는지, 비데를 어떻게 사용하는지 등 직관적인 그림 안내 카드를 붙여두면 좋습니다. 또한 욕실(샤워) 이용 시간과 순서는 미리 정해 두면 혼선을 줄일 수 있습니다.",
        ],
      },
      {
        q: "귀중품 분실이나 도난 문제가 생기면 어떻게 되나요?",
        a: [
          "기본적으로 소지품 관리는 순례자 본인 책임입니다. 대부분 출국하기 전에 여행자 보험에 가입하므로 분실 상황이 생기면 보험으로 처리합니다. 순례자가 소지품을 분실했다고 알리면 즉시 본당 WYD 담당자나 교구 홈스테이 팀에 연락하세요. 법적 분쟁으로 이어지는 사안은 교구 운영 본부가 중재 역할을 합니다.",
        ],
      },
      {
        q: "순례자가 아파서 병원에 가야 하면 어떻게 하나요?",
        a: [
          "비상 상황을 대비하여 순례자의 복용 약물과 여행자 보험 증서, 긴급 연락처를 미리 확인해 두세요. 일반 진료의 경우 가까운 병원이나 응급실에 동행하고, 응급 상황 발생 시 즉시 119에 연락 후 교구에 알리세요. 의료비는 대부분 순례자가 가입한 보험으로 처리됩니다. 외국어 통역이 필요하다면 지역 행정 콜센터(120번)나 외국인 종합 안내(1345번) 전화 상담을 이용할 수 있습니다.",
        ],
      },
      {
        q: "심야 귀가 또는 통금 문제로 갈등이 생기면 어떻게 하나요?",
        a: [
          "프로그램에 따라 귀가가 늦어질 수 있습니다. 순례자에게 가정의 기본 생활을 명확히 전달하고, 늦어질 경우 사전에 연락해 달라고 부탁하세요. 갈등이 염려되는 경우 교구로 연락해서 도움을 청하세요.",
        ],
      },
      {
        q: "순례자 중 미성년자가 있을 수 있나요? 이 경우 뭘 주의해야 하나요?",
        a: [
          "WYD 참가 연령은 만 15세부터이므로 미성년자가 포함되며, 안전을 위해 성인 순례자가 함께 배정됩니다. 미성년자를 맞이하는 홈스테이 가정에서는 그들을 더 주의 깊게 신경 써주시길 바라며, 이를 위해 교구 차원에서도 별도로 추가 안내를 할 것입니다.",
          "법적 성인 기준은 나라마다 다릅니다. 다만, 핵심은 ‘한국에서는 한국법을 따르는 것’이 원칙입니다. 한국은 만 19세부터 성인이므로 2027년 기준 2008년생까지 해당하며, 그 이하 출생자는 음주와 흡연 모두 본국법과 관계없이 한국에서는 불법입니다. 홈스테이 가정은 이 점을 순례자에게 안내해 주세요. 이는 제재가 아닌 순례자 보호를 위한 배려입니다.",
        ],
      },
      {
        q: "언어가 전혀 통하지 않을 것 같아 걱정이에요.",
        a: [
          "이전 WYD의 사례를 보면 언어가 전혀 통하지 않았음에도 서로 깊은 우정을 쌓았다는 미담이 많습니다. 여기에 휴대폰 번역 앱을 활용하거나, 이번 대회를 위해 제작한 그림 대화 카드인 ‘보완 대체 의사소통 도구’를 활용하시면 언어 장벽을 훨씬 쉽게 넘을 수 있을 것입니다. 완벽한 언어가 아니어도 밝은 미소는 언제 어디서나 통합니다.",
        ],
      },
      {
        q: "특별히 주의해야 할 문화 예절이 있나요?",
        a: [
          "몇 가지 기본 원칙을 지키면 서로를 충분히 배려할 수 있습니다. 우선 종교나 정치, 역사처럼 논쟁의 여지가 있는 주제는 깊이 다루지 않는 것이 좋습니다. 어깨동무나 포옹 같은 신체 접촉은 나라와 문화에 따라 느끼는 바가 다를 수 있으므로, 상대방이 먼저 청하기 전까지는 자제해 주세요. 또 사진이나 영상은 반드시 사전에 동의를 구하는 것을 잊지 말아주세요!",
        ],
      },
      {
        q: "한국의 좋은 기억을 주고 싶어요. 무엇이 좋을까요?",
        a: [
          "가장 전통적인 것이 가장 한국적이라고 하지요. 한복을 준비해 같이 입고, 전통 차를 함께 마셔 보면 어떨까요. 자유 시간이 있다면, 근처 시장이나 맛집, 편의점, 찜질방, 명소 등을 방문하거나, 교구 내 성지를 찾는 등 한국 고유의 문화와 신앙 유산을 전하는 것도 좋겠습니다. 또 순례자의 이름을 한글로 적어 선물하는 것도 평생 간직할 아름다운 기념품이 될 것입니다.",
        ],
      },
    ],
    chatbot: {
      title: "더 궁금한 점이 있으신가요?",
      desc: "교구대회 챗봇에게 물어보세요. 자주하는 질문에 없는 내용도 챗봇이 친절하게 답변해 드립니다.",
      button: "챗봇에게 물어보기",
    },
  },

  en: {
    heroAlt: "Sub page background",
    heroTitle: "FAQ",
    metaDescription:
      "Frequently asked questions about the WYD2027 Seoul Days in Diocese (DID) homestay. Learn about host eligibility, welcoming pilgrims, meals, cultural differences, and emergency procedures.",
    breadcrumb: ["NOTICE /", "FAQ"],
    pageTitle: "Homestay FAQ",
    items: [
      {
        q: "Are there any eligibility requirements or conditions for homestay hosts?",
        a: [
          "Any Catholic family may apply through their parish. Each household should be able to welcome at least two pilgrims and provide enough space for them to lay out sleeping bags (2m × 1.5m per person). If you have any concerns (e.g., pet allergies) or preferences (number of guests, gender), please note them on the application form and we will do our best to reflect them when assigning pilgrims. For pilgrims with disabilities, we first confirm whether the host can accommodate them, and then provide additional diocesan support depending on the type of disability (physical, visual, hearing, cognitive, etc.).",
        ],
      },
      {
        q: "Can I receive information about the pilgrims in advance?",
        a: [
          "Yes. Once pilgrims are assigned, you will receive their basic information in advance (nationality, gender, age, dietary restrictions, disabilities, etc.). It would be lovely to prepare a greeting in their native language, a welcome card, or to learn a little about their country's culture beforehand.",
        ],
      },
      {
        q: "How should we welcome them on the first day? Do we need to pick them up at the airport?",
        a: [
          "The diocesan or parish 'airport welcome volunteer team' will assist with picking up and sending off pilgrims, so you only need to meet them at the place and time the diocese announces. After a long journey, they will likely want to unpack and rest. Rather than an elaborate welcome, help them settle in comfortably: briefly show them the bathroom, share emergency contacts, offer extra bedding (pilgrims bring their own sleeping bags), and have some snacks ready.",
        ],
      },
      {
        q: "What if a pilgrim has problems entering the country?",
        a: [
          "Immigration issues are handled first by the pilgrim and their national group leader. If their luggage is lost, providing immediate necessities (underwear, toiletries, etc.) will be a great help. For reference, each diocesan WYD organizing committee (DID) and the Seoul WYD organizing committee (main event) will operate homestay teams to support homestays and respond to any issues. Be sure to save the emergency contact numbers provided during homestay training.",
        ],
      },
      {
        q: "How should I prepare meals? I'm worried about vegetarian or special diets.",
        a: [
          "Basic meal guidelines will be provided during homestay training. Since pilgrims eat breakfast before heading out for the day's schedule, host families should provide breakfast. Occasionally, circumstances may require you to prepare dinner as well.",
          "Some pilgrims may avoid pork or alcohol for cultural reasons, be vegetarian, or have allergies. Before serving food, it helps to check each person's needs using photos or a translation app. It may seem like a lot to keep in mind, but a simple, heartfelt meal is remembered far longer than a perfectly customized menu.",
        ],
      },
      {
        q: "Are there cultural differences in using the toilet and bathroom?",
        a: [
          "Some pilgrims may find Korean bathroom customs unfamiliar. It helps to post simple picture guides — where to dispose of used toilet paper, how to use the bidet, and so on. Setting shower times and order in advance can also prevent confusion.",
        ],
      },
      {
        q: "What happens if valuables are lost or stolen?",
        a: [
          "Pilgrims are primarily responsible for their own belongings. Most purchase travel insurance before departure, so losses are usually handled through insurance. If a pilgrim reports a lost item, contact your parish WYD coordinator or the diocesan homestay team immediately. Matters that could lead to legal disputes will be mediated by the diocesan operations headquarters.",
        ],
      },
      {
        q: "What should I do if a pilgrim gets sick and needs to go to the hospital?",
        a: [
          "In preparation for emergencies, check the pilgrim's medications, travel insurance certificate, and emergency contacts in advance. For general care, accompany them to a nearby hospital or emergency room; in an emergency, call 119 immediately and then notify the diocese. Medical costs are usually covered by the pilgrim's insurance. If interpretation is needed, you can call the local government call center (120) or the immigration contact center (1345).",
        ],
      },
      {
        q: "What if conflicts arise over late-night returns or curfews?",
        a: [
          "Depending on the program, pilgrims may return late. Clearly communicate your household routine and ask them to contact you in advance if they will be late. If you are concerned about a conflict, contact the diocese for help.",
        ],
      },
      {
        q: "Could there be minors among the pilgrims? What should we keep in mind?",
        a: [
          "WYD participation starts at age 15, so minors are included; for safety, adult pilgrims are assigned together with them. Host families welcoming minors are asked to look after them with extra care, and the diocese will provide separate additional guidance for this.",
          "The legal age of adulthood differs by country, but the key principle is that Korean law applies in Korea. In Korea, adulthood begins at age 19, so as of 2027 this applies to those born in 2008 or earlier; for anyone younger, both drinking and smoking are illegal in Korea regardless of their home country's laws. Please inform your pilgrims of this — it is not a restriction but a way of protecting them.",
        ],
      },
      {
        q: "I'm worried we won't share any common language.",
        a: [
          "From past WYDs there are many heartwarming stories of deep friendships formed despite no shared language. On top of that, using a phone translation app or the picture conversation cards created for this event — an 'augmentative and alternative communication tool' — will make the language barrier much easier to cross. Even without perfect words, a bright smile is understood anywhere.",
        ],
      },
      {
        q: "Are there any cultural manners we should be careful about?",
        a: [
          "A few basic principles go a long way. Avoid going deep into potentially divisive topics such as religion, politics, or history. Physical contact like shoulder hugs or embraces can be perceived differently across cultures, so hold back until the other person initiates. And never forget to ask for consent before taking photos or videos!",
        ],
      },
      {
        q: "I want to give them good memories of Korea. What would be nice?",
        a: [
          "They say the most traditional things are the most Korean. How about wearing hanbok together or sharing traditional tea? If there is free time, visit a nearby market, a good restaurant, a convenience store, a jjimjilbang (Korean sauna), or local attractions — or a holy site in your diocese to share Korea's unique culture and heritage of faith. Writing the pilgrim's name in Hangul as a gift also makes a beautiful keepsake they will treasure for life.",
        ],
      },
    ],
    chatbot: {
      title: "Still have questions?",
      desc: "Ask the DID chatbot. It can kindly answer questions that are not covered in this FAQ.",
      button: "Ask the Chatbot",
    },
  },
  es: {
    heroAlt: "Fondo de subpágina",
    heroTitle: "Preguntas frecuentes",
    metaDescription:
      "Preguntas frecuentes sobre el homestay de las Jornadas en las Diócesis (DID) de la JMJ 2027 Seúl. Requisitos para las familias anfitrionas, acogida de peregrinos, comidas, diferencias culturales y emergencias.",
    breadcrumb: ["NOTICE /", "Preguntas frecuentes"],
    pageTitle: "Preguntas frecuentes sobre el homestay",
    items: [
      {
        q: "¿Existen requisitos o condiciones para ser familia anfitriona?",
        a: [
          "Cualquier familia católica puede inscribirse a través de su parroquia. Cada hogar debe poder acoger al menos a dos peregrinos y ofrecer espacio suficiente para que extiendan sus sacos de dormir (2 m × 1,5 m por persona). Si tiene alguna advertencia (p. ej., alergias por mascotas) o preferencia (número de personas, sexo), indíquelo en el formulario de inscripción y lo tendremos en cuenta en la medida de lo posible al asignar a los peregrinos. En el caso de peregrinos con discapacidad, primero se confirma si la familia puede acogerlos y luego la diócesis informa sobre el apoyo adicional según el tipo de discapacidad (física, visual, auditiva, cognitiva, etc.).",
        ],
      },
      {
        q: "¿Puedo conocer la información de los peregrinos con antelación?",
        a: [
          "Sí. Una vez asignados los peregrinos, se le informará con antelación de sus datos básicos (nacionalidad, sexo, edad, restricciones alimentarias, discapacidad, etc.). Con esa información, sería estupendo preparar un saludo en su idioma, una tarjeta de bienvenida o familiarizarse con la cultura de su país.",
        ],
      },
      {
        q: "¿Cómo los recibimos el primer día? ¿Tenemos que ir a buscarlos al aeropuerto?",
        a: [
          "El 'equipo de voluntarios de bienvenida del aeropuerto' de la diócesis o de la parroquia se encarga de recibir y despedir a los peregrinos, así que solo tiene que encontrarse con ellos en el lugar y a la hora que indique la diócesis. Tras un largo viaje, probablemente querrán deshacer las maletas y descansar. Más que una gran bienvenida, ayúdelos a instalarse cómodamente: indíqueles brevemente dónde está el baño, los contactos de emergencia, la ropa de cama adicional (los peregrinos traen su propio saco de dormir) y algún refrigerio preparado.",
        ],
      },
      {
        q: "¿Qué pasa si un peregrino tiene problemas para entrar al país?",
        a: [
          "Los problemas de inmigración los gestionan en primer lugar el propio peregrino y el responsable de su grupo nacional. Si pierde el equipaje, proporcionarle artículos de primera necesidad (ropa interior, artículos de aseo, etc.) será de gran ayuda. Como referencia, los comités organizadores diocesanos de la JMJ (DID) y el comité organizador de la JMJ de Seúl (evento principal) contarán con equipos de homestay para apoyar a las familias y responder a los problemas que surjan. Guarde los contactos de emergencia que se facilitarán en la formación de homestay.",
        ],
      },
      {
        q: "¿Cómo preparo las comidas? Me preocupan las dietas vegetarianas o especiales.",
        a: [
          "Las pautas básicas de alimentación se explicarán en la formación de homestay. Como los peregrinos desayunan antes de salir a las actividades del día, la familia debe ofrecerles el desayuno. En ocasiones, según las circunstancias, puede que también haya que preparar la cena.",
          "Algunos peregrinos pueden evitar la carne de cerdo o el alcohol por motivos culturales, ser vegetarianos o tener alergias. Antes de servir la comida, conviene conocer las necesidades de cada uno con fotos o una aplicación de traducción. Puede parecer que hay mucho que tener en cuenta, pero dicen que una mesa sencilla preparada con cariño se recuerda más que un menú perfectamente personalizado.",
        ],
      },
      {
        q: "¿Hay diferencias culturales en el uso del baño?",
        a: [
          "A algunos peregrinos las costumbres coreanas del baño les resultan extrañas. Es útil colocar tarjetas con dibujos intuitivos: dónde tirar el papel usado, cómo usar el bidé, etc. También conviene acordar de antemano los horarios y el orden de la ducha para evitar confusiones.",
        ],
      },
      {
        q: "¿Qué ocurre si se pierden o roban objetos de valor?",
        a: [
          "En principio, cada peregrino es responsable de sus pertenencias. La mayoría contrata un seguro de viaje antes de salir de su país, por lo que las pérdidas se tramitan a través del seguro. Si un peregrino comunica que ha perdido algo, contacte de inmediato con el responsable de la JMJ de su parroquia o con el equipo de homestay diocesano. Los asuntos que puedan derivar en disputas legales serán mediados por la sede operativa de la diócesis.",
        ],
      },
      {
        q: "¿Qué hago si un peregrino se enferma y necesita ir al hospital?",
        a: [
          "Para prevenir emergencias, verifique con antelación los medicamentos del peregrino, su certificado de seguro de viaje y sus contactos de emergencia. Para consultas generales, acompáñelo a un hospital o urgencias cercanos; en caso de emergencia, llame de inmediato al 119 y avise a la diócesis. Los gastos médicos suelen cubrirse con el seguro del peregrino. Si necesita interpretación, puede llamar al centro de atención de la administración local (120) o al centro de información para extranjeros (1345).",
        ],
      },
      {
        q: "¿Qué hago si surgen conflictos por regresos nocturnos o toques de queda?",
        a: [
          "Según el programa, los peregrinos pueden regresar tarde. Comunique claramente las normas básicas de su hogar y pídales que avisen con antelación si van a llegar tarde. Si le preocupa un conflicto, contacte con la diócesis para pedir ayuda.",
        ],
      },
      {
        q: "¿Puede haber menores de edad entre los peregrinos? ¿Qué debemos tener en cuenta?",
        a: [
          "La edad de participación en la JMJ comienza a los 15 años, por lo que habrá menores; por seguridad, se les asignan peregrinos adultos que los acompañan. Pedimos a las familias que acogen a menores que los cuiden con especial atención, y la diócesis ofrecerá orientaciones adicionales al respecto.",
          "La mayoría de edad legal varía según el país, pero el principio fundamental es que en Corea se aplica la ley coreana. En Corea la mayoría de edad es a los 19 años, así que en 2027 corresponde a los nacidos en 2008 o antes; para los más jóvenes, beber alcohol y fumar son ilegales en Corea, independientemente de la ley de su país. Informe de esto a sus peregrinos: no es una sanción, sino una forma de protegerlos.",
        ],
      },
      {
        q: "Me preocupa que no compartamos ningún idioma.",
        a: [
          "En las JMJ anteriores hay muchas historias conmovedoras de amistades profundas que nacieron sin compartir idioma. Además, usar una aplicación de traducción del móvil o las tarjetas de conversación con dibujos creadas para este evento —una 'herramienta de comunicación aumentativa y alternativa'— facilitará mucho superar la barrera del idioma. Aunque las palabras no sean perfectas, una sonrisa luminosa se entiende en cualquier lugar.",
        ],
      },
      {
        q: "¿Hay normas de cortesía cultural que debamos cuidar especialmente?",
        a: [
          "Con unos principios básicos es suficiente para respetarse mutuamente. Es mejor no profundizar en temas potencialmente polémicos como la religión, la política o la historia. El contacto físico, como pasar el brazo por el hombro o abrazar, puede percibirse de forma distinta según el país y la cultura, así que absténgase hasta que la otra persona lo proponga. ¡Y no olvide pedir siempre permiso antes de tomar fotos o vídeos!",
        ],
      },
      {
        q: "Quiero regalarles buenos recuerdos de Corea. ¿Qué sería bueno?",
        a: [
          "Dicen que lo más tradicional es lo más coreano. ¿Qué tal vestir juntos el hanbok o compartir un té tradicional? Si hay tiempo libre, pueden visitar un mercado cercano, un buen restaurante, una tienda de conveniencia, un jjimjilbang (sauna coreana) o lugares emblemáticos, o acudir a un santuario de la diócesis para transmitir la cultura y el patrimonio de fe de Corea. Escribir el nombre del peregrino en hangul como regalo también será un hermoso recuerdo que guardará toda la vida.",
        ],
      },
    ],
    chatbot: {
      title: "¿Todavía tiene preguntas?",
      desc: "Pregunte al chatbot del DID. Responderá con gusto incluso a las preguntas que no aparecen en esta sección.",
      button: "Preguntar al chatbot",
    },
  },

  fr: {
    heroAlt: "Arrière-plan de sous-page",
    heroTitle: "Questions fréquentes",
    metaDescription:
      "Questions fréquentes sur le homestay des Journées en Diocèse (DID) des JMJ 2027 Séoul. Conditions pour les familles d'accueil, accueil des pèlerins, repas, différences culturelles et urgences.",
    breadcrumb: ["NOTICE /", "Questions fréquentes"],
    pageTitle: "Questions fréquentes sur le homestay",
    items: [
      {
        q: "Y a-t-il des conditions pour devenir famille d'accueil ?",
        a: [
          "Toute famille catholique peut s'inscrire par l'intermédiaire de sa paroisse. Chaque foyer doit pouvoir accueillir au moins deux pèlerins et disposer d'un espace suffisant pour qu'ils déroulent leur sac de couchage (2 m × 1,5 m par personne). Si vous avez des points d'attention (p. ex. allergies liées aux animaux de compagnie) ou des souhaits (nombre de personnes, sexe), indiquez-les dans le formulaire d'inscription : nous en tiendrons compte autant que possible lors de l'affectation des pèlerins. Pour les pèlerins en situation de handicap, nous vérifions d'abord si la famille peut les accueillir, puis le diocèse précise les aides supplémentaires selon le type de handicap (moteur, visuel, auditif, cognitif, etc.).",
        ],
      },
      {
        q: "Peut-on connaître à l'avance les informations sur les pèlerins ?",
        a: [
          "Oui. Une fois les pèlerins affectés, leurs informations de base vous seront communiquées à l'avance (nationalité, sexe, âge, restrictions alimentaires, handicap, etc.). Sur cette base, il serait bien de préparer un mot d'accueil dans leur langue maternelle, une carte de bienvenue, ou de vous familiariser avec la culture de leur pays.",
        ],
      },
      {
        q: "Comment les accueillir le premier jour ? Faut-il aller les chercher à l'aéroport ?",
        a: [
          "L'« équipe de bénévoles d'accueil à l'aéroport » du diocèse ou de la paroisse prend en charge l'accueil et le départ des pèlerins : il vous suffit de les retrouver au lieu et à l'heure indiqués par le diocèse. Fatigués par un long voyage, ils voudront sans doute défaire leurs bagages et se reposer. Plutôt qu'un accueil grandiose, aidez-les à s'installer confortablement : montrez-leur brièvement les toilettes, les contacts d'urgence, la literie supplémentaire (les pèlerins apportent leur propre sac de couchage) et quelques collations préparées.",
        ],
      },
      {
        q: "Que faire si un pèlerin rencontre des problèmes à l'entrée du pays ?",
        a: [
          "Les problèmes d'immigration sont d'abord traités par le pèlerin lui-même et le responsable de son groupe national. En cas de perte de bagages, fournir les produits de première nécessité (sous-vêtements, articles de toilette, etc.) leur sera d'une grande aide. À noter : pour soutenir les homestays et répondre aux problèmes éventuels, les comités d'organisation diocésains des JMJ (DID) et le comité d'organisation des JMJ de Séoul (événement principal) mettront en place des équipes homestay. Enregistrez bien les numéros d'urgence communiqués lors de la formation homestay.",
        ],
      },
      {
        q: "Comment préparer les repas ? Les régimes végétariens ou particuliers m'inquiètent.",
        a: [
          "Les repas de base seront présentés lors de la formation homestay. Comme les pèlerins prennent leur petit-déjeuner avant de partir pour le programme de la journée, la famille d'accueil doit le leur fournir. Selon les circonstances, il peut arriver qu'il faille aussi préparer le dîner.",
          "Certains pèlerins évitent le porc ou l'alcool pour des raisons culturelles, sont végétariens ou ont des allergies. Avant de servir un plat, il est utile de vérifier les besoins de chacun à l'aide de photos ou d'une application de traduction. Cela peut sembler beaucoup de précautions, mais on dit qu'une table simple préparée avec cœur laisse un souvenir plus durable qu'un menu parfaitement personnalisé.",
        ],
      },
      {
        q: "Y a-t-il des différences culturelles pour les toilettes et la salle de bain ?",
        a: [
          "Certains pèlerins peuvent trouver les usages coréens des toilettes déroutants. Il est utile d'afficher des cartes illustrées intuitives : où jeter le papier usagé, comment utiliser le bidet, etc. Fixer à l'avance les horaires et l'ordre de passage à la douche évite aussi les confusions.",
        ],
      },
      {
        q: "Que se passe-t-il en cas de perte ou de vol d'objets de valeur ?",
        a: [
          "En principe, chaque pèlerin est responsable de ses affaires. La plupart souscrivent une assurance voyage avant le départ ; les pertes sont donc généralement réglées par l'assurance. Si un pèlerin signale la perte d'un objet, contactez immédiatement le responsable JMJ de votre paroisse ou l'équipe homestay diocésaine. Les affaires susceptibles de déboucher sur un litige juridique seront arbitrées par le siège opérationnel du diocèse.",
        ],
      },
      {
        q: "Que faire si un pèlerin tombe malade et doit aller à l'hôpital ?",
        a: [
          "En prévision des urgences, vérifiez à l'avance les médicaments du pèlerin, son attestation d'assurance voyage et ses contacts d'urgence. Pour des soins courants, accompagnez-le dans un hôpital ou aux urgences à proximité ; en cas d'urgence, appelez immédiatement le 119 puis prévenez le diocèse. Les frais médicaux sont généralement couverts par l'assurance du pèlerin. Si une interprétation est nécessaire, vous pouvez appeler le centre d'appel de l'administration locale (120) ou le centre d'information pour les étrangers (1345).",
        ],
      },
      {
        q: "Que faire en cas de conflit lié aux retours tardifs ou au couvre-feu ?",
        a: [
          "Selon le programme, les retours peuvent être tardifs. Expliquez clairement les habitudes de votre foyer et demandez aux pèlerins de prévenir à l'avance en cas de retard. Si vous craignez un conflit, contactez le diocèse pour demander de l'aide.",
        ],
      },
      {
        q: "Peut-il y avoir des mineurs parmi les pèlerins ? À quoi faut-il faire attention ?",
        a: [
          "La participation aux JMJ est possible dès 15 ans : il y aura donc des mineurs et, pour leur sécurité, des pèlerins adultes leur sont adjoints. Nous demandons aux familles accueillant des mineurs de veiller sur eux avec une attention particulière ; le diocèse fournira par ailleurs des consignes supplémentaires à ce sujet.",
          "L'âge de la majorité varie selon les pays, mais le principe essentiel est qu'en Corée, c'est la loi coréenne qui s'applique. En Corée, la majorité est fixée à 19 ans : en 2027, cela concerne les personnes nées en 2008 ou avant ; pour les plus jeunes, l'alcool et le tabac sont illégaux en Corée, quelle que soit la loi de leur pays d'origine. Informez-en vos pèlerins : ce n'est pas une sanction, mais une attention pour les protéger.",
        ],
      },
      {
        q: "J'ai peur que nous n'ayons aucune langue en commun.",
        a: [
          "Les JMJ précédentes regorgent de belles histoires d'amitiés profondes nées sans langue commune. De plus, une application de traduction sur téléphone ou les cartes de conversation illustrées créées pour cet événement — un « outil de communication améliorée et alternative » — vous aideront à franchir bien plus facilement la barrière de la langue. Même sans mots parfaits, un sourire lumineux se comprend partout.",
        ],
      },
      {
        q: "Y a-t-il des règles de politesse culturelle à respecter particulièrement ?",
        a: [
          "Quelques principes de base suffisent pour se respecter mutuellement. Évitez d'approfondir les sujets potentiellement sensibles comme la religion, la politique ou l'histoire. Les contacts physiques, comme passer le bras autour des épaules ou les accolades, peuvent être perçus différemment selon les pays et les cultures : abstenez-vous tant que l'autre personne n'en prend pas l'initiative. Et n'oubliez jamais de demander le consentement avant de prendre des photos ou des vidéos !",
        ],
      },
      {
        q: "Je veux leur laisser de beaux souvenirs de la Corée. Que proposer ?",
        a: [
          "On dit que le plus traditionnel est le plus coréen. Pourquoi ne pas porter ensemble le hanbok ou partager un thé traditionnel ? S'il y a du temps libre, visitez un marché voisin, un bon restaurant, une supérette, un jjimjilbang (sauna coréen) ou des sites remarquables, ou rendez-vous dans un sanctuaire du diocèse pour transmettre la culture et le patrimoine de foi propres à la Corée. Offrir le prénom du pèlerin calligraphié en hangeul sera aussi un magnifique souvenir qu'il gardera toute sa vie.",
        ],
      },
    ],
    chatbot: {
      title: "D'autres questions ?",
      desc: "Interrogez le chatbot du DID. Il répondra volontiers aux questions qui ne figurent pas dans cette FAQ.",
      button: "Demander au chatbot",
    },
  },

  pt: {
    heroAlt: "Plano de fundo da subpágina",
    heroTitle: "Perguntas frequentes",
    metaDescription:
      "Perguntas frequentes sobre o homestay dos Dias nas Dioceses (DID) da JMJ 2027 Seul. Requisitos para famílias anfitriãs, acolhida dos peregrinos, refeições, diferenças culturais e emergências.",
    breadcrumb: ["NOTICE /", "Perguntas frequentes"],
    pageTitle: "Perguntas frequentes sobre o homestay",
    items: [
      {
        q: "Há requisitos ou condições para ser família anfitriã?",
        a: [
          "Qualquer família católica pode se inscrever por meio de sua paróquia. Cada casa deve poder acolher pelo menos dois peregrinos e oferecer espaço suficiente para que estendam seus sacos de dormir (2 m × 1,5 m por pessoa). Se houver pontos de atenção (p. ex., alergias por animais de estimação) ou preferências (número de pessoas, sexo), informe no formulário de inscrição e faremos o possível para considerá-los na designação dos peregrinos. No caso de peregrinos com deficiência, primeiro confirmamos se a família pode acolhê-los e, em seguida, a diocese orienta sobre os apoios adicionais conforme o tipo de deficiência (física, visual, auditiva, cognitiva etc.).",
        ],
      },
      {
        q: "Posso saber as informações dos peregrinos com antecedência?",
        a: [
          "Sim. Assim que os peregrinos forem designados, você receberá antecipadamente as informações básicas deles (nacionalidade, sexo, idade, restrições alimentares, deficiência etc.). Com base nisso, seria ótimo preparar uma saudação no idioma deles, um cartão de boas-vindas ou conhecer um pouco da cultura do país deles.",
        ],
      },
      {
        q: "Como recebê-los no primeiro dia? Precisamos buscá-los no aeroporto?",
        a: [
          "A 'equipe de voluntários de acolhida no aeroporto' da diocese ou da paróquia apoia a chegada e a partida dos peregrinos, então basta encontrá-los no local e horário indicados pela diocese. Cansados da longa viagem, eles provavelmente vão querer desfazer as malas e descansar. Em vez de uma grande recepção, ajude-os a se acomodar com conforto: mostre rapidamente onde fica o banheiro, os contatos de emergência, a roupa de cama extra (os peregrinos trazem o próprio saco de dormir) e alguns lanches preparados.",
        ],
      },
      {
        q: "E se um peregrino tiver problemas na imigração?",
        a: [
          "Os problemas de imigração são tratados primeiramente pelo próprio peregrino e pelo líder do grupo de seu país. Se a bagagem for extraviada, fornecer itens de primeira necessidade (roupas íntimas, produtos de higiene etc.) será de grande ajuda. Para referência, os comitês organizadores diocesanos da JMJ (DID) e o comitê organizador da JMJ de Seul (evento principal) manterão equipes de homestay para apoiar as famílias e responder aos problemas. Guarde os contatos de emergência informados no treinamento de homestay.",
        ],
      },
      {
        q: "Como preparar as refeições? Estou preocupado com dietas vegetarianas ou especiais.",
        a: [
          "O cardápio básico será orientado no treinamento de homestay. Como os peregrinos tomam café da manhã antes de sair para a programação do dia, a família deve oferecer o café da manhã. Em algumas situações, pode ser necessário preparar também o jantar.",
          "Entre os peregrinos pode haver quem evite carne de porco ou álcool por motivos culturais, vegetarianos ou pessoas com alergias. Antes de servir a comida, ajuda verificar as necessidades de cada um usando fotos ou um aplicativo de tradução. Pode parecer muita coisa, mas dizem que uma mesa simples e preparada com carinho é mais lembrada do que um cardápio perfeitamente personalizado.",
        ],
      },
      {
        q: "Há diferenças culturais no uso do banheiro?",
        a: [
          "Alguns peregrinos podem estranhar os costumes coreanos do banheiro. É útil afixar cartões ilustrados intuitivos: onde jogar o papel usado, como usar o bidê etc. Definir com antecedência os horários e a ordem do banho também evita confusões.",
        ],
      },
      {
        q: "O que acontece em caso de perda ou furto de objetos de valor?",
        a: [
          "Em princípio, cada peregrino é responsável por seus pertences. A maioria contrata seguro-viagem antes de sair do país, então as perdas costumam ser resolvidas pelo seguro. Se um peregrino comunicar a perda de um pertence, contate imediatamente o responsável pela JMJ na paróquia ou a equipe de homestay diocesana. Questões que possam gerar disputas legais serão mediadas pela sede operacional da diocese.",
        ],
      },
      {
        q: "O que fazer se um peregrino ficar doente e precisar ir ao hospital?",
        a: [
          "Para se preparar para emergências, verifique com antecedência os medicamentos do peregrino, o certificado do seguro-viagem e os contatos de emergência. Para atendimentos comuns, acompanhe-o a um hospital ou pronto-socorro próximo; em emergências, ligue imediatamente para o 119 e avise a diocese. As despesas médicas geralmente são cobertas pelo seguro do peregrino. Se precisar de interpretação, ligue para a central de atendimento da administração local (120) ou para o centro de informações para estrangeiros (1345).",
        ],
      },
      {
        q: "E se surgirem conflitos por causa de retornos tarde da noite ou horários?",
        a: [
          "Dependendo da programação, o retorno pode ser tarde. Comunique claramente a rotina básica da casa e peça que avisem com antecedência caso se atrasem. Se houver receio de conflito, contate a diocese e peça ajuda.",
        ],
      },
      {
        q: "Pode haver menores de idade entre os peregrinos? O que devemos observar?",
        a: [
          "A participação na JMJ começa aos 15 anos, então haverá menores; por segurança, peregrinos adultos são designados junto com eles. Pedimos às famílias que acolhem menores que cuidem deles com atenção redobrada, e a diocese fornecerá orientações adicionais sobre isso.",
          "A maioridade legal varia de país para país, mas o princípio central é que na Coreia vale a lei coreana. Na Coreia, a maioridade começa aos 19 anos; em 2027, isso corresponde aos nascidos até 2008. Para os mais novos, beber e fumar são ilegais na Coreia, independentemente da lei do país de origem. Informe isso aos seus peregrinos: não é uma punição, mas um cuidado para protegê-los.",
        ],
      },
      {
        q: "Estou preocupado porque talvez não tenhamos nenhum idioma em comum.",
        a: [
          "Das JMJ anteriores há muitas histórias emocionantes de amizades profundas construídas mesmo sem idioma em comum. Além disso, usar um aplicativo de tradução no celular ou os cartões de conversação ilustrados criados para este evento — uma 'ferramenta de comunicação aumentativa e alternativa' — tornará muito mais fácil superar a barreira do idioma. Mesmo sem palavras perfeitas, um sorriso brilhante é entendido em qualquer lugar.",
        ],
      },
      {
        q: "Há etiquetas culturais que exigem atenção especial?",
        a: [
          "Alguns princípios básicos bastam para o respeito mútuo. É melhor não aprofundar temas potencialmente polêmicos como religião, política ou história. O contato físico, como abraços ou braço no ombro, pode ser percebido de forma diferente conforme o país e a cultura; evite até que a outra pessoa tome a iniciativa. E nunca se esqueça de pedir consentimento antes de tirar fotos ou gravar vídeos!",
        ],
      },
      {
        q: "Quero deixar boas lembranças da Coreia. O que seria bom?",
        a: [
          "Dizem que o mais tradicional é o mais coreano. Que tal vestir o hanbok juntos ou compartilhar um chá tradicional? Se houver tempo livre, visitem um mercado próximo, um bom restaurante, uma loja de conveniência, um jjimjilbang (sauna coreana) ou pontos turísticos, ou um santuário da diocese, transmitindo a cultura e a herança de fé da Coreia. Escrever o nome do peregrino em hangul como presente também será uma linda lembrança que ele guardará para a vida toda.",
        ],
      },
    ],
    chatbot: {
      title: "Ainda tem dúvidas?",
      desc: "Pergunte ao chatbot do DID. Ele responderá com prazer até às perguntas que não estão nesta seção.",
      button: "Perguntar ao chatbot",
    },
  },
  it: {
    heroAlt: "Sfondo della sottopagina",
    heroTitle: "Domande frequenti",
    metaDescription:
      "Domande frequenti sull'homestay dei Giorni nelle Diocesi (DID) della GMG 2027 Seoul. Requisiti per le famiglie ospitanti, accoglienza dei pellegrini, pasti, differenze culturali ed emergenze.",
    breadcrumb: ["NOTICE /", "Domande frequenti"],
    pageTitle: "Domande frequenti sull'homestay",
    items: [
      {
        q: "Ci sono requisiti o condizioni per diventare famiglia ospitante?",
        a: [
          "Qualsiasi famiglia cattolica può fare domanda tramite la propria parrocchia. Ogni famiglia deve poter accogliere almeno due pellegrini e offrire uno spazio sufficiente per stendere i sacchi a pelo (2 m × 1,5 m a persona). Se avete particolari attenzioni (ad es. allergie legate ad animali domestici) o preferenze (numero di ospiti, sesso), indicatele nel modulo di iscrizione: ne terremo conto il più possibile nell'assegnazione dei pellegrini. Per i pellegrini con disabilità, verifichiamo prima la disponibilità della famiglia ad accoglierli, poi la diocesi fornisce indicazioni sul supporto aggiuntivo in base al tipo di disabilità (motoria, visiva, uditiva, cognitiva, ecc.).",
        ],
      },
      {
        q: "Posso conoscere in anticipo le informazioni sui pellegrini?",
        a: [
          "Sì. Una volta assegnati i pellegrini, riceverete in anticipo le loro informazioni di base (nazionalità, sesso, età, restrizioni alimentari, disabilità, ecc.). Su questa base sarebbe bello preparare un saluto nella loro lingua madre, un biglietto di benvenuto o conoscere un po' la cultura del loro Paese.",
        ],
      },
      {
        q: "Come accoglierli il primo giorno? Dobbiamo andare a prenderli in aeroporto?",
        a: [
          "La 'squadra di volontari per l'accoglienza in aeroporto' della diocesi o della parrocchia si occupa dell'arrivo e della partenza dei pellegrini: vi basterà incontrarli nel luogo e all'orario indicati dalla diocesi. Stanchi per il lungo viaggio, probabilmente vorranno disfare i bagagli e riposare. Più che un'accoglienza in grande stile, aiutateli a sistemarsi comodamente: mostrate brevemente dov'è il bagno, i contatti di emergenza, la biancheria extra (i pellegrini portano il proprio sacco a pelo) e qualche spuntino preparato.",
        ],
      },
      {
        q: "Cosa fare se un pellegrino ha problemi all'ingresso nel Paese?",
        a: [
          "I problemi di immigrazione vengono gestiti in prima battuta dal pellegrino stesso e dal responsabile del suo gruppo nazionale. Se il bagaglio va smarrito, fornire i beni di prima necessità (biancheria intima, articoli da toeletta, ecc.) sarà di grande aiuto. Per riferimento, i comitati organizzatori diocesani della GMG (DID) e il comitato organizzatore della GMG di Seoul (evento principale) attiveranno squadre homestay per sostenere le famiglie e rispondere ai problemi. Salvate i contatti di emergenza comunicati durante la formazione homestay.",
        ],
      },
      {
        q: "Come preparare i pasti? Mi preoccupano le diete vegetariane o particolari.",
        a: [
          "Le indicazioni di base sui pasti saranno fornite durante la formazione homestay. Poiché i pellegrini fanno colazione prima di uscire per il programma della giornata, la famiglia deve offrire la colazione. A volte, a seconda delle circostanze, potrebbe essere necessario preparare anche la cena.",
          "Tra i pellegrini può esserci chi evita la carne di maiale o l'alcol per motivi culturali, chi è vegetariano o chi ha allergie. Prima di servire il cibo, è utile verificare le esigenze di ciascuno con foto o un'app di traduzione. Può sembrare che ci siano molte cose a cui badare, ma si dice che una tavola semplice preparata con il cuore resti nella memoria più di un menù perfettamente personalizzato.",
        ],
      },
      {
        q: "Ci sono differenze culturali nell'uso del bagno?",
        a: [
          "Alcuni pellegrini possono trovare insolite le abitudini coreane del bagno. È utile appendere schede illustrate intuitive: dove gettare la carta usata, come usare il bidet, ecc. Stabilire in anticipo orari e turni per la doccia aiuta a evitare confusione.",
        ],
      },
      {
        q: "Cosa succede in caso di smarrimento o furto di oggetti di valore?",
        a: [
          "In linea di principio, ogni pellegrino è responsabile dei propri effetti personali. La maggior parte stipula un'assicurazione di viaggio prima della partenza, quindi gli smarrimenti si risolvono tramite l'assicurazione. Se un pellegrino segnala di aver perso qualcosa, contattate subito il referente GMG della parrocchia o la squadra homestay diocesana. Le questioni che possono sfociare in controversie legali saranno mediate dalla sede operativa della diocesi.",
        ],
      },
      {
        q: "Cosa fare se un pellegrino si ammala e deve andare in ospedale?",
        a: [
          "In previsione delle emergenze, verificate in anticipo i farmaci del pellegrino, il certificato dell'assicurazione di viaggio e i contatti di emergenza. Per le cure ordinarie, accompagnatelo in un ospedale o pronto soccorso vicino; in caso di emergenza, chiamate subito il 119 e poi avvisate la diocesi. Le spese mediche sono in genere coperte dall'assicurazione del pellegrino. Se serve un interprete, potete chiamare il call center dell'amministrazione locale (120) o il centro informazioni per stranieri (1345).",
        ],
      },
      {
        q: "Cosa fare in caso di conflitti per rientri notturni o orari di rientro?",
        a: [
          "A seconda del programma, il rientro può essere tardi. Comunicate chiaramente le abitudini di base della vostra casa e chiedete di avvisare in anticipo in caso di ritardo. Se temete un conflitto, contattate la diocesi per chiedere aiuto.",
        ],
      },
      {
        q: "Ci possono essere minorenni tra i pellegrini? A cosa dobbiamo fare attenzione?",
        a: [
          "L'età di partecipazione alla GMG parte dai 15 anni, quindi ci saranno minorenni; per sicurezza, vengono assegnati insieme a pellegrini adulti. Alle famiglie che accolgono minorenni chiediamo di prendersene cura con particolare attenzione; la diocesi fornirà inoltre indicazioni aggiuntive al riguardo.",
          "La maggiore età legale varia da Paese a Paese, ma il principio fondamentale è che in Corea si applica la legge coreana. In Corea si è maggiorenni a 19 anni: nel 2027 ciò riguarda i nati fino al 2008; per i più giovani, bere alcol e fumare sono illegali in Corea, indipendentemente dalla legge del Paese d'origine. Informatene i vostri pellegrini: non è una sanzione, ma una premura per proteggerli.",
        ],
      },
      {
        q: "Temo che non avremo alcuna lingua in comune.",
        a: [
          "Dalle GMG precedenti arrivano tante belle storie di amicizie profonde nate anche senza una lingua comune. Inoltre, usando un'app di traduzione sul telefono o le carte illustrate per la conversazione create per questo evento — uno 'strumento di comunicazione aumentativa e alternativa' — sarà molto più facile superare la barriera linguistica. Anche senza parole perfette, un sorriso luminoso si capisce ovunque.",
        ],
      },
      {
        q: "Ci sono regole di galateo culturale a cui fare particolare attenzione?",
        a: [
          "Bastano pochi principi di base per rispettarsi a vicenda. È meglio non approfondire temi potenzialmente controversi come religione, politica o storia. Il contatto fisico, come un braccio sulla spalla o un abbraccio, può essere percepito diversamente a seconda del Paese e della cultura: trattenetevi finché non è l'altra persona a proporlo. E non dimenticate mai di chiedere il consenso prima di scattare foto o girare video!",
        ],
      },
      {
        q: "Vorrei lasciare loro bei ricordi della Corea. Cosa potrei fare?",
        a: [
          "Si dice che ciò che è più tradizionale sia anche più coreano. Che ne dite di indossare insieme l'hanbok o di condividere un tè tradizionale? Se c'è tempo libero, visitate un mercato vicino, un buon ristorante, un minimarket, un jjimjilbang (sauna coreana) o luoghi caratteristici, oppure un santuario della diocesi, per trasmettere la cultura e il patrimonio di fede propri della Corea. Anche regalare il nome del pellegrino scritto in hangul sarà un bellissimo ricordo da custodire per tutta la vita.",
        ],
      },
    ],
    chatbot: {
      title: "Avete altre domande?",
      desc: "Chiedete al chatbot del DID. Risponderà volentieri anche alle domande non presenti in questa sezione.",
      button: "Chiedi al chatbot",
    },
  },

  pl: {
    heroAlt: "Tło podstrony",
    heroTitle: "Najczęstsze pytania",
    metaDescription:
      "Najczęstsze pytania o homestay podczas Dni w Diecezjach (DID) ŚDM 2027 w Seulu. Warunki dla rodzin goszczących, przyjęcie pielgrzymów, posiłki, różnice kulturowe i sytuacje awaryjne.",
    breadcrumb: ["NOTICE /", "Najczęstsze pytania"],
    pageTitle: "Najczęstsze pytania o homestay",
    items: [
      {
        q: "Czy są wymagania lub warunki, aby zostać rodziną goszczącą?",
        a: [
          "Każda katolicka rodzina może się zgłosić za pośrednictwem swojej parafii. Każde gospodarstwo domowe powinno przyjąć co najmniej dwóch pielgrzymów i zapewnić im miejsce do rozłożenia śpiworów (2 m × 1,5 m na osobę). Jeśli mają Państwo uwagi (np. alergie związane ze zwierzętami domowymi) lub preferencje (liczba osób, płeć), prosimy o wskazanie ich w formularzu zgłoszeniowym — w miarę możliwości uwzględnimy je przy przydzielaniu pielgrzymów. W przypadku pielgrzymów z niepełnosprawnością najpierw potwierdzamy, czy rodzina może ich przyjąć, a następnie diecezja informuje o dodatkowym wsparciu w zależności od rodzaju niepełnosprawności (ruchowa, wzrokowa, słuchowa, poznawcza itd.).",
        ],
      },
      {
        q: "Czy można wcześniej poznać informacje o pielgrzymach?",
        a: [
          "Tak. Po przydzieleniu pielgrzymów otrzymają Państwo z wyprzedzeniem ich podstawowe dane (narodowość, płeć, wiek, ograniczenia dietetyczne, niepełnosprawność itd.). Warto na tej podstawie przygotować powitanie w ich ojczystym języku, kartkę powitalną lub poznać nieco kulturę ich kraju.",
        ],
      },
      {
        q: "Jak przywitać ich pierwszego dnia? Czy trzeba jechać po nich na lotnisko?",
        a: [
          "Diecezjalny lub parafialny „zespół wolontariuszy powitania na lotnisku” zajmuje się odbiorem i odprowadzaniem pielgrzymów — wystarczy spotkać się z nimi w miejscu i o godzinie wskazanych przez diecezję. Po długiej podróży zapewne będą chcieli rozpakować się i odpocząć. Zamiast wystawnego powitania pomóżcie im wygodnie się rozgościć: krótko pokażcie łazienkę, przekażcie kontakty alarmowe, dodatkową pościel (podstawowy śpiwór pielgrzymi przywożą sami) i przygotowane przekąski.",
        ],
      },
      {
        q: "Co zrobić, jeśli pielgrzym ma problemy przy wjeździe do kraju?",
        a: [
          "Problemy imigracyjne w pierwszej kolejności rozwiązuje sam pielgrzym i opiekun jego grupy narodowej. Jeśli zaginie bagaż, wielką pomocą będzie zapewnienie najpotrzebniejszych rzeczy (bielizna, przybory toaletowe itd.). Dla informacji: aby wspierać rodziny goszczące i reagować na problemy, diecezjalne komitety organizacyjne ŚDM (DID) oraz komitet organizacyjny ŚDM w Seulu (wydarzenie główne) będą prowadzić zespoły ds. homestay. Koniecznie zapiszcie numery alarmowe podane podczas szkolenia homestay.",
        ],
      },
      {
        q: "Jak przygotować posiłki? Martwię się o dietę wegetariańską lub specjalną.",
        a: [
          "Podstawowy jadłospis zostanie omówiony podczas szkolenia homestay. Ponieważ pielgrzymi jedzą śniadanie przed wyjściem na zajęcia dnia, rodzina powinna zapewnić im śniadanie. Czasami, w zależności od okoliczności, może zajść potrzeba przygotowania także kolacji.",
          "Wśród pielgrzymów mogą być osoby, które ze względów kulturowych unikają wieprzowiny lub alkoholu, wegetarianie albo alergicy. Przed podaniem jedzenia warto poznać potrzeby każdego z nich, korzystając ze zdjęć lub aplikacji tłumaczącej. Może się wydawać, że uwag jest wiele, ale mówi się, że skromny posiłek przygotowany z sercem zapada w pamięć bardziej niż idealnie dopasowane menu.",
        ],
      },
      {
        q: "Czy są różnice kulturowe w korzystaniu z toalety i łazienki?",
        a: [
          "Niektórym pielgrzymom koreańskie zwyczaje łazienkowe mogą wydawać się obce. Warto powiesić intuicyjne karty obrazkowe: gdzie wyrzucać zużyty papier, jak korzystać z bidetu itd. Ustalenie z góry godzin i kolejności korzystania z prysznica również pomoże uniknąć zamieszania.",
        ],
      },
      {
        q: "Co się dzieje w przypadku zgubienia lub kradzieży kosztowności?",
        a: [
          "Zasadniczo za swoje rzeczy odpowiada sam pielgrzym. Większość przed wyjazdem wykupuje ubezpieczenie podróżne, więc straty rozlicza się z ubezpieczenia. Jeśli pielgrzym zgłosi zgubienie rzeczy, natychmiast skontaktujcie się z parafialnym koordynatorem ŚDM lub diecezjalnym zespołem homestay. W sprawach mogących prowadzić do sporów prawnych mediacji podejmie się diecezjalna centrala operacyjna.",
        ],
      },
      {
        q: "Co zrobić, gdy pielgrzym zachoruje i musi jechać do szpitala?",
        a: [
          "Na wypadek sytuacji awaryjnych sprawdźcie wcześniej przyjmowane przez pielgrzyma leki, polisę ubezpieczenia podróżnego i kontakty alarmowe. W przypadku zwykłej wizyty towarzyszcie mu w drodze do pobliskiego szpitala lub na SOR; w nagłym wypadku natychmiast dzwońcie pod numer 119, a następnie powiadomcie diecezję. Koszty leczenia zwykle pokrywa ubezpieczenie pielgrzyma. Jeśli potrzebny jest tłumacz, można skorzystać z telefonicznego centrum administracji lokalnej (120) lub infolinii dla cudzoziemców (1345).",
        ],
      },
      {
        q: "Co zrobić w razie konfliktu z powodu późnych powrotów lub godziny powrotu?",
        a: [
          "W zależności od programu powroty mogą być późne. Jasno przekażcie pielgrzymom podstawowe zasady domu i poproście, aby uprzedzali o spóźnieniu. Jeśli obawiacie się konfliktu, skontaktujcie się z diecezją i poproście o pomoc.",
        ],
      },
      {
        q: "Czy wśród pielgrzymów mogą być osoby niepełnoletnie? Na co zwrócić uwagę?",
        a: [
          "W ŚDM można uczestniczyć od 15. roku życia, więc będą wśród nich niepełnoletni; dla bezpieczeństwa przydziela się im dorosłych pielgrzymów. Rodziny goszczące niepełnoletnich prosimy o otoczenie ich szczególną troską; diecezja przekaże w tej sprawie dodatkowe wskazówki.",
          "Granica pełnoletności różni się w zależności od kraju, ale kluczową zasadą jest to, że w Korei obowiązuje prawo koreańskie. W Korei pełnoletność zaczyna się od 19 lat, więc w 2027 roku dotyczy to urodzonych do 2008 roku włącznie; dla młodszych picie alkoholu i palenie są w Korei nielegalne niezależnie od prawa ich kraju. Prosimy poinformować o tym pielgrzymów — to nie sankcja, lecz troska o ich bezpieczeństwo.",
        ],
      },
      {
        q: "Martwię się, że w ogóle nie będziemy mieli wspólnego języka.",
        a: [
          "Z poprzednich ŚDM znanych jest wiele pięknych historii głębokich przyjaźni zawartych mimo braku wspólnego języka. Dodatkowo aplikacja tłumacząca w telefonie lub przygotowane na to wydarzenie obrazkowe karty do rozmowy — „narzędzie komunikacji wspomagającej i alternatywnej” — znacznie ułatwią pokonanie bariery językowej. Nawet bez doskonałych słów pogodny uśmiech jest zrozumiały wszędzie.",
        ],
      },
      {
        q: "Czy są zasady kulturowej etykiety, na które trzeba szczególnie uważać?",
        a: [
          "Wystarczy kilka podstawowych zasad, aby okazać sobie wzajemny szacunek. Lepiej nie zagłębiać się w tematy potencjalnie sporne, jak religia, polityka czy historia. Kontakt fizyczny, np. obejmowanie ramieniem czy uściski, może być różnie odbierany w zależności od kraju i kultury — powstrzymajcie się, dopóki druga osoba sama tego nie zaproponuje. I nigdy nie zapominajcie zapytać o zgodę przed zrobieniem zdjęcia lub nagraniem!",
        ],
      },
      {
        q: "Chcę podarować im dobre wspomnienia z Korei. Co warto zrobić?",
        a: [
          "Mówi się, że to, co najbardziej tradycyjne, jest najbardziej koreańskie. Może wspólnie założycie hanbok albo napijecie się tradycyjnej herbaty? Jeśli będzie wolny czas, odwiedźcie pobliski targ, dobrą restaurację, sklep całodobowy, jjimjilbang (koreańską saunę) czy lokalne atrakcje, albo sanktuarium w diecezji — przekazując wyjątkową kulturę i dziedzictwo wiary Korei. Pięknym upominkiem na całe życie będzie też imię pielgrzyma zapisane w hangul.",
        ],
      },
    ],
    chatbot: {
      title: "Masz jeszcze pytania?",
      desc: "Zapytaj chatbota DID. Chętnie odpowie także na pytania, których nie ma w tej sekcji.",
      button: "Zapytaj chatbota",
    },
  },

  de: {
    heroAlt: "Hintergrund der Unterseite",
    heroTitle: "Häufige Fragen",
    metaDescription:
      "Häufige Fragen zum Homestay der Tage in den Diözesen (DID) des WJT 2027 Seoul. Voraussetzungen für Gastfamilien, Empfang der Pilger, Mahlzeiten, kulturelle Unterschiede und Notfälle.",
    breadcrumb: ["NOTICE /", "Häufige Fragen"],
    pageTitle: "Häufige Fragen zum Homestay",
    items: [
      {
        q: "Gibt es Voraussetzungen oder Bedingungen für Gastfamilien?",
        a: [
          "Jede katholische Familie kann sich über ihre Pfarrei anmelden. Jeder Haushalt sollte mindestens zwei Pilger aufnehmen und genügend Platz zum Ausbreiten der Schlafsäcke bieten können (2 m × 1,5 m pro Person). Wenn es Hinweise (z. B. Allergien wegen Haustieren) oder Wünsche (Anzahl der Gäste, Geschlecht) gibt, geben Sie diese bitte im Anmeldeformular an — wir berücksichtigen sie bei der Zuteilung der Pilger so weit wie möglich. Bei Pilgern mit Behinderung wird zunächst geklärt, ob die Gastfamilie sie aufnehmen kann; anschließend informiert die Diözese je nach Art der Behinderung (körperlich, seh-, hör- oder kognitiv beeinträchtigt usw.) über zusätzliche Unterstützung.",
        ],
      },
      {
        q: "Kann ich vorab Informationen über die Pilger erhalten?",
        a: [
          "Ja. Sobald die Pilger zugeteilt sind, erhalten Sie vorab ihre Grunddaten (Nationalität, Geschlecht, Alter, Ernährungseinschränkungen, Behinderung usw.). Auf dieser Grundlage wäre es schön, eine Begrüßung in ihrer Muttersprache oder eine Willkommenskarte vorzubereiten oder sich mit der Kultur ihres Landes vertraut zu machen.",
        ],
      },
      {
        q: "Wie empfangen wir sie am ersten Tag? Müssen wir sie am Flughafen abholen?",
        a: [
          "Das 'Flughafen-Willkommensteam' der Diözese oder Pfarrei unterstützt Ankunft und Verabschiedung der Pilger — Sie müssen sie nur an dem von der Diözese genannten Ort zur angegebenen Zeit treffen. Nach der langen Reise werden sie vermutlich auspacken und sich ausruhen wollen. Statt eines großen Empfangs helfen Sie ihnen, bequem anzukommen: Zeigen Sie kurz das Badezimmer, nennen Sie Notfallkontakte, zusätzliche Bettwäsche (den Schlafsack bringen die Pilger selbst mit) und halten Sie ein paar Snacks bereit.",
        ],
      },
      {
        q: "Was ist, wenn ein Pilger Probleme bei der Einreise hat?",
        a: [
          "Einreiseprobleme werden zunächst vom Pilger selbst und der Leitung seiner nationalen Gruppe geklärt. Geht das Gepäck verloren, ist es eine große Hilfe, das Nötigste (Unterwäsche, Hygieneartikel usw.) bereitzustellen. Zur Information: Zur Unterstützung der Homestays und zur Behandlung auftretender Probleme richten die diözesanen WJT-Organisationskomitees (DID) und das Organisationskomitee des WJT Seoul (Hauptveranstaltung) Homestay-Teams ein. Speichern Sie unbedingt die Notfallnummern, die bei der Homestay-Schulung mitgeteilt werden.",
        ],
      },
      {
        q: "Wie bereite ich die Mahlzeiten vor? Ich mache mir Sorgen wegen vegetarischer oder besonderer Ernährung.",
        a: [
          "Die Grundzüge der Verpflegung werden bei der Homestay-Schulung erläutert. Da die Pilger vor dem Tagesprogramm frühstücken, sollte die Gastfamilie das Frühstück bereitstellen. Je nach Umständen kann es gelegentlich nötig sein, auch das Abendessen vorzubereiten.",
          "Unter den Pilgern kann es Personen geben, die aus kulturellen Gründen Schweinefleisch oder Alkohol meiden, Vegetarier sind oder Allergien haben. Vor dem Servieren hilft es, die individuellen Bedürfnisse mit Fotos oder einer Übersetzungs-App zu klären. Es mag nach viel klingen, aber man sagt, dass ein einfaches, mit Herz zubereitetes Essen länger in Erinnerung bleibt als ein perfekt zugeschnittenes Menü.",
        ],
      },
      {
        q: "Gibt es kulturelle Unterschiede bei der Benutzung von Toilette und Bad?",
        a: [
          "Manche Pilger empfinden die koreanischen Badgewohnheiten als ungewohnt. Es hilft, intuitive Bildkarten aufzuhängen: wohin mit dem benutzten Toilettenpapier, wie man das Bidet benutzt usw. Auch das vorherige Festlegen von Duschzeiten und -reihenfolge vermeidet Verwirrung.",
        ],
      },
      {
        q: "Was passiert bei Verlust oder Diebstahl von Wertsachen?",
        a: [
          "Grundsätzlich sind die Pilger selbst für ihre Sachen verantwortlich. Die meisten schließen vor der Abreise eine Reiseversicherung ab, sodass Verluste über die Versicherung abgewickelt werden. Meldet ein Pilger einen Verlust, wenden Sie sich sofort an die WJT-Verantwortlichen Ihrer Pfarrei oder das diözesane Homestay-Team. Angelegenheiten, die zu Rechtsstreitigkeiten führen könnten, werden von der Einsatzzentrale der Diözese vermittelt.",
        ],
      },
      {
        q: "Was tun, wenn ein Pilger krank wird und ins Krankenhaus muss?",
        a: [
          "Prüfen Sie für den Notfall vorab die Medikamente des Pilgers, den Nachweis der Reiseversicherung und die Notfallkontakte. Bei normaler Behandlung begleiten Sie ihn in ein nahegelegenes Krankenhaus oder in die Notaufnahme; im Notfall rufen Sie sofort die 119 an und informieren dann die Diözese. Die Behandlungskosten übernimmt in der Regel die Versicherung des Pilgers. Wird ein Dolmetscher benötigt, können Sie das Callcenter der Kommunalverwaltung (120) oder die Ausländer-Hotline (1345) anrufen.",
        ],
      },
      {
        q: "Was tun bei Konflikten wegen später Heimkehr oder Ausgangszeiten?",
        a: [
          "Je nach Programm kann die Rückkehr spät sein. Erklären Sie den Pilgern klar die Grundregeln Ihres Haushalts und bitten Sie sie, sich bei Verspätung vorher zu melden. Wenn Sie einen Konflikt befürchten, wenden Sie sich an die Diözese und bitten Sie um Hilfe.",
        ],
      },
      {
        q: "Können Minderjährige unter den Pilgern sein? Worauf müssen wir achten?",
        a: [
          "Die Teilnahme am WJT ist ab 15 Jahren möglich, daher sind Minderjährige dabei; zu ihrer Sicherheit werden ihnen erwachsene Pilger zugeteilt. Gastfamilien, die Minderjährige aufnehmen, bitten wir um besondere Aufmerksamkeit; die Diözese wird dazu zusätzliche Hinweise geben.",
          "Die Volljährigkeit ist von Land zu Land verschieden. Entscheidend ist jedoch der Grundsatz: In Korea gilt koreanisches Recht. In Korea beginnt die Volljährigkeit mit 19 Jahren; 2027 betrifft das die Jahrgänge bis einschließlich 2008. Für Jüngere sind Alkohol und Rauchen in Korea illegal, unabhängig vom Recht ihres Heimatlandes. Bitte informieren Sie Ihre Pilger darüber — das ist keine Strafe, sondern Fürsorge zu ihrem Schutz.",
        ],
      },
      {
        q: "Ich habe Sorge, dass wir keine gemeinsame Sprache haben.",
        a: [
          "Von früheren WJT gibt es viele schöne Geschichten über tiefe Freundschaften, die ganz ohne gemeinsame Sprache entstanden sind. Zusätzlich helfen eine Übersetzungs-App auf dem Handy oder die für dieses Treffen erstellten Bild-Gesprächskarten — ein Werkzeug der 'Unterstützten Kommunikation' — die Sprachbarriere viel leichter zu überwinden. Auch ohne perfekte Worte wird ein helles Lächeln überall verstanden.",
        ],
      },
      {
        q: "Gibt es kulturelle Umgangsformen, auf die wir besonders achten sollten?",
        a: [
          "Mit wenigen Grundregeln lässt sich gegenseitige Rücksicht gut wahren. Vertiefen Sie besser keine potenziell strittigen Themen wie Religion, Politik oder Geschichte. Körperkontakt wie Umarmungen oder den Arm um die Schulter zu legen kann je nach Land und Kultur unterschiedlich empfunden werden — halten Sie sich zurück, bis die andere Person von sich aus darum bittet. Und vergessen Sie nie, vor Fotos oder Videos um Einverständnis zu bitten!",
        ],
      },
      {
        q: "Ich möchte ihnen schöne Erinnerungen an Korea schenken. Was wäre gut?",
        a: [
          "Man sagt, das Traditionellste sei das Koreanischste. Wie wäre es, gemeinsam Hanbok zu tragen oder traditionellen Tee zu trinken? In der freien Zeit können Sie einen Markt in der Nähe, ein gutes Restaurant, einen Convenience-Store, ein Jjimjilbang (koreanische Sauna) oder Sehenswürdigkeiten besuchen — oder eine heilige Stätte der Diözese, um Koreas einzigartige Kultur und ihr Glaubenserbe weiterzugeben. Auch der in Hangul geschriebene Name des Pilgers ist ein wunderschönes Andenken fürs Leben.",
        ],
      },
    ],
    chatbot: {
      title: "Haben Sie noch Fragen?",
      desc: "Fragen Sie den DID-Chatbot. Er beantwortet gern auch Fragen, die in diesen FAQ nicht enthalten sind.",
      button: "Chatbot fragen",
    },
  },
  zh: {
    heroAlt: "子页面背景",
    heroTitle: "常见问题",
    metaDescription:
      "2027首尔世青节教区大会(DID)寄宿家庭常见问题。了解接待家庭申请条件、迎接朝圣者、餐食准备、文化差异及紧急情况应对方法。",
    breadcrumb: ["NOTICE /", "常见问题"],
    pageTitle: "寄宿家庭常见问题",
    items: [
      {
        q: "申请成为寄宿家庭有什么资格和条件吗?",
        a: [
          "凡是天主教信友家庭,均可通过所属堂区申请。不过,每个家庭至少要接待2名朝圣者,并能提供可供他们铺开睡袋的空间(每人2m×1.5m)。如有注意事项(如饲养宠物可能引起过敏)或希望事项(接待人数、性别),请在申请表中告知,我们会尽量在分配朝圣者时予以考虑。对于身心障碍朝圣者的分配,会先确认接待家庭是否可以接纳,再根据朝圣者的障碍类型(肢体、视觉、听觉、认知等)一并说明教区提供的额外支持。",
        ],
      },
      {
        q: "可以提前了解朝圣者的信息吗?",
        a: [
          "可以。朝圣者分配后,我们会提前告知他们的基本信息(国籍、性别、年龄、饮食限制、是否有障碍等)。据此提前准备用他们母语的问候和欢迎卡片,或了解该国文化,都会很有帮助。",
        ],
      },
      {
        q: "第一天该如何迎接?需要去机场接机吗?",
        a: [
          "教区或堂区的“机场欢迎志愿者团队”会协助朝圣者的迎接与送行,您只需按教区通知的地点和时间与朝圣者见面即可。经过长途旅行,他们大概会想先放下行李休息。与其隆重欢迎,不如体贴地让他们好好休息,并简单介绍卫生间位置、紧急联系方式、备用寝具(基本睡袋由朝圣者自带)和准备好的点心等。",
        ],
      },
      {
        q: "如果朝圣者入境时出现问题怎么办?",
        a: [
          "入境问题首先由朝圣者本人和各国带队人员处理。如果行李丢失,为他们提供急需的生活用品(内衣、洗漱用品等)会是很大的帮助。另外,为支持寄宿家庭并应对各种问题,各教区世青节组委会(教区大会)和首尔世青节组委会(主大会)将设立寄宿家庭工作组。为应对紧急情况,请务必保存寄宿家庭培训时提供的紧急联系电话。",
        ],
      },
      {
        q: "餐食该如何准备?担心素食或特殊饮食问题。",
        a: [
          "基本餐食安排会在寄宿家庭培训时说明。朝圣者吃过早餐后要外出参加日程,因此家庭需要提供早餐。有时视情况也可能需要准备晚餐。",
          "朝圣者中可能有人因文化原因不吃猪肉或不饮酒,也可能有素食者或过敏体质者。提供食物前,借助照片或翻译软件了解每个人的情况会很有帮助。乍看注意事项很多,但据说比起完美的定制餐,一桌用心准备的简单饭菜更令人难忘。",
        ],
      },
      {
        q: "卫生间、浴室的使用也会有文化差异吗?",
        a: [
          "有些朝圣者会对韩国的卫生间使用方式感到陌生。建议贴上直观的图示卡片,说明用过的纸巾扔在哪里、坐浴器如何使用等。另外,提前定好浴室(淋浴)的使用时间和顺序,可以减少混乱。",
        ],
      },
      {
        q: "如果发生贵重物品丢失或被盗怎么办?",
        a: [
          "原则上,随身物品由朝圣者本人负责保管。大多数人出国前都会购买旅行保险,因此发生丢失时通过保险处理。若朝圣者告知物品丢失,请立即联系堂区世青节负责人或教区寄宿家庭工作组。可能引发法律纠纷的事项,由教区运营本部进行协调。",
        ],
      },
      {
        q: "朝圣者生病需要去医院怎么办?",
        a: [
          "为防紧急情况,请提前确认朝圣者的服用药物、旅行保险单和紧急联系方式。一般就诊时陪同前往附近的医院或急诊室;发生紧急情况时,立即拨打119,然后通知教区。医疗费大多由朝圣者投保的保险承担。如需外语翻译,可拨打地方行政呼叫中心(120)或外国人综合咨询(1345)电话咨询。",
        ],
      },
      {
        q: "因深夜回家或门禁问题产生矛盾怎么办?",
        a: [
          "视活动安排,回家时间可能较晚。请向朝圣者清楚说明家里的基本作息,并请他们如会晚归提前联系。若担心产生矛盾,请联系教区寻求帮助。",
        ],
      },
      {
        q: "朝圣者中会有未成年人吗?这种情况要注意什么?",
        a: [
          "世青节的参加年龄从满15周岁开始,因此会有未成年人,为了安全会安排成年朝圣者同行。接待未成年人的寄宿家庭请对他们多加照顾,教区层面也会另行提供补充指引。",
          "法定成年标准各国不同。但核心原则是“在韩国遵守韩国法律”。韩国满19周岁为成年,以2027年为准,2008年出生者及更早出生者属于成年,之后出生者无论本国法律如何,在韩国饮酒和吸烟均属违法。请寄宿家庭向朝圣者说明这一点。这不是管制,而是保护朝圣者的关怀。",
        ],
      },
      {
        q: "担心语言完全不通。",
        a: [
          "从以往世青节的经验看,即使语言完全不通,也有许多结下深厚友谊的佳话。再借助手机翻译软件,或使用为本届大会制作的图画对话卡——“辅助替代沟通工具”,就能更轻松地跨越语言障碍。即使语言不完美,灿烂的微笑在任何时候、任何地方都是相通的。",
        ],
      },
      {
        q: "有需要特别注意的文化礼仪吗?",
        a: [
          "遵守几项基本原则,就足以彼此体谅。首先,宗教、政治、历史等有争议的话题最好不要深入讨论。搭肩、拥抱等身体接触,不同国家和文化的感受可能不同,请在对方主动提出之前尽量克制。另外,拍照或录像请务必事先征得同意!",
        ],
      },
      {
        q: "想给他们留下关于韩国的美好回忆,做什么好呢?",
        a: [
          "常说最传统的就是最有韩国味的。不妨准备韩服一起穿,一起品尝传统茶。如果有自由时间,可以去附近的市场、美食店、便利店、汗蒸房、名胜等,或探访教区内的圣地,传递韩国独有的文化与信仰遗产。把朝圣者的名字用韩文写下来送给他们,也会成为值得珍藏一生的美好纪念。",
        ],
      },
    ],
    chatbot: {
      title: "还有其他疑问吗?",
      desc: "请咨询教区大会聊天机器人。常见问题中没有的内容,机器人也会亲切解答。",
      button: "向聊天机器人提问",
    },
  },

  "zh-tw": {
    heroAlt: "子頁面背景",
    heroTitle: "常見問題",
    metaDescription:
      "2027首爾世界青年日教區大會(DID)寄宿家庭常見問題。了解接待家庭申請條件、迎接朝聖者、餐食準備、文化差異及緊急情況應對方法。",
    breadcrumb: ["NOTICE /", "常見問題"],
    pageTitle: "寄宿家庭常見問題",
    items: [
      {
        q: "申請成為寄宿家庭有什麼資格和條件嗎?",
        a: [
          "凡是天主教信友家庭,皆可透過所屬堂區申請。不過,每個家庭至少要接待2名朝聖者,並能提供可供他們鋪開睡袋的空間(每人2m×1.5m)。如有注意事項(如飼養寵物可能引起過敏)或希望事項(接待人數、性別),請在申請表中告知,我們會盡量在分配朝聖者時予以考量。對於身心障礙朝聖者的分配,會先確認接待家庭是否能夠接納,再依朝聖者的障礙類型(肢體、視覺、聽覺、認知等)一併說明教區提供的額外支援。",
        ],
      },
      {
        q: "可以事先知道朝聖者的資訊嗎?",
        a: [
          "可以。朝聖者分配後,我們會事先告知他們的基本資訊(國籍、性別、年齡、飲食限制、是否有障礙等)。據此事先準備用他們母語的問候與歡迎卡片,或認識該國文化,都會很有幫助。",
        ],
      },
      {
        q: "第一天該如何迎接?需要去機場接機嗎?",
        a: [
          "教區或堂區的「機場歡迎志工團隊」會協助朝聖者的迎接與送行,您只需依教區通知的地點和時間與朝聖者見面即可。經過長途旅行,他們大概會想先放下行李休息。與其隆重歡迎,不如體貼地讓他們好好休息,並簡單介紹衛浴位置、緊急聯絡方式、備用寢具(基本睡袋由朝聖者自備)和準備好的點心等。",
        ],
      },
      {
        q: "如果朝聖者入境時出現問題怎麼辦?",
        a: [
          "入境問題首先由朝聖者本人和各國帶隊人員處理。如果行李遺失,為他們提供急需的生活用品(內衣、盥洗用品等)會是很大的幫助。另外,為支援寄宿家庭並因應各種問題,各教區世界青年日組委會(教區大會)和首爾世界青年日組委會(主大會)將設立寄宿家庭小組。為因應緊急情況,請務必儲存寄宿家庭培訓時提供的緊急聯絡電話。",
        ],
      },
      {
        q: "餐食該如何準備?擔心素食或特殊飲食問題。",
        a: [
          "基本餐食安排會在寄宿家庭培訓時說明。朝聖者吃過早餐後要外出參加日程,因此家庭需要提供早餐。有時視情況也可能需要準備晚餐。",
          "朝聖者中可能有人因文化因素不吃豬肉或不飲酒,也可能有素食者或過敏體質者。提供食物前,藉助照片或翻譯軟體了解每個人的情況會很有幫助。乍看注意事項很多,但據說比起完美的客製餐點,一桌用心準備的簡單飯菜更令人難忘。",
        ],
      },
      {
        q: "衛浴的使用也會有文化差異嗎?",
        a: [
          "有些朝聖者會對韓國的衛浴使用方式感到陌生。建議貼上直觀的圖示卡片,說明用過的衛生紙丟在哪裡、免治馬桶如何使用等。另外,事先定好浴室(淋浴)的使用時間和順序,可以減少混亂。",
        ],
      },
      {
        q: "如果發生貴重物品遺失或遭竊怎麼辦?",
        a: [
          "原則上,隨身物品由朝聖者本人負責保管。大多數人出國前都會投保旅遊保險,因此發生遺失時透過保險處理。若朝聖者告知物品遺失,請立即聯絡堂區世界青年日負責人或教區寄宿家庭小組。可能引發法律糾紛的事項,由教區營運本部進行調解。",
        ],
      },
      {
        q: "朝聖者生病需要就醫怎麼辦?",
        a: [
          "為防緊急情況,請事先確認朝聖者的服用藥物、旅遊保險單和緊急聯絡方式。一般就診時陪同前往附近的醫院或急診室;發生緊急情況時,立即撥打119,然後通知教區。醫療費大多由朝聖者投保的保險負擔。如需外語口譯,可撥打地方行政客服中心(120)或外國人綜合諮詢(1345)電話諮詢。",
        ],
      },
      {
        q: "因深夜返家或門禁問題產生矛盾怎麼辦?",
        a: [
          "視活動安排,返家時間可能較晚。請向朝聖者清楚說明家中的基本作息,並請他們若會晚歸提前聯絡。若擔心產生矛盾,請聯絡教區尋求協助。",
        ],
      },
      {
        q: "朝聖者中會有未成年人嗎?這種情況要注意什麼?",
        a: [
          "世界青年日的參加年齡從滿15歲開始,因此會有未成年人,為了安全會安排成年朝聖者同行。接待未成年人的寄宿家庭請多加照顧他們,教區層面也會另行提供補充指引。",
          "法定成年標準各國不同。但核心原則是「在韓國遵守韓國法律」。韓國滿19歲為成年,以2027年為準,2008年出生者及更早出生者屬於成年,之後出生者無論本國法律如何,在韓國飲酒和吸菸均屬違法。請寄宿家庭向朝聖者說明這一點。這不是管制,而是保護朝聖者的關懷。",
        ],
      },
      {
        q: "擔心語言完全不通。",
        a: [
          "從以往世界青年日的經驗來看,即使語言完全不通,也有許多結下深厚友誼的佳話。再藉助手機翻譯軟體,或使用為本屆大會製作的圖畫對話卡——「輔助替代溝通工具」,就能更輕鬆地跨越語言障礙。即使語言不完美,燦爛的微笑在任何時候、任何地方都是相通的。",
        ],
      },
      {
        q: "有需要特別注意的文化禮儀嗎?",
        a: [
          "遵守幾項基本原則,就足以彼此體諒。首先,宗教、政治、歷史等有爭議的話題最好不要深入討論。搭肩、擁抱等身體接觸,不同國家和文化的感受可能不同,請在對方主動提出之前盡量克制。另外,拍照或錄影請務必事先徵得同意!",
        ],
      },
      {
        q: "想給他們留下關於韓國的美好回憶,做什麼好呢?",
        a: [
          "常說最傳統的就是最有韓國味的。不妨準備韓服一起穿,一起品嘗傳統茶。如果有自由時間,可以去附近的市場、美食店、便利商店、汗蒸幕、名勝等,或探訪教區內的聖地,傳遞韓國獨有的文化與信仰遺產。把朝聖者的名字用韓文寫下來送給他們,也會成為值得珍藏一生的美好紀念。",
        ],
      },
    ],
    chatbot: {
      title: "還有其他疑問嗎?",
      desc: "請詢問教區大會聊天機器人。常見問題中沒有的內容,機器人也會親切解答。",
      button: "向聊天機器人提問",
    },
  },

  fil: {
    heroAlt: "Background ng subpage",
    heroTitle: "Mga Madalas Itanong",
    metaDescription:
      "Mga madalas itanong tungkol sa homestay ng WYD2027 Seoul Days in Diocese (DID). Alamin ang mga kondisyon para sa host family, pagtanggap sa mga peregrino, pagkain, pagkakaiba ng kultura, at mga emergency.",
    breadcrumb: ["NOTICE /", "Mga Madalas Itanong"],
    pageTitle: "Mga Madalas Itanong sa Homestay",
    items: [
      {
        q: "May mga kwalipikasyon o kondisyon ba para maging homestay host?",
        a: [
          "Anumang pamilyang Katoliko ay maaaring mag-apply sa pamamagitan ng kanilang parokya. Ngunit ang bawat sambahayan ay dapat tumanggap ng hindi bababa sa dalawang peregrino at makapagbigay ng sapat na espasyo para mailatag nila ang kanilang sleeping bag (2m × 1.5m bawat tao). Kung may mga alalahanin (hal. allergy dahil sa alagang hayop) o kagustuhan (bilang ng tatanggapin, kasarian), isulat ito sa application form at gagawin namin ang lahat para maisaalang-alang ito sa pagtatalaga ng mga peregrino. Para sa mga peregrinong may kapansanan, kinukumpirma muna kung kaya silang tanggapin ng host, at pagkatapos ay ipapaalam ng diyosesis ang karagdagang suporta ayon sa uri ng kapansanan (pisikal, paningin, pandinig, kognitibo, atbp.).",
        ],
      },
      {
        q: "Maaari bang malaman nang maaga ang impormasyon ng mga peregrino?",
        a: [
          "Oo. Kapag naitalaga na ang mga peregrino, ipapaalam nang maaga ang kanilang pangunahing impormasyon (nasyonalidad, kasarian, edad, restriksiyon sa pagkain, kapansanan, atbp.). Batay dito, maganda ring maghanda ng pagbati sa kanilang sariling wika, welcome card, o alamin ang kultura ng kanilang bansa.",
        ],
      },
      {
        q: "Paano namin sila sasalubungin sa unang araw? Kailangan ba naming sumundo sa airport?",
        a: [
          "Ang 'airport welcome volunteer team' ng diyosesis o parokya ang tutulong sa pagsundo at paghatid sa mga peregrino, kaya kailangan lang ninyo silang salubungin sa lugar at oras na itatakda ng diyosesis. Pagod sila sa mahabang biyahe, kaya malamang gusto nilang mag-ayos ng gamit at magpahinga. Sa halip na engrandeng pagsalubong, tulungan silang makapagpahinga nang komportable: ituro nang maikli ang banyo, ang mga emergency contact, ang ekstrang kumot (dala ng mga peregrino ang sariling sleeping bag), at ang mga inihandang meryenda.",
        ],
      },
      {
        q: "Paano kung magkaroon ng problema sa immigration ang peregrino?",
        a: [
          "Ang mga problema sa immigration ay unang aasikasuhin ng mismong peregrino at ng lider ng kanilang bansa. Kung nawala ang bagahe, malaking tulong ang pagbibigay ng mga pangunahing pangangailangan (damit-panloob, gamit sa banyo, atbp.). Bilang sanggunian, magpapatakbo ng mga homestay team ang mga diocesan WYD organizing committee (DID) at ang Seoul WYD organizing committee (pangunahing kaganapan) upang suportahan ang mga homestay at tumugon sa mga problema. Siguraduhing i-save ang mga emergency contact number na ibibigay sa homestay training.",
        ],
      },
      {
        q: "Paano ako maghahanda ng pagkain? Nag-aalala ako sa vegetarian o special diet.",
        a: [
          "Ipapaliwanag ang pangunahing menu sa homestay training. Dahil kumakain ng almusal ang mga peregrino bago lumabas para sa programa ng araw, dapat magbigay ng almusal ang host family. Paminsan-minsan, depende sa sitwasyon, maaaring kailanganin ding maghanda ng hapunan.",
          "May mga peregrinong umiiwas sa baboy o alak dahil sa kultura, mga vegetarian, o may allergy. Bago maghain, makakatulong na alamin ang pangangailangan ng bawat isa gamit ang mga larawan o translation app. Mukhang maraming dapat tandaan, pero sabi nila, mas naaalala ang simpleng hapag na inihanda nang may puso kaysa sa perpektong naka-customize na menu.",
        ],
      },
      {
        q: "May pagkakaiba rin ba sa kultura ng paggamit ng banyo?",
        a: [
          "May mga peregrinong maaaring hindi sanay sa paraan ng paggamit ng banyo sa Korea. Makakatulong ang pagdidikit ng mga simpleng picture guide: saan itatapon ang gamit na tisyu, paano gamitin ang bidet, atbp. Makakaiwas din sa gulo kung pagkakasunduan nang maaga ang oras at pagkakasunod-sunod ng paliligo.",
        ],
      },
      {
        q: "Paano kung mawala o manakaw ang mga mahahalagang gamit?",
        a: [
          "Sa pangkalahatan, responsibilidad ng peregrino ang pag-iingat sa sariling gamit. Karamihan ay kumukuha ng travel insurance bago umalis ng bansa, kaya ang mga pagkawala ay karaniwang inaasikaso sa pamamagitan ng insurance. Kapag nagsabi ang peregrino na may nawala, agad makipag-ugnayan sa WYD coordinator ng parokya o sa diocesan homestay team. Ang mga usaping maaaring humantong sa legal na alitan ay pamamagitanan ng operations headquarters ng diyosesis.",
        ],
      },
      {
        q: "Paano kung magkasakit ang peregrino at kailangang dalhin sa ospital?",
        a: [
          "Bilang paghahanda sa emergency, alamin nang maaga ang mga iniinom na gamot ng peregrino, ang travel insurance certificate, at ang mga emergency contact. Para sa karaniwang konsulta, samahan sila sa malapit na ospital o emergency room; sa emergency, tumawag agad sa 119 at pagkatapos ay ipaalam sa diyosesis. Ang gastos medikal ay kadalasang sagot ng insurance ng peregrino. Kung kailangan ng interpreter, maaaring tumawag sa local government call center (120) o sa information center para sa mga dayuhan (1345).",
        ],
      },
      {
        q: "Paano kung magkaroon ng di-pagkakaunawaan dahil sa late na pag-uwi o curfew?",
        a: [
          "Depende sa programa, maaaring gumabi ang uwian. Malinaw na ipaliwanag ang pangunahing gawi ng inyong tahanan at hilingin sa kanilang magpaalam nang maaga kung mahuhuli sila. Kung nag-aalala kayo sa posibleng alitan, makipag-ugnayan sa diyosesis para humingi ng tulong.",
        ],
      },
      {
        q: "Maaari bang may menor de edad sa mga peregrino? Ano ang dapat tandaan?",
        a: [
          "Ang pinakamababang edad ng paglahok sa WYD ay 15 taon, kaya may kasamang mga menor de edad; para sa kaligtasan, may mga nakatataong peregrinong itatalagang kasama nila. Hinihiling sa mga host family na tumatanggap ng menor de edad na alagaan sila nang mas maingat, at magbibigay din ang diyosesis ng hiwalay na karagdagang gabay para dito.",
          "Iba-iba ang legal na edad ng pagkasapat na gulang sa bawat bansa. Ngunit ang pangunahing prinsipyo ay 'sa Korea, sinusunod ang batas ng Korea.' Sa Korea, 19 taon ang edad ng pagiging adult, kaya sa 2027 ay sakop nito ang mga ipinanganak noong 2008 pataas; para sa mga mas bata, ang pag-inom ng alak at paninigarilyo ay ilegal sa Korea anuman ang batas ng kanilang bansa. Ipaalam po ito sa inyong mga peregrino — hindi ito parusa kundi pag-aaruga para maprotektahan sila.",
        ],
      },
      {
        q: "Nag-aalala akong baka hindi kami magkaintindihan sa wika.",
        a: [
          "Sa mga nakaraang WYD, maraming magagandang kwento ng malalim na pagkakaibigang nabuo kahit walang iisang wika. Bukod pa rito, gamit ang translation app sa telepono o ang mga picture conversation card na ginawa para sa kaganapang ito — isang 'augmentative and alternative communication tool' — mas madaling malalampasan ang hadlang sa wika. Kahit hindi perpekto ang salita, naiintindihan saanman ang isang maaliwalas na ngiti.",
        ],
      },
      {
        q: "May mga kaugaliang pangkultura ba na dapat pag-ingatan?",
        a: [
          "Sapat na ang ilang pangunahing prinsipyo para magpakita ng konsiderasyon sa isa't isa. Una, mabuting huwag palalimin ang mga paksang maaaring pagtalunan tulad ng relihiyon, pulitika, o kasaysayan. Ang paghawak sa katawan tulad ng pag-akbay o pagyakap ay maaaring magkaiba ang dating depende sa bansa at kultura, kaya magpigil hangga't hindi ito iminumungkahi ng kabilang panig. At huwag kalimutang laging humingi ng pahintulot bago kumuha ng litrato o video!",
        ],
      },
      {
        q: "Gusto kong bigyan sila ng magagandang alaala ng Korea. Ano ang maganda?",
        a: [
          "Sabi nga, ang pinaka-tradisyonal ang pinaka-Koreano. Paano kaya kung maghanda ng hanbok at sabay itong isuot, o uminom ng tradisyonal na tsaa nang magkasama? Kung may libreng oras, maaaring bumisita sa kalapit na palengke, masarap na kainan, convenience store, jjimjilbang (Korean sauna), o mga tanyag na lugar, o kaya'y sa isang banal na lugar sa diyosesis upang maibahagi ang natatanging kultura at pamana ng pananampalataya ng Korea. Ang pagsulat ng pangalan ng peregrino sa Hangul bilang regalo ay magiging magandang alaala rin na iingatan nila habambuhay.",
        ],
      },
    ],
    chatbot: {
      title: "May iba pa bang tanong?",
      desc: "Magtanong sa DID chatbot. Masaya nitong sasagutin kahit ang mga tanong na wala sa FAQ na ito.",
      button: "Tanungin ang Chatbot",
    },
  },
  ja: {
    heroAlt: "サブページ背景",
    heroTitle: "よくある質問",
    metaDescription:
      "WYD2027ソウル教区大会(DID)ホームステイに関するよくある質問です。ホスト申請の条件、巡礼者の迎え方、食事の準備、文化の違い、緊急時の対応をご確認ください。",
    breadcrumb: ["NOTICE /", "よくある質問"],
    pageTitle: "ホームステイよくある質問",
    items: [
      {
        q: "ホームステイのホストに申請資格や条件はありますか?",
        a: [
          "カトリック信者の家庭であれば、どなたでも所属の小教区(教会)を通じて申請できます。ただし、一家庭につき最低2名以上の巡礼者を受け入れ、寝袋を広げられるスペース(1人あたり2m×1.5m)を提供できることが条件です。注意事項(ペットを飼っている場合のアレルギーなど)やご希望(受け入れ人数、性別)がある場合は、申請書でお知らせいただければ、巡礼者の割り当てに可能な限り反映します。特に障がいのある巡礼者の割り当ては、事前にホストの受け入れ可否を確認したうえで、巡礼者の障がいの種類(身体・視覚・聴覚・認知など)に応じて教区の追加支援についてもご案内します。",
        ],
      },
      {
        q: "巡礼者の情報を事前に知ることはできますか?",
        a: [
          "はい。巡礼者が割り当てられると、基本情報(国籍、性別、年齢、食事制限、障がいの有無など)を事前にお知らせします。それをもとに、巡礼者の母国語でのあいさつやウェルカムカードを準備したり、その国の文化を学んでおいたりするとよいでしょう。",
        ],
      },
      {
        q: "初日はどのように迎えればよいですか?空港まで迎えに行く必要がありますか?",
        a: [
          "教区や小教区の「空港歓迎ボランティアチーム」が巡礼者の送迎をサポートしますので、教区が案内する場所と時間に巡礼者と会っていただければ結構です。長時間の移動で疲れた巡礼者は、荷物を解いて休みたいと思っているはずです。盛大に歓迎するよりも、ゆっくり休めるよう配慮し、トイレの場所、緊急連絡先、予備の寝具(基本の寝袋は巡礼者が持参)、用意した軽食などを簡単に案内してあげてください。",
        ],
      },
      {
        q: "巡礼者に入国トラブルが起きたらどうすればいいですか?",
        a: [
          "入国に関する問題は、巡礼者本人と各国の引率者が一次的に対応します。手荷物を紛失した場合は、すぐに必要な生活用品(下着、洗面用具など)を提供してあげると大きな助けになります。なお、ホームステイを支援し、発生する問題に対応するため、各教区のWYD組織委員会(教区大会)とソウルWYD組織委員会(本大会)がホームステイチームを運営する予定です。緊急時に備えて、ホームステイ研修でご案内する緊急連絡先を必ず保存しておいてください。",
        ],
      },
      {
        q: "食事はどう準備すればいいですか?ベジタリアンや特別な食事が心配です。",
        a: [
          "基本的な食事についてはホームステイ研修でご案内します。巡礼者は朝食を取ってから外の日程に出かけるため、家庭で朝食を提供していただく必要があります。事情によっては夕食を用意する場合もあります。",
          "巡礼者の中には、文化的な理由で豚肉やアルコールを避ける人、ベジタリアンやアレルギーを持つ人もいます。食事を提供する前に、写真や翻訳アプリを活用して一人ひとりの情報を把握すると役立ちます。注意点が多く見えますが、完璧なオーダーメイドの食事よりも、心のこもった素朴な食卓のほうが記憶に残るといわれています。",
        ],
      },
      {
        q: "トイレや浴室の使い方にも文化の違いはありますか?",
        a: [
          "韓国のトイレの使い方に戸惑う巡礼者もいます。使用済みのトイレットペーパーをどこに捨てるか、ウォシュレットの使い方など、直感的なイラスト付きの案内カードを貼っておくとよいでしょう。また、浴室(シャワー)の利用時間や順番を事前に決めておくと混乱を減らせます。",
        ],
      },
      {
        q: "貴重品の紛失や盗難が起きたらどうなりますか?",
        a: [
          "基本的に持ち物の管理は巡礼者本人の責任です。ほとんどの巡礼者は出国前に旅行保険に加入しているため、紛失が起きた場合は保険で処理します。巡礼者から紛失の申し出があれば、すぐに小教区のWYD担当者や教区ホームステイチームに連絡してください。法的紛争につながる案件は、教区運営本部が仲裁役を務めます。",
        ],
      },
      {
        q: "巡礼者が病気になって病院に行く必要がある場合はどうすればいいですか?",
        a: [
          "緊急時に備えて、巡礼者の服用中の薬、旅行保険の証書、緊急連絡先を事前に確認しておいてください。一般的な診療の場合は近くの病院や救急外来に同行し、緊急時にはすぐに119に連絡した後、教区に知らせてください。医療費はほとんどの場合、巡礼者が加入した保険で処理されます。外国語の通訳が必要な場合は、地域行政コールセンター(120番)や外国人総合案内(1345番)の電話相談を利用できます。",
        ],
      },
      {
        q: "深夜の帰宅や門限の問題でトラブルになったらどうすればいいですか?",
        a: [
          "プログラムによっては帰宅が遅くなることがあります。巡礼者に家庭の基本的な生活ルールを明確に伝え、遅くなる場合は事前に連絡してもらうようお願いしてください。トラブルが心配な場合は、教区に連絡して助けを求めてください。",
        ],
      },
      {
        q: "巡礼者に未成年者が含まれることはありますか?その場合、何に注意すべきですか?",
        a: [
          "WYDの参加年齢は満15歳からなので未成年者も含まれ、安全のため成人の巡礼者が一緒に割り当てられます。未成年者を受け入れるホームステイ家庭では、より注意深く見守っていただくようお願いします。そのために教区としても別途追加のご案内をいたします。",
          "法的な成人の基準は国によって異なります。ただし、核心は「韓国では韓国の法律に従う」ことが原則です。韓国では満19歳から成人となるため、2027年基準で2008年生まれまでが該当し、それより若い人は本国の法律にかかわらず、飲酒も喫煙も韓国では違法です。ホームステイ家庭はこの点を巡礼者に案内してください。これは制裁ではなく、巡礼者を守るための配慮です。",
        ],
      },
      {
        q: "言葉が全く通じないのではないかと心配です。",
        a: [
          "過去のWYDの事例を見ると、言葉が全く通じなくても深い友情を築いたという美談がたくさんあります。さらに、スマートフォンの翻訳アプリや、今大会のために制作した絵で会話するカード「補完代替コミュニケーションツール」を活用すれば、言葉の壁をずっと簡単に越えられるでしょう。完璧な言葉でなくても、明るい笑顔はいつでもどこでも通じます。",
        ],
      },
      {
        q: "特に注意すべき文化的なマナーはありますか?",
        a: [
          "いくつかの基本原則を守れば、お互いに十分配慮し合えます。まず、宗教や政治、歴史のように議論になりうるテーマは深く扱わないほうがよいでしょう。肩を組む、抱擁するなどの身体接触は、国や文化によって受け止め方が異なるため、相手から求められるまでは控えてください。また、写真や動画は必ず事前に同意を得ることを忘れないでください!",
        ],
      },
      {
        q: "韓国の良い思い出を作ってあげたいです。何がいいでしょうか?",
        a: [
          "最も伝統的なものが最も韓国的だといわれます。韓服(ハンボク)を用意して一緒に着たり、伝統茶を一緒に飲んでみてはいかがでしょうか。自由時間があれば、近くの市場やグルメ店、コンビニ、チムジルバン、名所などを訪れたり、教区内の聖地を巡るなど、韓国固有の文化と信仰遺産を伝えるのもよいでしょう。また、巡礼者の名前をハングルで書いてプレゼントするのも、一生の宝物になる美しい記念品です。",
        ],
      },
    ],
    chatbot: {
      title: "まだ疑問がありますか?",
      desc: "教区大会チャットボットに聞いてみてください。よくある質問にない内容も、チャットボットが親切にお答えします。",
      button: "チャットボットに聞く",
    },
  },

  vi: {
    heroAlt: "Nền trang phụ",
    heroTitle: "Câu hỏi thường gặp",
    metaDescription:
      "Câu hỏi thường gặp về homestay của Những Ngày tại Giáo phận (DID) ĐHGTTG 2027 Seoul. Tìm hiểu điều kiện đăng ký làm gia đình đón tiếp, cách đón khách hành hương, bữa ăn, khác biệt văn hóa và xử lý tình huống khẩn cấp.",
    breadcrumb: ["NOTICE /", "Câu hỏi thường gặp"],
    pageTitle: "Câu hỏi thường gặp về homestay",
    items: [
      {
        q: "Có điều kiện hay tiêu chuẩn nào để đăng ký làm gia đình đón tiếp (host) không?",
        a: [
          "Bất kỳ gia đình Công giáo nào cũng có thể đăng ký thông qua giáo xứ của mình. Tuy nhiên, mỗi gia đình cần đón ít nhất 2 khách hành hương và có thể cung cấp không gian đủ để họ trải túi ngủ (2m × 1,5m mỗi người). Nếu có điều cần lưu ý (ví dụ: dị ứng do nuôi thú cưng) hoặc nguyện vọng (số người đón, giới tính), xin ghi rõ trong đơn đăng ký để chúng tôi cố gắng phản ánh tối đa khi phân bổ khách hành hương. Riêng với khách hành hương khuyết tật, trước tiên sẽ xác nhận khả năng tiếp nhận của gia đình, sau đó giáo phận sẽ hướng dẫn thêm về các hỗ trợ bổ sung tùy theo loại khuyết tật (vận động, thị giác, thính giác, nhận thức, v.v.).",
        ],
      },
      {
        q: "Có thể biết trước thông tin của khách hành hương không?",
        a: [
          "Có. Khi khách hành hương được phân bổ, chúng tôi sẽ thông báo trước các thông tin cơ bản của họ (quốc tịch, giới tính, độ tuổi, hạn chế ăn uống, tình trạng khuyết tật, v.v.). Dựa vào đó, bạn có thể chuẩn bị lời chào bằng tiếng mẹ đẻ của họ, thiệp chào mừng, hoặc tìm hiểu văn hóa đất nước họ.",
        ],
      },
      {
        q: "Ngày đầu tiên nên đón tiếp thế nào? Có phải ra sân bay đón không?",
        a: [
          "'Đội tình nguyện viên chào đón tại sân bay' của giáo phận hoặc giáo xứ sẽ hỗ trợ việc đón và tiễn khách hành hương, nên bạn chỉ cần gặp họ tại địa điểm và thời gian mà giáo phận thông báo. Sau chuyến đi dài, có lẽ họ sẽ muốn dỡ hành lý và nghỉ ngơi. Thay vì đón tiếp long trọng, hãy quan tâm để họ được nghỉ ngơi thoải mái: hướng dẫn ngắn gọn vị trí nhà vệ sinh, số liên lạc khẩn cấp, chăn đệm dự phòng (túi ngủ cơ bản do khách hành hương tự mang) và đồ ăn nhẹ đã chuẩn bị.",
        ],
      },
      {
        q: "Nếu khách hành hương gặp vấn đề khi nhập cảnh thì làm thế nào?",
        a: [
          "Vấn đề nhập cảnh trước hết do chính khách hành hương và trưởng đoàn của nước họ xử lý. Nếu hành lý bị thất lạc, việc cung cấp ngay các nhu yếu phẩm cần thiết (đồ lót, đồ vệ sinh cá nhân, v.v.) sẽ là sự giúp đỡ lớn. Để tham khảo, nhằm hỗ trợ homestay và ứng phó các vấn đề phát sinh, Ban tổ chức WYD của từng giáo phận (đại hội giáo phận) và Ban tổ chức WYD Seoul (đại hội chính) sẽ vận hành các đội homestay. Để phòng tình huống khẩn cấp, hãy nhớ lưu các số liên lạc khẩn cấp được hướng dẫn trong buổi tập huấn homestay.",
        ],
      },
      {
        q: "Chuẩn bị bữa ăn thế nào? Tôi lo về việc ăn chay hay chế độ ăn đặc biệt.",
        a: [
          "Thực đơn cơ bản sẽ được hướng dẫn trong buổi tập huấn homestay. Vì khách hành hương ăn sáng rồi mới ra ngoài tham gia chương trình, gia đình cần cung cấp bữa sáng. Đôi khi tùy hoàn cảnh, có thể phải chuẩn bị cả bữa tối.",
          "Trong số khách hành hương, có thể có người vì lý do văn hóa mà tránh thịt heo hay rượu bia, có người ăn chay hoặc bị dị ứng. Trước khi dọn món, nên dùng hình ảnh hoặc ứng dụng dịch để nắm thông tin từng người. Thoạt nhìn có vẻ nhiều điều phải lưu ý, nhưng người ta nói rằng một mâm cơm giản dị đầy tấm lòng sẽ được nhớ lâu hơn một thực đơn hoàn hảo theo yêu cầu.",
        ],
      },
      {
        q: "Có khác biệt văn hóa trong việc sử dụng nhà vệ sinh, phòng tắm không?",
        a: [
          "Có những khách hành hương cảm thấy lạ lẫm với cách sử dụng nhà vệ sinh ở Hàn Quốc. Nên dán các thẻ hướng dẫn bằng hình ảnh trực quan: bỏ giấy đã dùng ở đâu, dùng vòi rửa (bidet) thế nào, v.v. Ngoài ra, quy định trước giờ giấc và thứ tự sử dụng phòng tắm (vòi sen) sẽ giúp giảm nhầm lẫn.",
        ],
      },
      {
        q: "Nếu xảy ra mất mát hay trộm cắp đồ quý giá thì sao?",
        a: [
          "Về nguyên tắc, việc quản lý đồ dùng cá nhân là trách nhiệm của chính khách hành hương. Hầu hết họ đều mua bảo hiểm du lịch trước khi xuất cảnh, nên khi xảy ra mất mát sẽ được xử lý qua bảo hiểm. Nếu khách hành hương báo mất đồ, hãy liên hệ ngay với người phụ trách WYD của giáo xứ hoặc đội homestay của giáo phận. Những vụ việc có thể dẫn đến tranh chấp pháp lý sẽ do trụ sở điều hành của giáo phận đứng ra hòa giải.",
        ],
      },
      {
        q: "Nếu khách hành hương bị ốm phải đến bệnh viện thì làm thế nào?",
        a: [
          "Để đề phòng tình huống khẩn cấp, hãy xác nhận trước thuốc đang dùng của khách hành hương, giấy chứng nhận bảo hiểm du lịch và số liên lạc khẩn cấp. Với khám bệnh thông thường, hãy cùng họ đến bệnh viện hoặc phòng cấp cứu gần nhà; khi có tình huống khẩn cấp, gọi ngay 119 rồi báo cho giáo phận. Chi phí y tế phần lớn được chi trả bằng bảo hiểm mà khách hành hương đã mua. Nếu cần phiên dịch, có thể gọi tổng đài hành chính địa phương (số 120) hoặc trung tâm hướng dẫn tổng hợp cho người nước ngoài (số 1345).",
        ],
      },
      {
        q: "Nếu xảy ra mâu thuẫn vì về khuya hay giờ giới nghiêm thì làm thế nào?",
        a: [
          "Tùy chương trình, khách hành hương có thể về muộn. Hãy truyền đạt rõ nếp sinh hoạt cơ bản của gia đình và nhờ họ liên lạc trước nếu về muộn. Nếu lo ngại mâu thuẫn, hãy liên hệ giáo phận để được giúp đỡ.",
        ],
      },
      {
        q: "Trong số khách hành hương có thể có trẻ vị thành niên không? Trường hợp này cần lưu ý gì?",
        a: [
          "Độ tuổi tham gia WYD là từ 15 tuổi trở lên nên sẽ có trẻ vị thành niên; vì an toàn, các khách hành hương trưởng thành sẽ được phân bổ đi cùng. Mong các gia đình đón tiếp trẻ vị thành niên quan tâm chăm sóc các em chu đáo hơn; giáo phận cũng sẽ có hướng dẫn bổ sung riêng cho việc này.",
          "Tiêu chuẩn tuổi trưởng thành hợp pháp mỗi nước mỗi khác. Tuy nhiên, nguyên tắc cốt lõi là 'ở Hàn Quốc thì theo luật Hàn Quốc'. Hàn Quốc quy định 19 tuổi mới là người trưởng thành, nên tính đến năm 2027, những người sinh năm 2008 trở về trước mới thuộc diện này; người sinh sau đó, bất kể luật nước họ thế nào, việc uống rượu và hút thuốc đều là bất hợp pháp tại Hàn Quốc. Xin gia đình homestay hướng dẫn điều này cho khách hành hương. Đây không phải là sự cấm đoán mà là sự quan tâm để bảo vệ họ.",
        ],
      },
      {
        q: "Tôi lo là sẽ hoàn toàn không hiểu ngôn ngữ của nhau.",
        a: [
          "Nhìn lại các kỳ WYD trước, có rất nhiều câu chuyện đẹp về tình bạn sâu sắc được xây dựng dù hoàn toàn không chung ngôn ngữ. Thêm vào đó, nếu dùng ứng dụng dịch trên điện thoại hoặc bộ thẻ hội thoại bằng hình ảnh được làm riêng cho đại hội lần này — 'công cụ giao tiếp tăng cường và thay thế' — bạn sẽ vượt qua rào cản ngôn ngữ dễ dàng hơn nhiều. Dù lời nói không hoàn hảo, một nụ cười tươi sáng luôn được thấu hiểu ở mọi lúc mọi nơi.",
        ],
      },
      {
        q: "Có phép lịch sự văn hóa nào cần đặc biệt lưu ý không?",
        a: [
          "Chỉ cần giữ vài nguyên tắc cơ bản là có thể quan tâm lẫn nhau chu đáo. Trước hết, không nên đi sâu vào các chủ đề dễ tranh cãi như tôn giáo, chính trị, lịch sử. Tiếp xúc cơ thể như khoác vai hay ôm có thể được cảm nhận khác nhau tùy quốc gia và văn hóa, nên hãy kiềm chế cho đến khi đối phương chủ động đề nghị. Ngoài ra, đừng quên luôn xin phép trước khi chụp ảnh hay quay video!",
        ],
      },
      {
        q: "Tôi muốn để lại cho họ kỷ niệm đẹp về Hàn Quốc. Nên làm gì?",
        a: [
          "Người ta nói điều truyền thống nhất chính là điều Hàn Quốc nhất. Hay là chuẩn bị hanbok để cùng mặc, cùng thưởng thức trà truyền thống? Nếu có thời gian rảnh, hãy ghé chợ gần nhà, quán ăn ngon, cửa hàng tiện lợi, jjimjilbang (nhà tắm hơi Hàn Quốc), các danh thắng, hoặc thăm thánh địa trong giáo phận — để truyền tải văn hóa và di sản đức tin riêng của Hàn Quốc. Viết tên của khách hành hương bằng chữ Hangul để tặng cũng sẽ là món quà kỷ niệm tuyệt đẹp mà họ trân quý suốt đời.",
        ],
      },
    ],
    chatbot: {
      title: "Bạn còn thắc mắc gì nữa không?",
      desc: "Hãy hỏi chatbot của DID. Chatbot sẽ vui lòng giải đáp cả những nội dung không có trong mục câu hỏi thường gặp này.",
      button: "Hỏi Chatbot",
    },
  },
};
