import Button from '../Button/Button'
import Input from '../Input/Input'
import s from './RegForm.module.scss'

const RegForm = () => {
  return (
    <div className={s.form}>
      <div className={s.title}>Регистрируйся, чтобы начать обучение</div>
      <div className={s.controls}>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Пароль' />
        <Input type='password' placeholder='Пароль еще раз' />
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
