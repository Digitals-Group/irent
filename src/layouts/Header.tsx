'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <Link
      href="/"
      locale="ru"
    >
      To /fr/another
    </Link>
  );
};

export default Header;
