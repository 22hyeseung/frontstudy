import React, { Component } from 'react'
import worldData from '../world'
import { geoMercator, geoPath } from 'd3-geo'

class WorldMap extends Component {
  render() {
    const projection = geoMercator()
    const pathGenerator = geoPath().projection(projection)
    const countries = worldData.features.map((d, i) => (
      <path key={'path' + i} d={pathGenerator(d)} className="countries" />
    ))
    return (
      <svg width={500} height={500}>
        {countries}
      </svg>
    )
  }
}

export default WorldMap
