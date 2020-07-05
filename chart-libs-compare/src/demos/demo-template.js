import React from 'react'

import ChartsGrid from './charts-grid'

export default function DemoTemplate () {
  const demosList = [
    { key: 0, label: 'Line Chart', contents: <DemoLineChart /> },
    { key: 1, label: 'Stacked Area Chart', contents: <DemoStackedAreaChart /> },
    { key: 2, label: 'Pie Chart', contents: <DemoPieChart /> },
    { key: 3, label: 'Bullet Chart', contents: <DemoBulletChart /> },
    { key: 4, label: 'Gantt Chart', contents: <DemoGanttChart /> }
  ]

  return <ChartsGrid title='Some Charts Library Demo' demosList={demosList} />
}

function DemoDefault () {
  return <p>TODO: chart here</p>
}

function DemoLineChart () {
  return <DemoDefault />
}

function DemoStackedAreaChart () {
  return <DemoDefault />
}

function DemoPieChart () {
  return <DemoDefault />
}

function DemoBulletChart () {
  return <DemoDefault />
}

function DemoGanttChart () {
  return <DemoDefault />
}
