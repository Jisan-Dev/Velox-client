import React from 'react';
import MenuItem from './MenuItem';
import { RxActivityLog } from 'react-icons/rx';
import { MdAddTask, MdAttachMoney, MdChecklistRtl, MdPlaylistAdd } from 'react-icons/md';
import { GiMedallist } from 'react-icons/gi';

const AdminMenu = () => {
  return (
    <>
      <MenuItem address="/dashboard/subscribers" icon={RxActivityLog} label="Subscribers" />
      <MenuItem address="/dashboard/applied-trainers" icon={MdChecklistRtl} label="Applied Trainers" />
      <MenuItem address="/dashboard/trainers" icon={GiMedallist} label="All Trainers" />
      <MenuItem address="/dashboard/add-class" icon={MdPlaylistAdd} label="Add New Class" />
      <MenuItem address="/dashboard/balance" icon={MdAttachMoney} label="Balance" />
      <MenuItem address="/dashboard/add-forum" icon={MdAddTask} label="Add Forum" />
    </>
  );
};

export default AdminMenu;
