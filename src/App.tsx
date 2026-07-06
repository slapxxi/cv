import profileImage from '~/assets/me.jpg'
import config from './config'

const App = () => {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,480px)_minmax(auto,790px)_1fr] gap-2">
      <aside className="col-[1/3] grid auto-rows-min grid-cols-subgrid bg-blue-900 text-white">
        <div className="col-2 p-4 grid gap-y-4">
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
          <header className="grid gap-4 bg-gray-300 p-4 text-center">
            <h1 className="title text-fluid-5xl text-gray-800">
              Slava Pavlutin
            </h1>
            <h2 className="text-fluid-3xl text-gray-600 uppercase">
              Frontend Developer
            </h2>
          </header>

          <section className="cv-section">
            <h2 className="cv-title text-fluid-3xl text-blue-900">Summary</h2>
            <p className="cv-text">{config.summary}</p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
