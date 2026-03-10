import CountUp from "@/components/count-up";

export default function CountDay() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(2027, 6, 29);
  const diff = Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="text-black heading01b text-[clamp(30px,7dvw,130px)]">
      D -{" "}
      <CountUp
        from={0}
        to={diff}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
    </div>
  );
}
