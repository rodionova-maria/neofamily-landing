import Button from '../Button/Button'
import RoundedLabel from '../RoundedLabel/RoundedLabel'
import s from './LeadBlock.module.scss'
import { ReactComponent as ImgEducation } from '../../assets/education.svg'
import { ReactComponent as ImgVK } from '../../assets/social/vk_white.svg'

const LeadBlock = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.text}>
        <div className={s.label}>
          <RoundedLabel>Дерзай</RoundedLabel>
        </div>
        <h2 className={s.title}>Начни подготовку прямо сейчас!</h2>
        <div className={s.description}>
          Это бесплатно и точно тебе понравится.
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
      <div className={s.img}>
        <ImgEducation />
      </div>
    </section>
  )
}
export default LeadBlock
