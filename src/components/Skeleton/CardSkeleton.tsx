import { Skeleton } from '@mui/material';

const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-solid border-black/[0.1] p-4">
      <Skeleton
        variant="rounded"
        height={77.5}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        height={200}
        animation="wave"
      />
      <div className="flex gap-1">
        {[1, 2, 3].map((el) => {
          return (
            <Skeleton
              key={el}
              variant="rounded"
              width={200}
              height={24}
              animation="wave"
            />
          );
        })}
      </div>
      <Skeleton
        variant="rounded"
        height={70}
        animation="wave"
      />
    </div>
  );
};

export default CardSkeleton;
