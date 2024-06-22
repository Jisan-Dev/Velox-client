import React from 'react';
import MenuItem from './MenuItem';
import { SiNginxproxymanager } from 'react-icons/si';

const TrainerMenu = () => {
  return (
    <>
      <MenuItem address="/dashboard/manage-slots" icon={SiNginxproxymanager} label="Manage Slots" />
      <MenuItem address="/dashboard/add-slot" icon={SiNginxproxymanager} label="Add Slot" />
    </>
  );
};

export default TrainerMenu;
