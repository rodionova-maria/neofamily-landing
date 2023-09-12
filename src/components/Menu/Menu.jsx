import { scrollToSection } from '../../utils'
import s from './Menu.module.scss'

const Menu = () => {
  return (
    <>
      <li>
        <a
          className={s.link}
          href='#subjects'
          onClick={(e) => scrollToSection('subjects', e)}
        >
          Предметы
        </a>
      </li>
      <li>
        <a
          className={s.link}
          href='#section-0'
          onClick={(e) => scrollToSection('section-0', e)}
        >
          Теория
        </a>
      </li>
      <li>
        <a
          className={s.link}
          href='#section-1'
          onClick={(e) => scrollToSection('section-1', e)}
        >
          Повторение
        </a>
      </li>
      <li>
        <a
          className={s.link}
          href='#section-2'
          onClick={(e) => scrollToSection('section-2', e)}
        >
          Тесты
        </a>
      </li>
    </>
  )
}
export default Menu
