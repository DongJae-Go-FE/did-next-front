import { MessageCircleWarning } from "lucide-react";

export default function Page() {
  return (
    <main
      className="w-full h-full pt-30 min-h-dvh bg-gray-300 justify-center items-center flex"
      id="section"
    >
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <MessageCircleWarning width={60} height={60} />
        <p className="heading01b text-center">This language page is coming soon.</p>
      </div>
    </main>
  );
}
