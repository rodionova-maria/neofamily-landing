import Button from '../Button/Button'
import RegForm from '../RegForm/RegForm'
import RoundedLabel from '../RoundedLabel/RoundedLabel'
import s from './FormBlock.module.scss'
import { ReactComponent as ImgPlus } from '../../assets/decor/plus.svg'
import { ReactComponent as ImgReg } from '../../assets/regblock.svg'
import { ReactComponent as ImgSpring } from '../../assets/decor/spring.svg'
import { ReactComponent as ImgVK } from '../../assets/social/vk_white.svg'

const FormBlock = () => {
  return (
    <section className={s.wrapper} id='registration'>
      <div className={s.text}>
        <div className={s.label}>
          <RoundedLabel>Попробуй</RoundedLabel>
        </div>
        <h1 className={s.title}>NeoFamily — умная подготовка к ЕГЭ</h1>
        <div className={s.description}>
          30 000 заданий по всем предметам ЕГЭ.
          <br />
          Бесплатная теория, тесты и умное повторение
          <ImgPlus className={s.plus} />
        </div>
        <div className={s.buttons}>
          <Button size='large' type='default'>
            <ImgVK /> Войти через VK ID
          </Button>
          <Button size='large' type='border'>
            Войти
          </Button>
        </div>
      </div>

      <div className={s.form}>
        <RegForm />
      </div>

      <div className={s.img}>
        <ImgReg />
      </div>

      <ImgSpring className={s.spring} />
    </section>
  )
}

export default FormBlock
