import React from 'react';
import MenuItem from './MenuItem';
import { RxActivityLog } from 'react-icons/rx';
import { FcSettings } from 'react-icons/fc';
import { MdAdminPanelSettings } from 'react-icons/md';

const MemberMenu = () => {
  return (
    <>
      <MenuItem address="/dashboard" icon={RxActivityLog} label="Activity Log" />
      <MenuItem address="/dashboard/profile" icon={MdAdminPanelSettings} label="Profile" />
      <MenuItem address="/dashboard/booked-trainers" icon={MdAdminPanelSettings} label="Booked Trainers" />
    </>
  );
};

export default MemberMenu;
