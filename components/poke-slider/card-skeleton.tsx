import { Skeleton } from "../ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4 px-4 md:gap-8 md:px-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="h-[125px] w-40" />
      ))}
    </div>
  );
};

export default CardSkeleton;
