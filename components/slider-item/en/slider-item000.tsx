import Image from "next/image";

export default function SliderItem000En() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/main/main00.jpeg"
        className="h-full w-full object-cover"
        fill
        sizes="100vw"
        priority
        alt="WYD 2027 DID main image notice slide"
      />

      <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-y-4 text-center text-white">
        <h2 className="heading02b w-full text-5xl max-[1080px]:text-4xl max-[769px]:text-3xl">
          Notice
        </h2>
        <p className="body01b w-full whitespace-pre-line text-3xl max-[1080px]:text-2xl max-[769px]:text-xl">{`This page is dedicated to diocesan event registration.
Registration is available only through this page,
and individual applications are not accepted.

Registration is scheduled to open in May,
and detailed dates will be announced later.`}</p>
      </div>
      <div className="absolute top-0 left-0 z-10 h-full w-full backdrop-brightness-30" />
    </div>
  );
}

