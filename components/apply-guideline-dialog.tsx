"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type GuidelineSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};

// 출처: '2027 서울 WYD' 교구대회 참가 접수 운영 지침 (WYD 교구대회 준비위원회, 2026. 7. 7. 수정 배포) — 한글 본문
const GUIDELINE_SECTIONS: GuidelineSection[] = [
  {
    paragraphs: [
      "※ 본 문서는 표준 권고안이며, WYD 순례자들에 대한 ‘환대’와 ‘보호’를 목적으로 작성하였습니다. 각 교구는 본 문서의 기준을 준수하는 범위 안에서 교구별 상황에 따라 판단하여 활용하시기를 바랍니다.",
      "- WYD 교구대회 준비위원회 제8차 회의 2026. 6. 15. 공유 -",
      "- 2026. 7. 7. 수정 배포 -",
      "※ 본 자료에 인용된 법령은 2026년 6월 시행 기준이며, 실제 시행 시점에 재확인한다.",
    ],
  },
  {
    title: "가. 미성년자 관련 국내법 기준 안내",
  },
  {
    title: "1. 안내의 목적",
    paragraphs: [
      "제1장 제5원칙(어린이·청소년 우선 보호)은 미성년자 관련 사안에 국내법(민법 제4조, 출입국관리법, 아동복지법)과 국제 아동보호 규범을 적용한다고 명시한다.",
      "그러나 파견 측 인솔자와 순례자 대부분은 한국의 연령 기준을 알지 못하므로, 등록·인솔 단계에서 혼선이 생길 수 있다. 본 안내는 ‘어떤 법이, 누구에게, 몇 세를 기준으로’ 적용되는지를 명확히 하여 현장의 판단을 돕는다.",
    ],
  },
  {
    title: "2. 목적에 따라 상이한 한국법의 ‘미성년’ 기준",
    table: {
      headers: ["근거 법령", "용어 / 기준 연령", "적용 영역"],
      rows: [
        [
          "민법 제4조",
          "성인: 만 19세 / 미성년자: 만 19세 미만",
          "계약·동의 등 법률행위 능력의 기준",
        ],
        [
          "아동복지법 제3조",
          "아동: 만 18세 미만",
          "아동 학대 예방·보호 조치의 대상",
        ],
        [
          "청소년보호법 제2조",
          "청소년: 만 19세 미만",
          "주류·담배 금지 등 유해환경 규제",
        ],
        [
          "UN 아동권리협약",
          "아동: 만 18세 미만",
          "국제 아동보호 규범(한국은 당사국)",
        ],
      ],
    },
  },
  {
    title: "3. 외국인 순례자에게 우선 적용되는 ‘본국법’ 기준 (국제사법 제28조)",
    paragraphs: [
      "이는 가장 중요한 쟁점이다. 국제사법 제28조 제1항은 “사람의 행위능력은 그의 본국법에 따른다”고 규정한다. 이에 따라 외국인 청년의 성인 기준은 원칙적으로 한국의 만 19세 기준이 아닌, 해당 청년의 국적국 법에 따라 판단한다.",
      "대다수 파견국(이탈리아, 스페인, 프랑스, 폴란드 등)은 만 18세를 성인으로 규정하므로, 만 18세 외국인 청년은 본국법상 이미 성인이며, 한국의 만 19세 기준만을 적용해 일률적으로 미성년자 취급을 할 경우 ‘본국법상 성인을 미성년자로 간주하는’ 모순이 발생한다.",
      "다만, 보호 목적의 강행규정은 속지주의 원칙에 따라 적용된다. 아동복지법 및 「아동학대범죄의 처벌 등에 관한 특례법」 등 아동보호 관련 법령은 국적과 관계없이 대한민국 영토 내에 체류하는 만 18세 미만의 모든 사람에게 예외 없이 적용된다(공공질서 및 국제적 강행규정).",
      "이를 정리하면, 법률행위 ‘능력’은 해당 참가자의 본국법을 따르고, 신분·신체적 ‘보호’는 대한민국 법령(속지주의)을 적용하는 이중 구조를 취하게 된다.",
    ],
  },
  {
    title: "4. 보호 기준선을 ‘만 18세 미만’으로 통일(교준위 제8차 회의 결정 사항)",
    paragraphs: [
      "현행 지침(안)은 미성년자 기준을 만 19세 미만(민법 기준)으로 설정하였다. 그러나 위 분석에 비추어, 국제 행사의 ‘보호 기준선’으로는 다음이 더 정합적이다.",
      "[권고] 다음 중 어느 하나에 해당하면 ‘미성년자(보호 대상)’로 간주한다.",
    ],
    bullets: [
      "① 만 18세 미만인 자(아동복지법·UN 아동권리협약·대다수 파견국 기준에 부합)",
      "② 본국법상 아직 성인이 아닌 자(성인 연령이 18세를 초과하는 국가의 청년 보호)",
    ],
  },
  {
    paragraphs: [
      "이 기준은 (가) 보호의 공백을 방지하고, (나) 본국법상 성인인 만 18세 청년에게 불필요한 보호자 동반 및 동의서 부담을 지우지 않으며, (다) WYD의 국제 아동보호(Safeguarding) 관행과 부합한다.",
      "반대로 만 19세 미만 기준을 고수할 경우, 본국법상 성인인 18세 외국인 순례자에게까지 부모 동의서와 보호자 동반을 요구하게 되어, 현장 운영의 부담과 법적 정합성 문제가 동시에 발생하게 된다.",
    ],
  },
  {
    title: "5. 한국 측 수용자도 ‘법적 보호자’가 된다. (실무상 매우 중요)",
    paragraphs: [
      "아동복지법 제3조 제3호는 ‘보호자’의 범위를 친권자나 후견인뿐만 아니라 “업무·고용 등의 관계로 사실상 아동을 보호·감독하는 자”까지 포함하도록 규정하고 있다.",
      "따라서 만 18세 미만의 외국인 순례자를 맞이하는 홈스테이 가정, 인솔 사제, 수용 교구(DOC)는 순례자의 체류 기간 중 대한민국 법령상 ‘보호자’의 지위를 갖게 되며, 이에 따른 법적 책임을 진다.",
    ],
    bullets: [
      "아동학대(신체적·정서적·성적 학대 및 방임)의 금지 및 예방 의무",
      "「아동학대범죄의 처벌 등에 관한 특례법」의 속지적 적용(국내에서 발생하는 모든 행위 대상)",
      "일부 직군·역할의 경우 아동 학대 신고 의무자에 해당할 수 있음",
    ],
  },
  {
    paragraphs: ["[실무 권고 사항]"],
    bullets: [
      "① 미성년자 동반 프로그램 진행 시 ‘2인 이상 동행’ 및 ‘성인-미성년자 단독 대면 금지’ 원칙 적용",
      "② 홈스테이 가정 대상 아동보호(Safeguarding) 기본 교육 실시 및 서약 이행",
      "③ 미성년자 수용 가정 및 인솔자에 대한 사전 자격 확인 절차 마련",
    ],
  },
  {
    title: "6. 출입국 관련 정확한 이해",
    paragraphs: [
      "대한민국 출입국관리 법령상 ‘미성년자는 보호자 없이 입국할 수 없다’는 단일 규정은 존재하지 않는다.",
      "실무상 미성년자의 단독 또는 부분 동반 여행 시 요구되는 서류(부모 동의서, 가족관계 증명서, 위임장 등)는 주로 ① 파견국의 출국 통제 규정, ② 항공사의 비동반 소아(UM) 서비스 정책, ③ 인신매매 및 유괴 방지를 위한 국제 아동보호 규범에 기인한다.",
      "따라서 본 지침(안)의 ‘출입국 시 보호자 동반 요건’은 다음과 같은 실무 기준으로 운용하는 것이 정확하다.",
    ],
    bullets: [
      "교구대회(Days in the Dioceses) 안전 정책: ‘2027 서울 WYD’ 교구대회는 자체 안전 정책에 따라 미성년 순례자에 대해 보호자 동반, 부모 동의서 및 위임장 제출을 필수 요건으로 요구한다(별지 3·4 참조)",
      "파견국 출국 및 항공사 규정 준수 책임: 파견국의 출국 규정 및 항공사별 UM(비동반 소아) 규정의 충족 책임은 전적으로 파견 측과 해당 보호자에게 있으며, 관련 사항은 등록 시 안내한다.",
      "사증 및 K-ETA 확인 안내: 입국 사증(비자) 및 전자여행허가(K-ETA) 발급 대상 여부는 국적별로 상이하므로, 파견 측에서 사전에 직접 확인하도록 안내한다.",
    ],
  },
  {
    title: "나. 행동 규약 표준안",
    paragraphs: [
      "본 규약은 ‘2027 서울 WYD’ 교구대회에 참가하는 모든 순례자와 인솔자가 준수하여야 할 공동의 약속이다. 그 정신은 환대와 통합, 그리고 그리스도인의 형제애에 있다.",
      "등록 시 그룹의 모든 구성원은 본 규약에 서명하며(별지5 참조), 미성년자의 경우 보호자가 함께 서명한다.",
    ],
  },
  {
    title: "제1조 (목적과 정신)",
    paragraphs: [
      "교구대회는 세계 청년들이 한국 지역교회 공동체와 통합되어 신앙을 나누는 사목 체험의 장이다. 모든 순례자(참가자)는 서로를 그리스도 안에서 형제자매로 존중하며, 환대받는 자인 동시에 환대하는 자로 행동한다.",
    ],
  },
  {
    title: "제2조 (일반 행동)",
    bullets: [
      "1) 모든 순례자는 인솔자와 수용 교구의 정당한 안내·지시를 따르며, 공동 일정에 성실히 참여하여야 한다.",
      "2) 모든 순례자는 집합 시간과 장소를 철저히 준수하고, 개별 행동이 필요한 경우 사전에 인솔자의 승인을 받아야 한다.",
      "3) 모든 순례자는 공공장소 및 전례 중에는 단정한 복장과 태도를 유지하며, 정숙과 질서를 지켜야 한다.",
    ],
  },
  {
    title: "제3조 (안전과 건강)",
    bullets: [
      "1) 모든 순례자는 유효한 여행자 보험에 의무적으로 가입하여야 한다. (미가입 시 등록 거부 사유에 해당함)",
      "2) 만성질환, 알레르기, 정기 투약 등 의료적 특수사항과 비상 연락처는 등록 시 반드시 신고하여야 한다.",
      "3) 모든 순례자는 정해진 프로그램에서 무단으로 이탈해서는 안 되며, 부득이한 사유가 발생한 경우 즉시 인솔자에게 고지하여야 한다.",
    ],
  },
  {
    title: "제4조 (금지 행위)",
    bullets: [
      "1) 불법 약물의 소지 및 사용, 과도한 음주, 폭력, 괴롭힘, 차별 및 혐오 표현을 일절 금한다.",
      "2) 타인의 신체적·정서적·성적 경계를 침해하는 일체의 행위를 금한다.",
      "3) 절도, 기물 파손, 홈스테이 가정 및 시설에 대한 결례를 금한다.",
    ],
    paragraphs: [
      "※ 「청소년보호법」에 따라 만 19세 미만(단, 해당 연도 1월 1일 이후 출생자 제외)에게는 주류 및 담배 제공이 엄격히 금지된다. 홈스테이 가정과 인솔자는 대한민국 영토 내에서 예외 없이 적용되는 이 법 규정에 각별히 유의하여야 한다.",
    ],
  },
  {
    title: "제5조 (홈스테이 예절)",
    bullets: [
      "1) 배정된 가정 또는 숙소의 생활 규칙과 통금 시간을 존중하고, 청결과 정돈을 유지하며, 감사의 마음을 표현한다.",
      "2) 호스트 가정을 포함한 타인의 사생활을 존중하며, 사전 허락 없이 가정 내부를 촬영하거나 외부에 공개하지 않는다.",
    ],
  },
  {
    title: "제6조 (아동·미성년자 보호) — Safeguarding",
    bullets: [
      "1) 모든 순례자는 미성년자의 안전과 존엄을 최우선 가치로 삼는다.",
      "2) 성인과 미성년자의 1:1 단독 대면 및 숙박을 금하며, ‘2인 이상 동행’ 원칙을 철저히 준수한다.",
      "3) 미성년자에 대한 신체적·정서적·성적 학대 및 방임이 의심되는 징후를 발견한 경우, 즉시 인솔자와 수용 교구(DOC)에 통보하여야 한다.",
    ],
  },
  {
    title: "제7조 (문화·종교적 존중)",
    bullets: [
      "1) 모든 순례자는 가톨릭 전례와 신심 행위를 존중하여야 한다.",
      "2) 비신자 동반 참가자 역시 환대의 대상이며, 이들의 신앙 프로그램 참여는 자율에 맡기되, 공동체의 질서와 규칙은 함께 준수하여야 한다.",
    ],
  },
  {
    title: "제8조 (초상권 및 미디어 가이드라인)",
    bullets: [
      "1) 타인, 특히 미성년자의 사진 및 영상 촬영과 이를 온라인에 게시하는 행위는 반드시 본인 또는 보호자의 사전 동의를 거쳐야 한다.",
      "2) 해당 교구(DOC)가 정한 미디어 정책과 초상권 보호 지침을 엄격히 준수하여야 한다.",
    ],
  },
  {
    title: "제9조 (위반 시 조치)",
    bullets: [
      "1) 본 행동 규약 위반 행위가 발생한 경우, 1차적으로 해당 그룹 리더가 조치하고, 필요시 수용 교구(DOC)가 2차 조치를 단계적으로 시행한다.",
      "2) 사안이 중대한 경우(폭력, 약물 소지, 성적 비위 등) 즉시 대상자를 분리하여 귀가 조치할 수 있으며, 필요에 따라 LOC 위기관리센터나 사법기관에 연계한다.",
    ],
  },
  {
    title: "제10조 (서약)",
    paragraphs: [
      "본인은 위 행동 규약을 주의 깊게 읽고 이해하였으며, ‘2027 서울 WYD’ 교구대회 기간 동안 이를 성실히 준수할 것을 서약합니다.",
    ],
  },
  {
    title: "표준 서식 (별지)",
    bullets: [
      "별지 1. 파견 추천(증명)서 표준 서식",
      "별지 2. 통합 그룹(Cluster) 코디네이터 지정서 표준 양식",
      "별지 3. 미성년자 부모(법정대리인) 동의서",
      "별지 4. 보호자 위임장 (부모/법정대리인 미동행 시)",
      "별지 5. 행동 규약 서약서",
    ],
    paragraphs: ["※ 각 표준 서식은 등록(접수) 시 교구의 안내에 따라 작성·제출합니다."],
  },
];

