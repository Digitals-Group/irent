import type { ComponentProps, FC } from 'react';

export const LanguageIcon: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
    width="5"
    height="4"
    viewBox="0 0 4 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}

  >
    <path d="M2 2.5L0 0.5L4 0.5L2 2.5Z" fill="#00122A" />
  </svg>
  );
};
