import type { Locale } from "./content";

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
