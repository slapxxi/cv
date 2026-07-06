import config from './config'

export const Features = () => {
  return (
    <div className="col-[main] my-10 grid gap-10 self-start md:gap-20">
      <div className="grid max-w-265 gap-5 justify-self-center md:gap-8 md:text-center">
        <h2 className="title text-fluid-4xl text-blue-950">Main Features</h2>
        <p className="justify-self-center text-fluid-lg text-blue-950">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>
      </div>

      <ul className="grid justify-between gap-9 md:grid-cols-[repeat(3,minmax(0,380px))] md:gap-4">
        {config.features.map((item) => (
          <li
            key={item.title}
            className="grid grid-cols-[auto_1fr] gap-x-7 gap-y-2 md:row-span-3 md:grid-cols-1 md:grid-rows-subgrid 
            md:place-items-center md:gap-x-0 md:gap-y-0 md:text-center"
          >
            <item.Icon className="row-span-2 size-15 text-xpink-600 md:row-auto md:mb-7" />
            <h3 className="title text-base md:mb-4">{item.title}</h3>
            <p className="text-fluid-base text-xslate-400">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
