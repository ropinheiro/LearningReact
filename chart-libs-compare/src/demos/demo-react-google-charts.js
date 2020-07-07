import React from 'react'

import ChartsGrid from './charts-grid'

// ============================================================================
// COPY THIS FILE TO ADD A NEW LIBRARY
// ============================================================================

export default function DemoReactGoogleCharts () {
  const demosList = [
    { key: 0, label: 'Line Chart', contents: <DemoLineChart /> },
    { key: 1, label: 'Stacked Area Chart', contents: <DemoStackedAreaChart /> },
    { key: 2, label: 'Pie Chart', contents: <DemoPieChart /> },
    { key: 3, label: 'Bullet Chart', contents: <DemoBulletChart /> },
    { key: 4, label: 'Gantt Chart', contents: <DemoGanttChart /> }
  ]

  return <ChartsGrid title='Some Charts Library Demo' demosList={demosList} />
}

// ============================================================================
// REMOVE THIS AT THE END
// ============================================================================

function DemoDefault () {
  return <p>TODO: chart here</p>
}

// ============================================================================
// Pie Chart
// ============================================================================

function DemoLineChart () {
  return <DemoDefault />
}

// ============================================================================
// Stacked Area Chart
// ============================================================================

function DemoStackedAreaChart () {
  return <DemoDefault />
}

// ============================================================================
// Pie Chart
// ============================================================================

function DemoPieChart () {
  return <DemoDefault />
}

// ============================================================================
// Bullet Chart
// ============================================================================

function DemoBulletChart () {
  return <DemoDefault />
}

// ============================================================================
// Gantt Chart
// ============================================================================

function DemoGanttChart () {
  return <DemoDefault />
}
