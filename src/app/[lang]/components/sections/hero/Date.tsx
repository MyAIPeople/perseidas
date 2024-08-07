import { caveat } from "@/app/[lang]/fonts";
import { cn } from "@/lib/utils";

const Date = () => {
  return (
    <div className={cn(caveat.variable, "absolute right-4 bottom-32 md:right-40 text-center")}>
      <p className="font-caveat font-extrabold text-4xl md:text-7xl text-yellow-500">16•08•2024</p>
      <p className="font-caveat font-extrabold text-xl md:text-4xl text-white">19:00 A 00:00h</p>
    </div>
  );
};

export default Date;
