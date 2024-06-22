import React from 'react';
import MenuItem from './MenuItem';
import { RxActivityLog } from 'react-icons/rx';

const MemberMenu = () => {
  return (
    <>
      <MenuItem address="/dashboard" icon={RxActivityLog} label="Activity Log" />
    </>
  );
};

export default MemberMenu;
