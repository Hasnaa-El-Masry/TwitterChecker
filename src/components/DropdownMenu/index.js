import React from "react";
import { Menu, Dropdown } from "antd";

function DropdownMenu(props) {

  const menu = (
    <Menu>
      
      {props.contentData && props.renderItem ? props.contentData.map((item,index)=> props.renderItem(item,index)) :""}

    </Menu>
  );

  return (
    <Dropdown overlay={menu} {...props}>
      <a  onClick={(e) => e.preventDefault()}>
        {props.icon? <i className={props.icon}></i>:""}
        {props.title? <span>{props.title}</span>:""}
        {props.customToggle? props.customToggle():""}        
      </a>
    </Dropdown>
  );
}

export default DropdownMenu;
