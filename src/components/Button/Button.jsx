import s from './Button.module.scss'
import cn from 'classnames/bind'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export const Button = ({ children, type, size, onClick }) => {
  const [isMouseDown, setMouseDown] = useState(false)
  const { scale } = useSpring({
    scale: isMouseDown ? 0.8 : 1,
    config: { duration: 50 },
  })
  return (
    <animated.button
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      className={cn(s.button, s[type], s[size])}
      onClick={onClick}
      style={{
        transform: scale.to((n) => `scale(${n})`),
      }}
    >
      {children}
    </animated.button>
  )
}

export default Button
