import s from './input.module.scss'

const Input = (props) => {
  return <input {...props} className={s.input_text} />
}

export default Input
