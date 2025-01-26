"use client";
import React, { useState } from 'react';
import {
    DashboardFilled,
    DashboardTwoTone,
    DashOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import Event from './event/page';
import { User2Icon } from 'lucide-react';



export default function  AdminLayout({ children }) {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  return (
    <html lang="en">
      <body>

  
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardFilled />,
              label: <Link href="/admin/dasboard">DASHBOARD</Link>,
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label:<Link href="/admin/user">USER</Link>,
            },
            {
              key: '3',
              icon: <UserAddOutlined />,
              label: <Link href="/admin/event">EVENT</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            {children}

        </Content>
      </Layout>
    </Layout>
  

     </body>
      </html>
    
  );
}
