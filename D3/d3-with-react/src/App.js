import React, { Component } from 'react'
import './App.css'
import BarChart from './components/BarChart'
import WorldMap from './components/WorldMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">D3 Charts</h1>
        </header>
        <section className="App-section">
          <h2 className="App-chart-name">Bar Chart</h2>
          <BarChart
            data={[5, 10, 1, 3, 6, 9, 7, 2, 10, 8, 5]}
            size={[250, 340]}
          />
        </section>
        <section className="App-section">
          <h2 className="App-chart-name">World Map</h2>
          <WorldMap />
        </section>
      </div>
    )
  }
}

export default App