export default function ApplyGuidelineDialog({
  href,
  triggerLabel,
}: {
  href: string;
  triggerLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setAgreed(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex min-h-12 w-full cursor-pointer items-center justify-center rounded-md bg-[#0047BB] px-4 py-3 text-center body01m text-white transition-colors hover:bg-[#003a99]"
      >
        {triggerLabel}
      </button>
      <DialogContent
        data-lenis-prevent
        className="max-w-[calc(100%-2rem)] sm:max-w-2xl max-h-[85dvh] flex flex-col gap-0 p-0 overflow-hidden"
      >
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-200 text-left">
          <DialogTitle className="text-base md:text-lg leading-snug break-keep pr-6">
            ‘2027 서울 WYD’ 교구대회 참가 접수 운영 지침
          </DialogTitle>
          <DialogDescription className="text-xs md:text-sm break-keep">
            미성년자 관련 국내법 기준 안내 및 표준 서식 — 신청 전 아래 지침을
            확인하시고 동의해 주세요.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-y-4 text-left">
          {GUIDELINE_SECTIONS.map((section, idx) => (
            <section key={section.title ?? `section-${idx}`}>
              {section.title && (
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 break-keep">
                  {section.title}
                </h3>
              )}
              {section.paragraphs?.map((p) => (
                <p
                  key={p.slice(0, 30)}
                  className="text-xs md:text-sm text-gray-600 leading-5 md:leading-6 break-keep mb-2"
                >
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="flex flex-col gap-y-1.5 pl-1">
                  {section.bullets.map((b) => (
                    <li
                      key={b.slice(0, 30)}
                      className="text-xs md:text-sm text-gray-600 leading-5 md:leading-6 break-keep"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="w-full overflow-x-auto mt-1">
                  <table className="w-full min-w-[420px] border-collapse text-xs md:text-sm">
                    <thead>
                      <tr>
                        {section.table.headers.map((h) => (
                          <th
                            key={h}
                            className="bg-[#0047BB] text-white font-semibold px-3 py-2 border border-[#0047BB] text-left"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell) => (
                            <td
                              key={cell}
                              className="px-3 py-2 border border-gray-200 text-gray-600 break-keep align-top"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col gap-y-3">
          <label className="flex items-start gap-x-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#0047BB] shrink-0"
            />
            <span className="text-xs md:text-sm text-gray-800 font-medium break-keep">
              위 운영 지침을 모두 확인하였으며, 이에 동의합니다.
            </span>
          </label>
          <div className="flex gap-x-2">
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="flex-1 min-h-11 rounded-md border border-gray-300 bg-white text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              취소
            </button>
            <a
              href={agreed ? href : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!agreed}
              onClick={(e) => {
                if (!agreed) {
                  e.preventDefault();
                  return;
                }
                handleOpenChange(false);
              }}
              className={
                agreed
                  ? "flex-[2] min-h-11 flex items-center justify-center rounded-md bg-[#0047BB] text-white text-sm font-semibold hover:bg-[#003a99] transition-colors"
                  : "flex-[2] min-h-11 flex items-center justify-center rounded-md bg-gray-300 text-gray-500 text-sm font-semibold cursor-not-allowed"
              }
            >
              신청 페이지로 이동
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
