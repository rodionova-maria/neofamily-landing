import { scrollToSection } from '../../utils'
import Button from '../Button/Button'
import s from './InfoBlock.module.scss'

import classNames from 'classnames/bind'

const cn = classNames.bind(s)

const InfoBlock = ({ title, description, img, direction, id }) => {
  return (
    <section
      id={id}
      className={cn('wrapper', { direction_reverse: direction })}
    >
      <div className={s.text}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.description}>{description}</div>
        <div className={s.button}>
          <Button
            size='big'
            type='primary'
            onClick={() => scrollToSection('registration')}
          >
            Зарегистрироваться бесплатно
          </Button>
        </div>
      </div>
      <div className={s.img}>
        <img src={img} alt={title} />
      </div>
    </section>
  )
}
export default InfoBlock
