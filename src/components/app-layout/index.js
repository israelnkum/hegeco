import React from 'react'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'
import '../../App.css'
import { Layout } from 'antd'

import AppSideBar from './app-side-bar'
import MobileNav from './mobile-nav'

function AppLayout (props) {
  return (
        <Layout>
            { !isMobile && <AppSideBar/> }
            <Layout className="site-layout">
                <div style={{
                  margin: '24px 16px',
                  // padding: ,
                  minHeight: '100vh'
                }}>
                    {props.children}
                </div>
            </Layout>
            { isMobile && <MobileNav/> }
        </Layout>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}
export default AppLayout
