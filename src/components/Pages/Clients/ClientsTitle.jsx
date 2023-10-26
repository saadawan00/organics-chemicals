import React from 'react'
import { useTrail, a } from '@react-spring/web'

import './ClientsTitleStyle.css'

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 400 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="clients-title-trailsText" style={style}>
          <a.div style={{ height, color: "#1c63b8" }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function App() {

  return (
    <div className="clients-title-container">
      <Trail open>
        <span>Clients</span>
        <span>We</span>
        <span>Serve</span>
      </Trail>
    </div>
  )
}
