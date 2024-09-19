'use client';

import { DataInterface } from '@/app/page';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { BalloonIcon, GasolineIcon, LikeIcon, PeopleCapacity } from '@/Icons';
import Image from 'next/image';
import { FC } from 'react';

interface CardInterface {
  elem: DataInterface;
}

const Card: FC<CardInterface> = (props) => {
  const { elem } = props;
  return (
    <CardContainer className="inter-var cursor-pointer">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6">
        <CardItem
          translateZ="50"
          className="w-full"
        >
          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-primary text-lg font-bold">{elem.name}</h4>
              <LikeIcon className="stroke-secondary text-sm" />
            </div>
            <p className="text-secondary">{elem.category}</p>
          </div>
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full"
        >
          <Image
            src={elem.image}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-contain"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex items-center justify-between">
          <CardItem
            translateZ={20}
            className="flex items-center gap-1 rounded-xl pb-2 text-xs font-normal"
          >
            <GasolineIcon className="fill-secondary" />
            <p className="text-secondary">{elem.volume}</p>
          </CardItem>
          <CardItem
            translateZ={20}
            className="flex items-center gap-1 rounded-xl pb-2 text-xs font-normal"
          >
            <BalloonIcon className="fill-secondary" />
            <p className="text-secondary">{elem.type}</p>
          </CardItem>
          <CardItem
            translateZ={20}
            className="flex items-center gap-1 rounded-xl pb-2 text-xs font-normal"
          >
            <PeopleCapacity className="fill-secondary" />
            <p className="text-secondary">{elem.capacity}</p>
          </CardItem>
        </div>
        <div className="flex items-center justify-between">
          <CardItem
            translateZ={20}
            className="text-xl font-normal"
          >
            <div className="font-semibold">
              {elem.discountedPrice}/{' '}
              <span className="text-secondary text-sm font-medium">day</span>
            </div>
            <p className="text-secondary text-sm">{elem.price}</p>
          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white"
          >
            Rent Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
