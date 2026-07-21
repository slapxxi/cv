import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Sidebar } from '~/components'
import { useTheme } from '~/hooks'

const App = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [contentEditingEnabled, setContentEditingEnabled] = useState(false)

  const experience = t('experienceList', { returnObjects: true }) as {
    title: string
    at: string
    duration: string
    location: string
    description: string
  }[]

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setContentEditingEnabled(false)
        return
      }
      if (e.key === 'Enter' && e.shiftKey) {
        setContentEditingEnabled(true)
        return
      }
    }

    window.addEventListener('keydown', handler)

    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [])

  return (
    <div
      className="group wrapper dark:bg-zinc-950 dark:text-white"
      data-theme={theme}
      contentEditable={contentEditingEnabled}
    >
      <Sidebar />

      <main className="col-[main] grid grid-cols-subgrid">
        <div className="col-1 grid auto-rows-min gap-y-8 p-4 print:gap-y-2">
          <header
            className="grid gap-2 rounded bg-gray-300 p-7 text-center 
            dark:bg-zinc-800 
              print:gap-0 print:bg-transparent print:p-0 print:text-left"
          >
            <h1 className="title text-fluid-5xl text-zinc-800 dark:text-zinc-200 print:text-3xl">
              {t('name')}
            </h1>
            <hr
              className="mx-auto w-full max-w-prose border 
            border-slate-900/20 dark:border-zinc-700/50 print:hidden"
            />
            <h2
              className="text-fluid-3xl text-gray-600 uppercase 
              dark:text-zinc-400/80 
              print:text-lg print:normal-case"
            >
              {t('position')}
            </h2>
          </header>

          {/* summary */}
          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-blue-900 dark:text-blue-600 print:text-lg">
              {t('summary')}
            </h2>
            <p className="cv-text">{t('summaryValue')}</p>
          </section>

          {/* experience */}
          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-blue-900 dark:text-blue-600">
              {t('experience')}
            </h2>

            {experience.map((experience) => (
              <article
                key={experience.title}
                className="grid break-inside-avoid grid-cols-2"
              >
                <h3 className="cv-subtitle text-slate-950 dark:text-zinc-200">
                  {experience.title}
                </h3>
                <h4 className="text-slate-950 dark:text-zinc-300/80">
                  {experience.at}
                </h4>
                <div className="col-2 row-1 justify-self-end text-fluid-base font-semibold text-blue-900 dark:text-blue-600">
                  {experience.duration}
                </div>
                <div
                  className="justify-self-end text-fluid-base 
                  font-semibold text-blue-900 dark:text-blue-600/90"
                >
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
