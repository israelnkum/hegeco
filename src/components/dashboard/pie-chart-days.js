import React, { useEffect, useState } from 'react'
import { Card, Select, Spin } from 'antd'
/* Imports */
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesKelly from '@amcharts/amcharts4/themes/kelly'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'

/* Chart code */
// Themes begin
am4core.useTheme(am4themesKelly)
am4core.useTheme(am4themesAnimated)
const createPieChart1 = () => {
  return new Promise((resolve, reject) => {
    // Create chart instance
    const chart = am4core.create('pie-chart-div-days', am4charts.PieChart)
    chart.legend = new am4charts.Legend()

    const markerTemplate = chart.legend.markers.template
    markerTemplate.width = 10
    markerTemplate.height = 10

    const marker = chart.legend.markers.template.children.getIndex(0)
    marker.cornerRadius(0, 0, 0, 0)

    // Add data
    chart.data = [
      { sector: 'Load', size: 65 },
      { sector: 'Utility/Grid', size: 35 }
    ]

    // Add label
    chart.innerRadius = 100
    const label = chart.seriesContainer.createChild(am4core.Label)
    label.text = '365days'
    label.horizontalCenter = 'middle'
    label.verticalCenter = 'middle'
    label.fontSize = 46
    // label.('rgba(168, 168, 168, 0.85)')
    label.fontWeight = 'bold'
    chart.legend.valueLabels.template.disabled = true
    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries())
    pieSeries.dataFields.value = 'size'
    pieSeries.dataFields.category = 'sector'
    pieSeries.labels.template.disabled = true
    pieSeries.ticks.template.disabled = true
    resolve()
  }).catch((err) => {
    console.log(err)
  })
}

function PieChartDays () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    createPieChart1().then(() => {
      setLoading(false)
    })
  }, [])
  return (
        <Spin spinning={loading}>
            <Card style={{ borderRadius: 20 }}>
                <div align={'center'}>
                    <Select className={'dashboard-select'} defaultValue={'This Year'} bordered={false}>
                        <Select.Option value="This Year">This Year</Select.Option>
                        <Select.Option value="2020">2020</Select.Option>
                        <Select.Option value="2019">2019</Select.Option>
                        <Select.Option value="2018">2018</Select.Option>
                    </Select>
                </div>
                <div id={'pie-chart-div-days'} style={{ height: 400 }}/>
            </Card>
        </Spin>
  )
}

export default PieChartDays
