'use client';

import { Button, Grid2, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerImage from '../../assets/bg.png';
import BannerSkeleton from '../Skeleton/BannerSkeleton';

const Banner: FC = () => {
  const [load, setLoad] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    setLoad(true);
  }, []);

  const skeletonCount = isMobile ? 2 : 1;
  if (!load) {
    return (
      <div className="w-full">
        <Grid2
          container
          spacing={2}
        >
          {Array.from({ length: skeletonCount }).map((_, index) => {
            return (
              <Grid2
                size={{ xs: 12, sm: 6 }}
                key={index}
              >
                <BannerSkeleton />
              </Grid2>
            );
          })}
        </Grid2>
      </div>
    );
  }

  const bannerContent = (
    <div className="relative flex h-[360px] flex-1 justify-center rounded-md bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
      <Image
        src={BannerImage}
        alt="banner image"
        layout="fill"
        objectPosition="bottom"
        objectFit="contain"
      />
      <div className="absolute left-5 top-5 flex w-2/3 flex-col gap-4 text-white">
        <h3 className="text-2xl font-semibold">The Best Platform for Car Rental</h3>
        <p className="text-sm">
          Ease of doing a car rental safely and reliably. Of course at a low price.
        </p>
        <div>
          <Button
            variant="contained"
            size="medium"
            sx={{ textTransform: 'none' }}
          >
            Rental Card
          </Button>
        </div>
      </div>
    </div>
  );

  return isMobile ? (
    <Swiper
      spaceBetween={10}
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
      }}
      className="swiper"
    >
      {[1, 2].map((elem) => (
        <SwiperSlide key={elem}>{bannerContent}</SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <>{[1, 2].map(() => bannerContent)}</>
  );
};

export default Banner;
