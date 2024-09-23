'use client';
import React, { useEffect, useState } from 'react';

const UserNav = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const renderUserNav = () => {};

  return <div></div>;
};

export default UserNav;
