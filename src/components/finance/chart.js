import React, { useEffect, useState } from 'react'
import { Card, Spin } from 'antd'
/* Imports */
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesKelly from '@amcharts/amcharts4/themes/kelly'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { reject } from 'eslint-plugin-promise/rules/lib/promise-statics'

const createChart = () => {
  return new Promise((resolve, reject) => {
    // Themes begin
    am4core.useTheme(am4themesKelly)
    am4core.useTheme(am4themesAnimated)
    // Themes end

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart)

    // Add data
    chart.data = [
      {
        date: '2012-03-01',
        price: 50,
        previousDate: '2012-03-01',
        price1: 70
      },
      {
        date: '2012-03-02',
        price: 75,
        previousDate: '2012-03-02',
        price1: 100
      }, {
        date: '2012-03-03',
        price: 15,
        previousDate: '2012-03-03',
        price1: 25
      }, {
        date: '2012-03-04',
        price: 75,
        previousDate: '2012-03-04',
        price1: 100
      }, {
        date: '2012-03-05',
        price: 158,
        previousDate: '2012-03-05',
        price1: 190
      }, {
        date: '2012-03-06',
        price: 57,
        previousDate: '2012-03-06',
        price1: 75
      }, {
        date: '2012-03-07',
        price: 107,
        previousDate: '2012-03-07',
        price1: 150
      }, {
        date: '2012-03-08',
        price: 89,
        previousDate: '2012-03-08',
        price1: 120
      }, {
        date: '2012-03-09',
        price: 75,
        previousDate: '2012-03-09',
        price1: 100
      }, {
        date: '2012-03-10',
        price: 132,
        previousDate: '2012-03-10',
        price1: 162
      }, {
        date: '2012-03-11',
        price: 380,
        previousDate: '2012-03-11',
        price1: 480
      }, {
        date: '2012-03-12',
        price: 56,
        previousDate: '2012-03-12',
        price1: 90
      }, {
        date: '2012-03-13',
        price: 169,
        previousDate: '2012-03-13',
        price1: 220
      }, {
        date: '2012-03-14',
        price: 24,
        previousDate: '2012-03-14',
        price1: 40
      }, {
        date: '2012-03-15',
        price: 147,
        previousDate: '2012-03-15',
        price1: 170
      }]

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0
    dateAxis.renderer.minGridDistance = 50

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.logarithmic = true
    valueAxis.renderer.minGridDistance = 20

    // Create series
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = 'price'
    series.dataFields.dateX = 'date'
    series.name = 'OP'
    series.tensionX = 0.8
    series.strokeWidth = 3

    const bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.circle.fill = am4core.color('#fff')
    bullet.circle.strokeWidth = 3

    // Create series
    const series1 = chart.series.push(new am4charts.LineSeries())
    series1.dataFields.valueY = 'price1'
    series1.dataFields.dateX = 'previousDate'
    series1.tensionX = 0.8
    series1.strokeWidth = 3
    series1.name = 'PP Charge'
    const bullet1 = series1.bullets.push(new am4charts.CircleBullet())
    bullet1.circle.fill = am4core.color('#fff')
    bullet1.circle.strokeWidth = 3
    // Add cursor
    chart.cursor = new am4charts.XYCursor()
    chart.cursor.fullWidthLineX = true
    chart.cursor.xAxis = dateAxis
    chart.cursor.lineX.strokeWidth = 0
    chart.cursor.lineX.fill = am4core.color('#000')
    chart.cursor.lineX.fillOpacity = 0.1

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar()

    // Add a guide
    const range = valueAxis.axisRanges.create()
    range.value = 90.4
    range.grid.stroke = am4core.color('#396478')
    range.grid.strokeWidth = 1
    range.grid.strokeOpacity = 1
    range.grid.strokeDasharray = '3,3'
    range.label.inside = true
    // range.label.text = 'Average'
    range.label.fill = range.grid.stroke
    range.label.verticalCenter = 'bottom'
    chart.legend = new am4charts.Legend()
    chart.legend.useDefaultMarker = true
    const marker = chart.legend.markers.template.children.getIndex(0)
    marker.strokeWidth = 2
    marker.strokeOpacity = 1
    marker.stroke = am4core.color('#ccc')
    const markerTemplate = chart.legend.markers.template
    markerTemplate.width = 40
    markerTemplate.height = 10

    resolve()
  })
}

function Chart () {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    createChart().then(() => {
      setLoading(false)
    })
  }, [])

  return (
      <Card style={{ borderRadius: 20 }}>
        <Spin spinning={loading}>
          <div id={'chartdiv'} style={{ height: 400 }}/>
        </Spin>
      </Card>
  )
}

export default Chart
