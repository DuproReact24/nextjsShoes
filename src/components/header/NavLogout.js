'use client';
import React from 'react';
import { Dropdown } from 'antd';
import Link from 'next/link';

const NavLogout = () => {
  const items = [
    {
      key: '1',
      label: (
        <Link target="_blank" href="/loginTest">
          Đăng nhập
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link target="_blank" href="/register">
          Đăng ký
        </Link>
      ),
    },
  ];
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
        placement="bottomRight"
      >
        <div className="border rounded-xl px-3 py-2 space-x-5">
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </Dropdown>
    </div>
  );
};

export default NavLogout;
