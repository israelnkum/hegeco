import React from 'react'
import { Table, Typography, Card, Avatar } from 'antd'

const { Column } = Table

const data = [
  {
    key: '1',
    item: 'OP',
    charge: 214.69,
    discharge: 0,
    rate: 0.5,
    amount: 10.34,
    color: 'rgb(178, 216, 230)'
  },
  {
    key: '2',
    item: 'SP',
    charge: 0,
    discharge: 0,
    rate: 1.1,
    amount: 0,
    color: 'rgb(181, 229, 126)'
  },
  {
    key: '3',
    item: 'PP',
    charge: 0.01,
    discharge: 403.89,
    rate: 2.2,
    amount: -888.53,
    color: 'rgb(248, 179, 62)'
  }
]
export default function Statistics () {
  return (
      <Card style={{ height: 450, borderRadius: 20 }}>
          <Table dataSource={data} pagination={false} scroll={{ x: 50 }}>
              <Column
                  title="Item"
                  key="item"
                  render={(text, record) => (
                      <Typography.Text>
                          <Avatar size={'small'} style={{ background: record.color }}/>
                          &nbsp;
                          {record.item}
                      </Typography.Text>
                  )}
              />
              <Column title="Charge" dataIndex="charge" key="charge" />
              <Column title="Discharge" dataIndex="discharge" key="discharge"/>
              <Column title="Rate" key="rate" dataIndex={'rate'}/>
              <Column
                  title="Amount"
                  key="amount"
                  render={(text, record) => (
                      <Typography.Text style={{ color: 'rgb(248, 179, 62)' }}>{record.amount}</Typography.Text>
                  )}
              />
          </Table>
      </Card>

  )
}
