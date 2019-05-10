import { useState, useEffect } from "react"

const useWindowSize = () => {
  const defaults = {
    height: typeof window !== `undefined` ? window.innerHeight : 900,
    width: typeof window !== `undefined` ? window.innerWidth : 900,
  }

  const [dimensions, setDimensions] = useState({
    windowHeight: defaults.height,
    windowWidth: defaults.width,
  })

  useEffect(() => {
    const handler = () =>
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      })

    window.addEventListener(`resize`, handler)
    return () => window.removeEventListener(`resize`, handler)
  }, [])

  return dimensions
}

export default useWindowSize
