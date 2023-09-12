import s from './App.module.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LeadBlock from '../LeadBlock/LeadBlock'
import FormBlock from '../FormBlock/FormBlock'
import Subjects from '../Subjects/Subjects'
import InfoBlock from '../InfoBlock/InfoBlock'

const sectionsData = [
  {
    title: 'Умные справочники',
    description:
      'Вся нужная теория по темам ЕГЭ — на понятном языке и с дизайнерскими иллюстрациями. Идеально, чтобы создать фундамент знаний по предмету.',
    img: './guides.png',
  },
  {
    title: 'Умное повторение',
    description:
      'Система интервального повторения, которая позволит тебе запоминать миллиарды терминов/правил без особых усилий. Основана на новейших исследованиях памяти.',
    img: './repeat.png',
  },
  {
    title: 'Варианты и тесты',
    description:
      'Наша платформа имеет 4 способа генерации тестов – это покрывает любые сценарии создания вариантов как лично учеником, так и преподавателем. Наш интерфейс безумно удобен и дружелюбен.',
    img: './tests.png',
  },
]

const sections = sectionsData.map((data, index) => (
  <InfoBlock
    id={`section-${index}`}
    key={index}
    title={data.title}
    description={data.description}
    img={data.img}
    direction={index % 2 === 1}
  />
))

function App() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.container}>
          <Header />
        </div>
      </header>

      <main className={s.main}>
        <div className={s.container}>
          <div className={s.blocks}>
            <FormBlock />
            <Subjects />
            {sections}
            <LeadBlock />
          </div>
        </div>
      </main>

      <footer className={s.footer}>
        <div className={s.container}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
