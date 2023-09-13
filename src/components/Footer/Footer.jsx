import { scrollToSection } from '../../utils'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import s from './Footer.module.scss'
import { ReactComponent as IconEmail } from '../../assets/icons/email.svg'
import { ReactComponent as IconPhone } from '../../assets/icons/phone.svg'
import { ReactComponent as IconUp } from '../../assets/icons/up.svg'
import { ReactComponent as Youtube } from '../../assets/social/youtube.svg'
import { ReactComponent as VK } from '../../assets/social/vk.svg'
import { ReactComponent as Telegram } from '../../assets/social/telegram.svg'

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <div className={s.logo}>
          <a href='/'>
            <Logo />
          </a>
        </div>
        <div className={s.social}>
          <a className={s.social__link} href='#link'>
            <Youtube />
          </a>
          <a className={s.social__link} href='#link'>
            <VK />
          </a>
          <a className={s.social__link} href='#link'>
            <Telegram />
          </a>
        </div>
        <div className={s.top__button}>
          <Button
            size='big'
            type='border'
            onClick={() => scrollToSection('root')}
          >
            <IconUp /> Наверх
          </Button>
        </div>
      </div>
      <hr className={s.line_top} />
      <div className={s.middle}>
        <div className={s.left}>
          <div className={s.title}>Выслушаем и поможем 😉✌</div>
          <div className={s.contacts}>
            <div className={s.contact}>
              <span className={s.contact__icon}>
                <IconPhone />
              </span>
              <span className={s.contact__text}>
                <a href='tel:+79527228733' className={s.contact__link}>
                  +7 (952) 722-87-33
                </a>
              </span>
            </div>
            <div className={s.contact}>
              <span className={s.contact__icon}>
                <IconEmail />
              </span>
              <span className={s.contact__text}>
                <a
                  href='mailto:school@neofamily.ru'
                  className={s.contact__link}
                >
                  school@neofamily.ru
                </a>
              </span>
            </div>
          </div>
          <address className={s.address}>
            197101, г. Санкт-Петербург, вн.тер.г. муниципальный округ Посадский,
            ул. Рентгена, д. 9Б, помещ. 1-Н, офис 9
          </address>
          <div className={s.cert}>
            <div className={s.cert__item}>
              <img
                src='./license.png'
                alt='Государственная лицензия'
                className='cert__img'
              />
              Государственная лицензия
            </div>
            <div className={s.cert__item}>
              <img
                src='./skolkovo.png'
                alt='Участник Skolkovo'
                className='cert__img'
              />
              Участник Skolkovo
            </div>
          </div>
        </div>
        <div className={s.right}>
          <nav className={s.nav}>
            <div>
              <div className={s.title}>NeoFamily - умная подготовка к ЕГЭ</div>
              <ul className={s.nav__list}>
                <Menu />
              </ul>
            </div>
            <div>
              <div className={s.title}> Проекты</div>
              <ul className={s.nav__list}>
                <li>
                  <a href='#link' className={s.nav__link}>
                    NeoFamily
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className={s.links}>
            <a href='#link' className={s.links__item}>
              Политика конфиденциальности
            </a>
            <a href='#link' className={s.links__item}>
              Оферта
            </a>
          </div>
          <div className={s.links}>
            <a href='#link' className={s.links__item}>
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
      <hr className={s.line_bottom} />
      <ul className={s.copyright}>
        <li>© ООО “НЕОФЭМИЛИ”</li>
        <li>ИНН: 7813660849</li>
        <li>КПП: 781301001</li>
        <li>ОГРН: 1227800019105</li>
      </ul>
    </div>
  )
}

export default Footer
