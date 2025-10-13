
import { useEffect, useState } from 'react'

export default function useMouseParallax(factor = 0.02) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth, h = window.innerHeight
      const x = (e.clientX - w/2) * factor
      const y = (e.clientY - h/2) * factor
      setPos({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [factor])
  return pos
}

