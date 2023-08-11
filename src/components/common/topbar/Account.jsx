import React from "react";
import LanImg from "../../../assets/images/englishflag.png"
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const items = [
  {
    label: <a href="#">My account</a>,
    key: '0',
  },
  {
    label: <a href="#">Login</a>,
    key: '1',
  },
  {
    label: <a href="#">Register</a>,
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
       
    <UserOutlined />
      
      <Space>
        Login / Register
      </Space>
    </a>
  </Dropdown>
    )
}