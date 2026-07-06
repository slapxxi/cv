import heroImage from '~/assets/hero-chart.png'
import heroImageSm from '~/assets/hero-chart-sm.png'
import './Hero.css'

export const Hero = () => {
  return (
    <>
      <div className="-z-1 col-span-full row-[1/3] h-[calc(100%+15px)] bg-xpink-600 clip-angle" />
      <div className="hero -z-1 col-span-full row-[1/3] bg-blue-950 clip-angle" />

      <div className="relative col-[wide] row-[1/3] grid grid-cols-subgrid grid-rows-subgrid text-base text-xslate-400">
        <div
          className="col-[main] row-2 grid grid-rows-[min-content_min-content_120px] gap-6
          md:col-[main/-1] md:grid-cols-[minmax(0,550px)_minmax(240px,1fr)] md:grid-rows-[auto_120px]"
        >
          <img
            src={heroImage}
            alt=""
            className="col-2 row-span-2 -mb-4 hidden max-w-220  scale-105 drop-shadow-lg drop-shadow-black/20 filter md:block"
          />

          <img
            src={heroImageSm}
            alt=""
            className="w-full drop-shadow-lg drop-shadow-black/30 filter md:hidden"
          />

          <div className="grid gap-4 self-center md:row-1 md:grid-cols-2">
            <h2 className="title col-span-full text-fluid-5xl text-white">
              Monitor your business on real-time dashboard
            </h2>
            <p className="col-span-full text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.
            </p>
            <div className="grid min-h-20">
              <button className="btn self-end">Try for Free</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
