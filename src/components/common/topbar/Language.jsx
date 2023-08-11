import React from "react";
import LanImg from "../../../assets/images/englishflag.png"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const items = [
  {
    label: <a href="#">English</a>,
    key: '0',
  },
  {
    label: <a href="#">Spanish</a>,
    key: '1',
  },
  {
    label: <a href="#">France</a>,
    key: '3',
  },
];

export default function Language(){
    return(
<Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
       
    <img src={LanImg} alt="LanImg" />
      
      <Space>
        EN
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    )
}