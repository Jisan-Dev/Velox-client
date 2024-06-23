import React from 'react';
import MenuItem from './MenuItem';
import { RxActivityLog } from 'react-icons/rx';
import { HiClipboardCheck } from 'react-icons/hi';
import { MdAdminPanelSettings } from 'react-icons/md';

const MemberMenu = () => {
  return (
    <>
      <MenuItem address="/dashboard/activity-log" icon={RxActivityLog} label="Activity Log" />
      <MenuItem address="/dashboard/profile" icon={MdAdminPanelSettings} label="Profile" />
      <MenuItem address="/dashboard/booked-trainers" icon={HiClipboardCheck} label="Booked Trainers" />
    </>
  );
};

export default MemberMenu;
