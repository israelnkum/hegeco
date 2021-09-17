import React, { useState } from 'react'
import { Menu, Layout } from 'antd'
import { AppstoreFilled, DollarCircleFilled, HomeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const AppSideBar = () => {
  const [collapsed, setCollapsed] = useState(false)

  function onCollapse () {
    setCollapsed(!collapsed)
  }

  return (
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" >
                HEGECO
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" className={'home-menu-item'} icon={<HomeFilled className={'menu-icon home-menu-icon'}/>}>
                    <Link to={'/'}>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item className={'dashboard-menu-item'} key="2" icon={<AppstoreFilled className={'menu-icon dashboard-menu-icon'}/>}>
                    <Link to={'/dashboard'}>
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" className={'finance-menu-item'} icon={<DollarCircleFilled className={'menu-icon finance-menu-icon'}/>}>
                    <Link to={'/finance'}>
                        Finance
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
  )
}

export default AppSideBar
