import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import s from './Header.module.scss'
import { ReactComponent as IconBasket } from '../../assets/icons/basket.svg'
import { ReactComponent as ImgArrow } from '../../assets/decor/arrow.svg'

const Header = () => {
  return (
    <div className={s.wrapper}>
      <a href='/' className={s.logo}>
        <Logo />
      </a>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <Menu />
        </ul>
      </nav>
      <div className={s.button}>
        <Button type='border' size='big'>
          <IconBasket /> В Банк заданий
        </Button>
        <span className={s.label}>
          <ImgArrow />
          <span className={s.label__text}>без регистрации</span>
        </span>
      </div>
    </div>
  )
}

export default Header
