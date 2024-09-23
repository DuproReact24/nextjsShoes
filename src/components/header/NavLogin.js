'use client';
import React from 'react';

const NavLogin = () => {
  const handleLogout = () => {};
  const items = [
    {
      key: '1',
      label: <div onClick={handleLogout}>Đăng xuất</div>,
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
          <span>name</span>
          <i className="fa-solid fa-user"></i>
        </div>
      </Dropdown>
    </div>
  );
};

export default NavLogin;
