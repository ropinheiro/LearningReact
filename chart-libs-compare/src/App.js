import React from 'react'
import SideMenu from './SideMenu'
import './App.css'

import DemoRecharts from './demos/demo-recharts'
import DemoReactGoogleCharts from './demos/demo-react-google-charts'
import DemoTemplate from './demos/demo-template'

// ============================================================================
// Configure here the demos to be shown.
// To add a new library, copy the DemoTemplate to a new file.
// ============================================================================
const demosList = [
  { key: 0, label: 'Google Charts', contents: <DemoReactGoogleCharts /> },
  { key: 1, label: 'Recharts', contents: <DemoRecharts /> },
  { key: 2, label: 'Demo #3', contents: <DemoTemplate /> }
]

function App () {
  return <SideMenu demosList={demosList} />
}

export default App
