import profileImage from '~/assets/me.jpg'
import config from './config'

const App = () => {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,480px)_minmax(auto,960px)_1fr] gap-2">
      <aside className="col-[1/3] grid auto-rows-min grid-cols-subgrid bg-blue-900 text-white">
        <div className="sticky top-0 col-2 grid gap-y-4 p-4">
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
        </div>
      </aside>

      <main className="col-[3/6] grid grid-cols-subgrid">
        <div className="col-1 grid auto-rows-min gap-y-8 p-4">
          {/* name */}
          <header className="grid gap-4 bg-gray-300 p-4 text-center">
            <h1 className="title text-fluid-5xl text-gray-800">
              Slava Pavlutin
            </h1>
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
