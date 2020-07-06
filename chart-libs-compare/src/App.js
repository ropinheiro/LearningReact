import React from 'react'
import SideMenu from './SideMenu'
import './App.css'

import DemoTemplate from './demos/demo-template'
import DemoRecharts from './demos/demo-recharts'

// ============================================================================
// Configure here the demos to be shown.
// To add a new library, copy the DemoTemplate to a new file.
// ============================================================================
const demosList = [
  { key: 0, label: 'Recharts', contents: <DemoRecharts /> },
  { key: 1, label: 'Demo #2', contents: <DemoTemplate /> },
  { key: 2, label: 'Demo #3', contents: <DemoTemplate /> }
]

function App () {
  return <SideMenu demosList={demosList} />
}

export default App
