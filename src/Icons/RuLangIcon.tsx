import type { ComponentProps, FC } from 'react';

export const RuLangIcon: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      width="27"
      height="20"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_7266)">
        <path
          d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
          fill="#F0F0F0"
        />
        <path
          d="M496.077 345.043C506.368 317.31 512 287.314 512 256C512 224.686 506.368 194.69 496.077 166.957H15.923C5.633 194.69 0 224.686 0 256C0 287.314 5.633 317.31 15.923 345.043L256 367.304L496.077 345.043Z"
          fill="#0052B4"
        />
        <path
          d="M256 512C366.071 512 459.906 442.528 496.077 345.043H15.9231C52.0941 442.528 145.929 512 256 512Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_7266">
          <rect
            width="512"
            height="512"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
