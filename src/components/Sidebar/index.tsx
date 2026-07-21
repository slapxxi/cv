import { useTranslation } from 'react-i18next'
import DarkThemeIcon from '~/assets/dark-theme-icon.svg?react'
import LightThemeIcon from '~/assets/light-theme-icon.svg?react'
import profileImage from '~/assets/me.jpg'
import { SidebarSection } from '~/components'
import { useTheme } from '~/hooks'
import config from './config'
import './Sidebar.css'

export const Sidebar = () => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()

  const languages = t('languagesList', { returnObjects: true }) as string[]

  const onChangeLanguage = (e: React.ChangeEvent<HTMLFormElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  const onChangeTheme = (e: React.ChangeEvent<HTMLFormElement>) => {
    setTheme(e.target.value)
  }

  return (
    <aside className="sidebar">
      <div className="col-2 grid gap-y-8 p-4 print:gap-y-1">
        <form
          onChange={onChangeLanguage}
          className="col-1 row-1 grid grid-cols-[1fr_1px_1fr] self-center justify-self-start overflow-hidden
            rounded border border-white/20 p-0 text-fluid-base text-white/40 
            print:hidden"
        >
          <label
            htmlFor="ru"
            className="p-2 data-[active='true']:bg-white/10 data-[active='true']:text-white"
            data-active={i18n.language === 'ru'}
          >
            <span>RU</span>
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
            className="p-2 data-[active='true']:bg-white/10 data-[active='true']:text-white"
            data-active={i18n.language === 'en'}
          >
            <span>EN</span>
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
            overflow-hidden rounded border border-white/20 p-0 text-fluid-base text-white/40 
            print:hidden"
        >
          <label
            htmlFor="dark"
            className="inline-grid place-items-center p-2 
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
            className="inline-grid place-items-center p-2 
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
          className="col-1 row-1 mx-auto aspect-square size-24 
            self-center justify-self-center rounded-full border-4 object-cover 
            md:size-40 
            print:hidden"
        />

        <section className="cv-section justify-items-start">
          <h2 className="cv-title">{t('contact')}</h2>
          <ul className="grid gap-3 print:flex">
            {config.contacts.map((contact) => (
              <li key={contact.name}>
                <a href={contact.href} className="link flex items-center gap-2">
                  <contact.Icon className="size-5" />
                  <span>{contact.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <SidebarSection title={t('skills')} items={config.skills} />
        <SidebarSection title={t('languages')} items={languages} />
        <SidebarSection title={t('education')} text={t('educationValue')} />
      </div>
    </aside>
  )
}
