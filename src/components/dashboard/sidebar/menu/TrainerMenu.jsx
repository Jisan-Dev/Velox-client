import React from 'react';
import MenuItem from './MenuItem';
import { SiNginxproxymanager } from 'react-icons/si';
import { MdOutlineManageHistory } from 'react-icons/md';
import { TbTimelineEventPlus } from 'react-icons/tb';

const TrainerMenu = () => {
  return (
    <>
      <MenuItem address="/dashboard/manage-slots" icon={MdOutlineManageHistory} label="Manage Slots" />
      <MenuItem address="/dashboard/add-slot" icon={TbTimelineEventPlus} label="Add Slot" />
      <MenuItem address="/dashboard/trainer/add-forum" icon={SiNginxproxymanager} label="Add Forum" />
    </>
  );
};

export default TrainerMenu;
