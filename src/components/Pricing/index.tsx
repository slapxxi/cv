import config from './config'

export const Pricing = () => {
  return (
    <>
      <div className="col-[wide] row-[5/7] -translate-y-2 bg-xpink-600/90 clip-angle-rev" />
      <div className="hero col-[wide] row-[5/7] bg-xblue-900 clip-angle-rev" />

      <div className="z-10 col-[wide] row-5 grid grid-cols-subgrid py-10 pt-30 text-xslate-400">
        <div className="col-[main] grid gap-20">
          <div className="mx-auto grid max-w-prose gap-7 text-center">
            <h2 className="title text-fluid-4xl text-white">Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est.{' '}
            </p>
          </div>

          <ul className="grid gap-4 py-10 md:grid-cols-3">
            {config.plans.map((item, i) =>
              i === 1 ? (
                <li
                  key={item.name}
                  className="row-span-4 grid grid-rows-subgrid gap-4 rounded-xl bg-white p-4 text-center drop-shadow-lg drop-shadow-black/20 filter"
                >
                  <div>
                    <h3 className="title text-3xl text-black">{item.name}</h3>
                    <p className="text-fluid-base text-xslate-400">
                      {item.description}
                    </p>
                  </div>
                  <hr className="border-xslate-400/30" />
                  <div className="text-center">{item.price}</div>
                  <button className="btn">Order</button>
                </li>
              ) : (
                <li
                  key={item.name}
                  className="row-span-4 grid grid-rows-subgrid gap-4 rounded-xl bg-xblue-950 p-4 text-center"
                >
                  <div>
                    <h3 className="title justify-self-center text-3xl text-white">
                      {item.name}
                    </h3>
                    <p className="justify-self-center text-fluid-base text-xslate-400">
                      {item.description}
                    </p>
                  </div>
                  <hr className="border-xslate-400/30" />
                  <div className="text-center">{item.price}</div>
                  <button className="btn">Order</button>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
