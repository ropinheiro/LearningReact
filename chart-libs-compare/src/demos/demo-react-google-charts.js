import React from 'react'

import ChartsGrid from './charts-grid'

import { Chart } from 'react-google-charts'

// ============================================================================
// COPY THIS FILE TO ADD A NEW LIBRARY
// ============================================================================

export default function DemoReactGoogleCharts () {
  const demosList = [
    { key: 0, label: 'Line Chart', contents: <DemoLineChart /> },
    { key: 1, label: 'Stacked Area Chart', contents: <DemoStackedAreaChart /> },
    { key: 2, label: 'Pie Chart', contents: <DemoPieChart /> },
    {
      key: 3,
      label: 'Bullet Chart (almost... using BarFormat)',
      contents: <DemoBulletChart />
    },
    { key: 4, label: 'Gantt Chart', contents: <DemoGanttChart /> }
  ]

  return <ChartsGrid title='React Google Charts Demo' demosList={demosList} />
}

// ============================================================================
// REMOVE THIS AT THE END
// ============================================================================

// ============================================================================
// Pie Chart
// ============================================================================

function DemoLineChart () {
  return (
    <Chart
      width={'450px'}
      height={'300px'}
      chartType='LineChart'
      loader={<div>Loading Chart</div>}
      data={[
        ['x', 'dogs', 'cats'],
        [0, 0, 0],
        [1, 10, 5],
        [2, 23, 15],
        [3, 17, 9],
        [4, 18, 10],
        [5, 9, 5],
        [6, 11, 3],
        [7, 27, 19]
      ]}
      options={{
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: { curveType: 'function' }
        }
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  )
}

// ============================================================================
// Stacked Area Chart
// ============================================================================

function DemoStackedAreaChart () {
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType='AreaChart'
      loader={<div>Loading Chart</div>}
      data={[
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]
      ]}
      options={{
        isStacked: true,
        height: 300,
        legend: { position: 'top', maxLines: 3 },
        vAxis: { minValue: 0 }
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  )
}

// ============================================================================
// Pie Chart
// ============================================================================

function DemoPieChart () {
  return (
    <Chart
      width={'450px'}
      height={'300px'}
      chartType='PieChart'
      loader={<div>Loading Chart</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ]}
      options={{
        title: 'My Daily Activities'
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}

// ============================================================================
// Bullet Chart
// ============================================================================

function DemoBulletChart () {
  return (
    <Chart
      width={'450px'}
      height={'300px'}
      chartType='Table'
      loader={<div>Loading Chart</div>}
      data={[
        ['Department', 'Revenues Change'],
        ['Shoes', 10700],
        ['Sports', -15400],
        ['Toys', 12500],
        ['Electronics', -2100],
        ['Food', 22600],
        ['Art', 1100]
      ]}
      formatters={[
        {
          type: 'BarFormat',
          column: 1,
          options: {
            width: 120
          }
        }
      ]}
      options={{
        allowHtml: true,
        showRowNumber: true,
        width: '100%',
        height: '100%'
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  )
}

// ============================================================================
// Gantt Chart
// ============================================================================

function DemoGanttChart () {
  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType='Gantt'
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'string', label: 'Task ID' },
          { type: 'string', label: 'Task Name' },
          { type: 'string', label: 'Resource' },
          { type: 'date', label: 'Start Date' },
          { type: 'date', label: 'End Date' },
          { type: 'number', label: 'Duration' },
          { type: 'number', label: 'Percent Complete' },
          { type: 'string', label: 'Dependencies' }
        ],
        [
          'Research',
          'Find sources',
          null,
          new Date(2015, 1, 1),
          new Date(2015, 1, 5),
          null,
          100,
          null
        ],
        [
          'Write',
          'Write paper',
          'write',
          null,
          new Date(2015, 1, 9),
          3 * 24 * 60 * 60 * 1000,
          25,
          'Research,Outline'
        ],
        [
          'Cite',
          'Create bibliography',
          'write',
          null,
          new Date(2015, 1, 7),
          1 * 24 * 60 * 60 * 1000,
          20,
          'Research'
        ],
        [
          'Complete',
          'Hand in paper',
          'complete',
          null,
          new Date(2015, 1, 10),
          1 * 24 * 60 * 60 * 1000,
          0,
          'Cite,Write'
        ],
        [
          'Outline',
          'Outline paper',
          'write',
          null,
          new Date(2015, 1, 6),
          1 * 24 * 60 * 60 * 1000,
          100,
          'Research'
        ]
      ]}
      options={{
        gantt: {
          criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
          arrow: {
            angle: 100,
            width: 5,
            color: 'green',
            radius: 0
          }
        }
      }}
      rootProps={{ 'data-testid': '6' }}
    />
  )
}
