import React from 'react'
import { Col, Row } from 'antd'
import PieChart1 from './pie-chart-1'
import PieChart2 from './pie-chart-2'
import PieChart3 from './pie-chart-3'
import PieChart4 from './pie-chart-4'
function Charts () {
  return (
      <Row justify={'center'} gutter={[15, 15]}>
          <Col span={12} sm={12} xs={24}>
              <PieChart1/>
          </Col>
          <Col span={12} sm={12} xs={24}>
              <PieChart2/>
          </Col>
          <Col span={12} sm={12} xs={24}>
              <PieChart3/>
          </Col>
          <Col span={12} sm={12} xs={24}>
              <PieChart4/>
          </Col>
      </Row>
  )
}
export default Charts
