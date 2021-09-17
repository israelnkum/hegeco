import React from 'react'
import { Card, Col, Row, Select, Tag, Typography } from 'antd'
import Widget from '../widget'
import Chart from '../finance/chart'
import PieChart from './pie-chart'
import PieChartDays from './pie-chart-days'
import Data from '../commons/data'
import DashboardCarousel from './dashboard-carousel'
function Dashboard () {
  const dataToDisplay = [
    [
      {
        key: '1',
        text: 'Battery',
        value: '73.1kW'
      },
      {
        key: '2',
        text: 'SOC',
        value: '52.52%'
      },
      {
        key: '3',
        text: 'VDC',
        value: '0V'
      },
      {
        key: '4',
        text: 'Energy Avail',
        value: '479.9430147 kWh'
      }
    ],
    [
      {
        key: 'pv1',
        text: 'PV',
        value: '73.1kW'
      },
      {
        key: 'pv2',
        text: 'SOC',
        value: '52.52%'
      },
      {
        key: 'pv3',
        text: 'VDC',
        value: '0V'
      },
      {
        key: 'pv4',
        text: 'Energy Avail',
        value: '479.9430147 kWh'
      }
    ]
  ]

  return (
      <div className={'dashboard'}>
        <Row gutter={[25, 25]} style={{ marginBottom: 10 }}>
          <Col span={24} sm={24} xs={24} lg={24} xl={24} xxl={24}>
            <div align={'center'}>
              <Typography.Title level={3}>
                <span style={{ fontWeight: 'normal' }}>Blue Nova iESS</span> - Hegeco
              </Typography.Title>
            </div>
            <Typography.Text>
              Dashboard
            </Typography.Text>
          </Col>
        </Row>
        <Row gutter={[15, 15]}>
          <Col span={6} sm={24} xs={24} lg={6} xl={6} xxl={6}>
            <Card title={'Today'} className={'today'} size={'small'}>
              <Select className={'today-select'} defaultValue={'This Month'} bordered={false}>
                <Select.Option value="This Month">Select Fields</Select.Option>
                <Select.Option value="Jan">Jan</Select.Option>
                <Select.Option value="Feb">Feb</Select.Option>
                <Select.Option value="March">March</Select.Option>
              </Select>
              <Data dataToDisplay={dataToDisplay}/>
            </Card>
          </Col>
          <Col span={18} sm={24} xs={24} lg={18} xl={18} xxl={18}>
            <Row gutter={[15, 20]} >
              <Col span={24} sm={24} xs={24} lg={24} xl={24} xxl={24}>
                <DashboardCarousel/>
              </Col>
              <Col span={24} sm={24} xs={24} lg={24} xl={24} xxl={24}>
                <Chart/>
              </Col>
            </Row>
          </Col>
        </Row> <br/>
        <Row gutter={[15, 15]}>
          <Col span={9} xs={24} sm={9}>
            <PieChartDays/>
          </Col>
          <Col span={15} xs={24} sm={15}>
            <PieChart/>
          </Col>
        </Row>
      </div>
  )
}
export default Dashboard
