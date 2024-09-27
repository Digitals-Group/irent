import { Skeleton } from '@mui/material';

const BannerSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-solid border-black/[0.1] p-4">
      <Skeleton
        variant="rounded"
        height={40}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        height={50}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={110}
        height={40}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        height={172}
        animation="wave"
      />
    </div>
  );
};

export default BannerSkeleton;
