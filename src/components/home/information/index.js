import React from 'react'
import { Card, Col, Row } from 'antd'
import Widget from '../../widget'
import Data from '../../commons/data'

function Information () {
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
    ], [
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
        <div className={'information'}>
            <Row justify={'center'}>
                <Col span={18} sm={18} xs={24}>
                    <div style={{ padding: 50 }}>
                     </div>
                </Col>
                <Col span={6} sm={6} xs={24}>
                    <Widget height={500} title={'Information'} type={'information-dark'}>
                        <Data dataToDisplay={dataToDisplay}/>
                    </Widget>
                </Col>
            </Row>
        </div>

  )
}
export default Information
