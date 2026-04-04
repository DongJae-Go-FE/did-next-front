import Image from "next/image";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export default function SliderItem000En() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={`${IMAGE_BASE}/did/main/main00.jpeg`}
        className="h-full w-full object-cover"
        fill
        sizes="100vw"
        priority
        alt="WYD 2027 DID main image notice slide"
      />

      <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-y-4 text-center text-white w-full">
        <h2 className="heading02b w-full text-5xl max-[1080px]:text-4xl max-[769px]:text-3xl">
          Notice
        </h2>
        <p className="body01b w-full whitespace-pre-line text-3xl max-[1080px]:text-2xl max-[769px]:text-xl">{`The DID site opening, originally scheduled for April 5th, has been postponed at the request of the diocesan event organizers.
The new opening date will be announced at a later time.`}</p>
      </div>
      <div className="absolute top-0 left-0 z-10 h-full w-full backdrop-brightness-30" />
    </div>
  );
}

