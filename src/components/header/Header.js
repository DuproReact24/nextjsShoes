import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="border-b shadow py-4 sticky top-0 left-0 bg-gray-50 z-50">
      <div className="container mx-auto flex justify-between">
        <Link href={'/'}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/956/590/small/creative-abstract-black-silhouette-running-shoe-design-logo-design-template-free-vector.jpg"
            width={50}
          />
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
