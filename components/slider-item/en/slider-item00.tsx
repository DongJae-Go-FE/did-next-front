import Image from "next/image";

export default function SliderItem00En() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/main/main00.jpeg"
        className="h-full w-full object-cover animate-pan-zoom-center"
        fill
        sizes="100vw"
        priority
        alt="WYD 2027 DID main image first slide"
      />
      <h2 className="heading02b absolute top-1/2 left-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 transform text-center text-5xl text-white animate-bottomUp opacity-0 max-[1080px]:text-3xl">
        2027 WYD Days in Diocese
        <br />
        COMING SOON
      </h2>
      <div className="absolute top-0 left-0 z-10 h-full w-full animate-fadeIn2 backdrop-brightness-30 opacity-0" />
    </div>
  );
}

