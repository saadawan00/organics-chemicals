import React, { useEffect, useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

import './ClientsStyles.css'

export default function App() {
  const [open, set] = useState(true)
  const [images, setImages] = useState([])

useEffect(()=>{
    const imageContext = require.context("./../../../images/client-logo/", false, /\.(png|jpe?g|svg)$/);

const images = imageContext.keys().map((imagePath) => {
  return {
    image: imageContext(imagePath),
  };
});

setImages(images)
},[])

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink',
    },
  })


  const transApi = useSpringRef()
  const transition = useTransition(open ? images : [], {
    ref: transApi,
    trail: 400 / images.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div className="clients-wrapper">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className="clients-container">
        {transition((style, item) => (
          <animated.div
            className="springItem"
            
            style={{ ...style, backgroundImage: `url(${item.image})` }}
          />
        ))}
      </animated.div>
    </div>
  )
}
