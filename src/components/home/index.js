import React from 'react'
import HomeCarousel from './home-carousel'
import { Col, Row, Select, Typography } from 'antd'
import Information from './information'
import Charts from './charts'

function Home () {
  return (
        <>
            <Row gutter={[25, 25]} justify={'center'} style={{ marginBottom: 10 }}>
                <Col span={20} sm={18} xs={24} lg={18} xl={20} xxl={20}>
                    <Typography.Title level={4}>
                        <span style={{ fontWeight: 'normal' }}>Blue Nova iESS</span> - Hegeco
                    </Typography.Title>
                </Col>
                <Col span={4} sm={6} xs={12} lg={6} xl={4} xxl={4}>
                    <Select className={'dashboard-select'} defaultValue={'Today'} bordered={false}>
                        <Select.Option value="Today">Today</Select.Option>
                        <Select.Option value="Jan">Jan</Select.Option>
                        <Select.Option value="Feb">Feb</Select.Option>
                        <Select.Option value="March">March</Select.Option>
                    </Select>
                </Col>
            </Row>
            <Row gutter={[10, 10]} justify={'center'}>
                <Col span={22}>
                    <HomeCarousel/>
                </Col>
                <Col span={23}>
                    <Information/>
                </Col>
                <Col span={23}>
                    <Charts/>
                </Col>
            </Row>
        </>
  )
}
export default Home
