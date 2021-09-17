import React from 'react'
import Widget from '../widget'
import { Col, Row, Select, Typography } from 'antd'
import Chart from './chart'
import Statistics from './statistics'
function Finance () {
  return (
        <div className={'finance'}>
            <Row gutter={[25, 25]} style={{ marginBottom: 10 }}>
                <Col span={20} sm={24} xs={24} lg={20} xl={20} xxl={20}>
                    <Typography.Title level={4}>
                        <span style={{ fontWeight: 'normal' }}>Blue Nova iESS</span> - Hegeco
                    </Typography.Title>
                    <Typography.Text>
                        Finance
                    </Typography.Text>
                </Col>
                <Col span={4} sm={24} xs={24} lg={4} xl={4} xxl={4}>
                    <Select className={'dashboard-select'} defaultValue={'This Month'} bordered={false}>
                        <Select.Option value="This Month">This Month</Select.Option>
                        <Select.Option value="Jan">Jan</Select.Option>
                        <Select.Option value="Feb">Feb</Select.Option>
                        <Select.Option value="March">March</Select.Option>
                    </Select>
                </Col>
            </Row>
            <Row gutter={[25, 25]} justify={'space-around'}>
                <Col span={8} sm={24} xs={24} lg={8} xl={8} xxl={8}>
                    <Widget title={'Total Charge'} >
                        <Typography.Title style={{ color: 'rgb(178, 216, 230)' }}>
                            13 566.44
                        </Typography.Title>
                    </Widget>
                </Col>
                <Col span={8} sm={24} xs={24} lg={8} xl={8} xxl={8}>
                    <Widget title={'Total Discharge'} type={'discharge'}>
                        <Typography.Title style={{ color: 'rgb(161, 229, 126)' }}>
                            11 602.45
                        </Typography.Title>
                    </Widget>
                </Col>
                <Col span={8} sm={24} xs={24} lg={8} xl={8} xxl={8}>
                    <Widget title={'Total Savings'} type={'savings'}>
                        <Typography.Title >
                            19 114.94
                        </Typography.Title>
                    </Widget>
                </Col>
                <Col span={12} sm={24} xs={24} lg={12} xl={12} xxl={12}>
                    <Chart/>
                </Col>
                <Col span={12} sm={24} xs={24} lg={12} xl={12} xxl={12}>
                    <Statistics/>
                </Col>
            </Row>
        </div>
  )
}

export default Finance
