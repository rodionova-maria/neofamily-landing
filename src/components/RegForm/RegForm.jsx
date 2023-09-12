import Button from '../Button/Button'
import s from './RegForm.module.scss'

const RegForm = () => {
  return (
    <div className={s.form}>
      <div className={s.title}>Регистрируйся, чтобы начать обучение</div>
      <div className={s.controls}>
        <input type='email' placeholder='Email' className={s.input_text} />
        <input type='password' placeholder='Пароль' className={s.input_text} />
        <input
          type='password'
          placeholder='Пароль еще раз'
          className={s.input_text}
        />
      </div>
      <Button size='big' type='primary'>
        Зарегистрироваться
      </Button>
      <div className={s.note}>
        Нажимая «Зарегистрироваться», вы выражаете
        <a href='#link'>согласие на обработку персональных данных</a>, а также
        подтверждаете ознакомление и согласие с условиями
        <a href='#link'>Оферты</a> и
        <a href='#link'>Политики конфиденциальности</a>.
      </div>
    </div>
  )
}

export default RegForm
