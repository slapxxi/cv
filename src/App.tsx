import profileImage from '~/assets/me.jpg'
import config from './config'

const App = () => {
  return (
    <div
      className="grid min-h-screen 
      grid-cols-[[aside]1fr_[main]auto[main-end]_1fr[aside-end]]
      gap-2 md:grid-cols-[[aside]1fr_minmax(auto,480px)[aside-end_main]minmax(auto,960px)_1fr[main-end]]"
    >
      <aside className="col-[aside] grid auto-rows-min grid-cols-subgrid bg-blue-900 text-white">
        <div className="top-0 col-2 grid gap-y-8 overflow-y-auto p-4 md:sticky md:max-h-screen">
          <img
            src={profileImage}
            alt=""
            className="mx-auto aspect-square size-24 self-center justify-self-center rounded-full border-4 object-cover md:size-40"
          />

          <section className="cv-section justify-items-start">
            <h2 className="cv-title">Contact</h2>
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
            <h2 className="cv-title text-fluid-3xl">Skills</h2>
            <ul className="grid gap-2 md:grid-cols-2">
              {config.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="cv-section justify-items-start">
            <h2 className="cv-title text-fluid-3xl">Languages</h2>
            <ul className="grid gap-2">
              {config.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </section>

          <section className="cv-section justify-items-start">
            <h2 className="cv-title text-fluid-3xl">Education</h2>
            <p>{config.education}</p>
          </section>
        </div>
      </aside>

      <main className="col-[main] grid grid-cols-subgrid">
        <div className="col-1 grid auto-rows-min gap-y-8 p-4">
          {/* name */}
          <header className="grid gap-2 bg-gray-300 p-7 text-center">
            <h1 className="title text-fluid-5xl text-gray-800">
              Slava Pavlutin
            </h1>
            <hr className="mx-auto w-full max-w-prose border border-slate-900/20" />
            <h2 className="text-fluid-3xl text-gray-600 uppercase">
              Frontend Developer
            </h2>
          </header>

          {/* summary */}
          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-blue-900">Summary</h2>
            <p className="cv-text">{config.summary}</p>
          </section>

          {/* experience */}
          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-blue-900">
              Experience
            </h2>

            {config.experience.map((experience) => (
              <article key={experience.title} className="grid grid-cols-2">
                <h3 className="cv-subtitle text-slate-950">
                  {experience.title}
                </h3>
                <h4 className="col-1">{experience.at}</h4>
                <div className="col-2 row-1 justify-self-end text-fluid-base font-semibold text-blue-900">
                  {experience.duration}
                </div>
                <div className="justify-self-end text-fluid-base font-semibold text-blue-900">
                  {experience.location}
                </div>
                <p className="cv-text col-span-full my-4">
                  {experience.description}
                </p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
