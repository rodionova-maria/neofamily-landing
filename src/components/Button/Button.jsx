import s from './Button.module.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(s)

export const Button = ({ children, type, size, onClick }) => {
  return (
    <button className={cn('button', [type, size])} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
