import React from 'react'
import { Space } from 'antd'
import { AppstoreFilled, DollarCircleFilled, HomeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function MobileNav () {
  return (
      <div className={'mobile-nav'}>
          <Space>
              <Link to={'/'}>
                  <HomeFilled className={'menu-icon home-menu-icon'}/>
              </Link>
              <Link to={'/dashboard'}>
                  <AppstoreFilled className={'menu-icon dashboard-menu-icon'}/>
              </Link>
              <Link to={'/finance'}>
                  <DollarCircleFilled className={'menu-icon finance-menu-icon'}/>
              </Link>
          </Space>
      </div>
  )
}
export default MobileNav
