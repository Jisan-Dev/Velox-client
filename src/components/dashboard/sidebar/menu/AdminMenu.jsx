import React from 'react';
import MenuItem from './MenuItem';
import { RxActivityLog } from 'react-icons/rx';
import { FcSettings } from 'react-icons/fc';
import { MdAdminPanelSettings } from 'react-icons/md';

const AdminMenu = () => {
  return (
    <>
      <MenuItem address="/dashboard/subscribers" icon={RxActivityLog} label="Subscribers" />
      <MenuItem address="/dashboard/applied-trainers" icon={RxActivityLog} label="Applied Trainers" />
      <MenuItem address="/dashboard/trainers" icon={RxActivityLog} label="All Trainers" />
      <MenuItem address="/dashboard/add-class" icon={RxActivityLog} label="Add New Class" />
      <MenuItem address="/dashboard/balance" icon={RxActivityLog} label="Balance" />
    </>
  );
};

export default AdminMenu;
