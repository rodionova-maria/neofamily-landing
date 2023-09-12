import s from './Subjects.module.scss'

const Subjects = () => {
  return (
    <section className={s.subjects} id='subjects'>
      <div className={s.list}>
        <a href='#link'>Биология</a>
        <a href='#link'>Химия</a>
        <a href='#link'>Русский язык</a>
        <a href='#link'>Профильная математика</a>
        <a href='#link'>Обществознание</a>
        <a href='#link'>История</a>
        <a href='#link'>Физика</a>
        <a href='#link'>Литература</a>
        <a href='#link'>Информатика</a>
        <a href='#link'>Английский язык</a>
        <a href='#link'>География</a>
        <a href='#link'>Базовая математика</a>
      </div>
      <div className={s.text}>
        <h2 className={s.title}>Банк заданий по всем предметам</h2>
        <div className={s.description}>
          Десятки тысяч качественных заданий по твоим предметам. Формата
          ЕГЭ-2024, уровня сложности экзамена и выше, с ответами и пояснениями.
          Можно фильтровать по темам, линиям или использовать поиск!
        </div>
        <div className={s.slogan}>
          Выбирай предмет и переходи в Банк заданий прямо сейчас!
          <img src='./spring2.svg' alt='' className={s.spring} />
        </div>
      </div>
    </section>
  )
}
export default Subjects
