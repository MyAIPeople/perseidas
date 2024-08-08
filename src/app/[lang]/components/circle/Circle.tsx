import { cn } from "@/lib/utils";

const Circle = ({
  color = "border-yellow-600",
  position,
  z,
  translateX,
  translateY,
  shadow = "shadow-md",
  className,
}: {
  color?: "border-yellow-500" | "border-white" | "border-yellow-600";
  position?: "relative" | "fixed" | "absolute" | "sticky";
  z?: string;
  translateX?: string;
  translateY?: string;
  shadow?: "shadow-sm" | "shadow-md" | "shadow-lg" | "shadow-xl" | "shadow-2xl";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `rounded-full`,
        `${color}`,
        `${z}`,
        `${position}`,
        `${shadow} shadow-black`,
        `${translateX} ${translateY}`,
        className
      )}
    ></div>
  );
};

export default Circle;
