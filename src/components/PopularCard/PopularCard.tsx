'use client';

import { DataInterface } from '@/app/page';
import { Grid2 } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import CardSkeleton from '../Skeleton/CardSkeleton';

interface PopularCardInterface {
  data: DataInterface[];
}
const PopularCard: FC<PopularCardInterface> = (props) => {
  const { data } = props;

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);

  if (!load) {
    return (
      <Grid2
        container
        spacing={2}
      >
        {[1, 2, 3, 4].map((el) => {
          return (
            <Grid2
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={el}
            >
              <CardSkeleton />
            </Grid2>
          );
        })}
      </Grid2>
    );
  }

  return (
    <Swiper
      spaceBetween={8}
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="swiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {data.map((elem) => (
        <SwiperSlide key={elem.name}>
          <Card elem={elem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularCard;
