import { useEffect, useState } from 'react'
import s from './RoundedLabel.module.scss'
import { animated, useSpring } from 'react-spring'

const RoundedLabel = ({ children }) => {
  const [isRotating, setIsRotating] = useState(true)

  const rotateAnimation = useSpring({
    transform: isRotating
      ? 'rotate(13deg) translateX(-100%) translateY(100%)'
      : 'rotate(12deg) translateX(-100%) translateY(100%)',
    config: { tension: 170, friction: 12 },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating((prev) => !prev)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <animated.span
      className={s.text}
      style={{ ...rotateAnimation, transformOrigin: 'center center' }}
    >
      {children}
    </animated.span>
  )
}

export default RoundedLabel
