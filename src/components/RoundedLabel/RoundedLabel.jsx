import s from './RoundedLabel.module.scss'

const RoundedLabel = ({ children }) => {
  return <span className={s.text}>{children}</span>
}

export default RoundedLabel
