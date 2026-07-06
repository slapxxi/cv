import profileImage from '~/assets/me.jpg'
import { useTranslation } from 'react-i18next'
import config from './config'

const App = () => {
  const { t } = useTranslation()

  const skills = t('skillsList', { returnObjects: true }) as string[]
  const languages = t('languagesList', { returnObjects: true }) as string[]
  const experience = t('experienceList', { returnObjects: true }) as {
    title: string
    at: string
    duration: string
    location: string
    description: string
  }[]

  return (
    <div
      className="grid min-h-screen 
      grid-cols-[[aside]1fr_[main]auto[main-end]_1fr[aside-end]] gap-2 
      md:grid-cols-[[aside]1fr_minmax(auto,480px)[aside-end_main]minmax(auto,960px)_1fr[main-end]]"
    >
      <aside
        className="col-[aside] grid auto-rows-min grid-cols-subgrid self-start overflow-y-auto 
        bg-linear-to-b  
        bg-[url('~/assets/pattern.svg'),linear-gradient(to_bottom,var(--color-blue-950),var(--color-blue-900))]
        from-blue-950 to-blue-900 bg-size-[10px] text-white 
        md:sticky md:top-0 md:h-screen"
      >
        <div className="col-2 grid gap-y-8 p-4">
          <img
            src={profileImage}
            alt=""
            className="mx-auto aspect-square size-24 self-center justify-self-center rounded-full border-4 object-cover md:size-40"
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
          <header className="grid gap-2 bg-gray-300 p-7 text-center">
            <h1 className="title text-fluid-5xl text-gray-800">{t('name')}</h1>
            <hr className="mx-auto w-full max-w-prose border border-slate-900/20" />
            <h2 className="text-fluid-3xl text-gray-600 uppercase">
              {t('position')}
            </h2>
          </header>

          {/* summary */}
          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-blue-900">
              {t('summary')}
            </h2>
            <p className="cv-text">{t('summaryValue')}</p>
          </section>

          {/* experience */}
          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-blue-900">
              {t('experience')}
            </h2>

            {experience.map((experience) => (
              <article key={experience.title} className="grid grid-cols-2">
                <h3 className="cv-subtitle text-slate-950">
                  {experience.title}
                </h3>
                <h4 className="text-slate-950">{experience.at}</h4>
                <div className="col-2 row-1 justify-self-end text-fluid-base font-semibold text-blue-900">
                  {experience.duration}
                </div>
                <div className="justify-self-end text-fluid-base font-semibold text-blue-900">
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
