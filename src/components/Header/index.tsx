import Logo from '~/assets/logo.svg?react'
import MenuIcon from '~/assets/menu-icon.svg?react'
import config from './config'

export const Header = () => {
  return (
    <header className="z-10 col-[wide] row-1 grid grid-cols-subgrid text-base text-xslate-400 shadow md:min-h-32 md:shadow-none">
      <div className="col-[main] grid grid-cols-[auto_auto] items-center justify-between gap-4.5 py-5 md:grid-cols-[1fr_3fr_1fr]">
        <Logo className="w-32 md:w-45" />

        <nav className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-9">
            {config.nav.map((item) => (
              <li key={item} className="text-center">
                <a href="#" className="hover:opacity-80">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <button className="cursor-pointer hover:opacity-80">Sign In</button>
          <button className="btn btn-outline hidden cursor-pointer hover:opacity-80 md:block">
            Sign Up
          </button>
          <button className="cursor-pointer hover:opacity-80 md:hidden">
            <MenuIcon className="size-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
