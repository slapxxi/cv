import profileImage from '~/assets/me.jpg'

const App = () => {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,480px)_minmax(auto,790px)_1fr] gap-2">
      <aside className="col-[1/3] grid grid-cols-subgrid grid-rows-subgrid bg-blue-900 text-white">
        <div className="col-2">
          <img
            src={profileImage}
            alt=""
            className="mx-auto aspect-square size-24 self-center justify-self-center rounded-full border-4 object-cover md:size-40"
          />

          <section>
            <h2 className="cv-title">Contact</h2>
          </section>
        </div>
      </aside>

      <main className="col-[3/6] grid grid-cols-subgrid grid-rows-subgrid">
        <div className="col-1 p-4 grid gap-y-8">
          <header className="grid gap-4 bg-gray-300 p-4 text-center">
            <h1 className="title text-fluid-5xl text-gray-800">
              Slava Pavlutin
            </h1>
            <h2 className="text-fluid-3xl text-gray-600 uppercase">
              Frontend Developer
            </h2>
          </header>

          <section>
            <h2 className="text-fluid-3xl font-semibold text-blue-900 uppercase underline">
              Summary
            </h2>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
