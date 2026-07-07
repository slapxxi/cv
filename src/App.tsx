import { useTranslation } from 'react-i18next'
import LightThemeIcon from '~/assets/light-theme-icon.svg?react'
import DarkThemeIcon from '~/assets/dark-theme-icon.svg?react'
import profileImage from '~/assets/me.jpg'
import { useTheme } from '~/hooks'
import config from './config'

const App = () => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()

  const skills = t('skillsList', { returnObjects: true }) as string[]
  const languages = t('languagesList', { returnObjects: true }) as string[]
  const experience = t('experienceList', { returnObjects: true }) as {
    title: string
    at: string
    duration: string
    location: string
    description: string
  }[]

  const onChangeLanguage = (e: React.ChangeEvent<HTMLFormElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  const onChangeTheme = (e: React.ChangeEvent<HTMLFormElement>) => {
    setTheme(e.target.value)
  }

  return (
    <div
      className="grid min-h-screen 
      grid-cols-[[aside]1fr_[main]auto[main-end]_1fr[aside-end]] gap-2
      md:grid-cols-[[aside]1fr_minmax(auto,480px)[aside-end_main]minmax(auto,960px)_1fr[main-end]] dark:bg-zinc-950 
      dark:text-white"
      data-theme={theme}
    >
      <aside
        className="col-[aside] grid auto-rows-min grid-cols-subgrid self-start overflow-y-auto bg-linear-to-b  
        bg-[url('~/assets/pattern.svg'),linear-gradient(to_bottom,var(--color-pink-950),var(--color-pink-900))]
        from-pink-950 to-pink-900 bg-size-[19%] text-white 
        md:sticky md:top-0 md:h-screen"
      >
        <div className="col-2 grid gap-y-8 p-4">
          <form
            onChange={onChangeLanguage}
            className="col-1 row-1 grid grid-cols-[1fr_1px_1fr] self-center justify-self-start
            overflow-hidden rounded border border-white/20 p-0 text-fluid-base text-white/40"
          >
            <label
              htmlFor="ru"
              className="inline-grid place-items-center p-2 backdrop-blur-xs
              data-[active='true']:bg-white/10 data-[active='true']:text-white"
              data-active={i18n.language === 'ru'}
            >
              <span className="text-fluid-base">RU</span>
              <input
                type="radio"
                value="ru"
                name="lang"
                id="ru"
                className="hidden"
                defaultChecked={i18n.language === 'ru'}
              />
            </label>

            <hr className="h-full bg-white/20 text-transparent" />

            <label
              htmlFor="en"
              className="inline-grid place-items-center backdrop-blur-xs p-2 data-[active='true']:bg-white/10 data-[active='true']:text-white"
              data-active={i18n.language === 'en'}
            >
              <span className="text-fluid-base">EN</span>
              <input
                type="radio"
                value="en"
                name="lang"
                id="en"
                className="hidden"
                defaultChecked={i18n.language === 'en'}
              />
            </label>
          </form>

          <form
            onChange={onChangeTheme}
            className="col-1 row-1 grid grid-cols-[1fr_1px_1fr] self-center justify-self-end
            overflow-hidden rounded border border-white/20 p-0 text-fluid-base text-white/40"
          >
            <label
              htmlFor="dark"
              className="inline-grid place-items-center p-2 backdrop-blur-xs 
              data-[active='true']:bg-white/10 data-[active='true']:text-white"
              data-active={theme === 'dark'}
            >
              <span title="Dark Theme">
                <DarkThemeIcon className="size-4" />
              </span>
              <input
                type="radio"
                value="dark"
                name="theme"
                id="dark"
                className="hidden"
                defaultChecked={theme === 'dark'}
              />
            </label>

            <hr className="h-full bg-white/20 text-transparent" />

            <label
              htmlFor="light"
              className="inline-grid place-items-center p-2 backdrop-blur-xs
              data-[active='true']:bg-white/10 data-[active='true']:text-white"
              data-active={theme === 'light'}
            >
              <span title="Light Theme">
                <LightThemeIcon className="size-5" />
              </span>
              <input
                type="radio"
                value="light"
                name="theme"
                id="light"
                className="hidden"
                defaultChecked={theme === 'light'}
              />
            </label>
          </form>

          <img
            src={profileImage}
            alt=""
            className="col-1 row-1 mx-auto aspect-square size-24 self-center justify-self-center rounded-full border-4 object-cover md:size-40"
          />

          <section className="cv-section justify-items-start">
            <h2 className="cv-title">{t('contact')}</h2>
            <ul className="grid gap-3">
              {config.contacts.map((contact) => (
                <li key={contact.name}>
                  <a
                    href={contact.href}
                    className="link flex items-center gap-2"
                  >
                    <contact.Icon className="size-5" />
                    <span>{contact.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="cv-section justify-items-start">
            <h2 className="cv-title text-fluid-3xl">{t('skills')}</h2>
            <ul className="grid gap-2 md:grid-cols-2">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="cv-section justify-items-start">
            <h2 className="cv-title text-fluid-3xl">{t('languages')}</h2>
            <ul className="grid gap-2">
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </section>

          <section className="cv-section justify-items-start">
            <h2 className="cv-title text-fluid-3xl">{t('education')}</h2>
            <p>{t('educationValue')}</p>
          </section>
        </div>
      </aside>

      <main className="col-[main] grid grid-cols-subgrid">
        <div className="col-1 grid auto-rows-min gap-y-8 p-4">
          {/* name */}
          <header className="grid gap-2 rounded bg-gray-300 p-7 text-center dark:bg-zinc-800">
            <h1 className="title text-fluid-5xl text-zinc-800 dark:text-zinc-200">
              {t('name')}
            </h1>
            <hr className="mx-auto w-full max-w-prose border border-slate-900/20 dark:border-zinc-700/50" />
            <h2 className="text-fluid-3xl text-gray-600 uppercase dark:text-zinc-400/80">
              {t('position')}
            </h2>
          </header>

          {/* summary */}
          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-pink-900 dark:text-pink-600">
              {t('summary')}
            </h2>
            <p className="cv-text">{t('summaryValue')}</p>
          </section>

          {/* experience */}
          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-pink-900 dark:text-pink-600">
              {t('experience')}
            </h2>

            {experience.map((experience) => (
              <article key={experience.title} className="grid grid-cols-2">
                <h3 className="cv-subtitle text-slate-950 dark:text-zinc-200">
                  {experience.title}
                </h3>
                <h4 className="text-slate-950 dark:text-zinc-300/80">
                  {experience.at}
                </h4>
                <div className="col-2 row-1 justify-self-end text-fluid-base font-semibold text-pink-900 dark:text-pink-600">
                  {experience.duration}
                </div>
                <div className="justify-self-end text-fluid-base font-semibold text-pink-900 dark:text-pink-600/90">
                  {experience.location}
                </div>
                <div
                  className="cv-content cv-text col-span-full my-4"
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                />
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
