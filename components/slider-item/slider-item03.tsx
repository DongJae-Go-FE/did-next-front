import Image from "next/image";

export default function SliderItem03() {
  return (
    <Image
      src="/main/main03.jpg"
      alt="did 메인이미지 세번째 메인"
      width={1920}
      height={1080}
      priority
      className="w-full h-full object-cover"
    />
  );
}
