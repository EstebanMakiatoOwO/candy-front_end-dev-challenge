import LineSvg from "@/assets/line.svg?react";

export const RightLine = () => {
  return (
    <aside className="sticky top-24 right-0 w-24 h-150 z-40 flex items-end justify-end">
      <div className="relative w-full h-full bg-transparent flex flex-col items-end justify-end border-l-2 border-gray-200">
        <LineSvg className="mt-auto -mb-4 self-start -ml-1 scale-80" />
      </div>
    </aside>
  );
};
