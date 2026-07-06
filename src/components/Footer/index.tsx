import Logo from '~/assets/logo-mono.svg?react'
import FacebookIcon from '~/assets/facebook-icon.svg?react'
import InstagramIcon from '~/assets/instagram-icon.svg?react'
import TwitterIcon from '~/assets/twitter-icon.svg?react'
import YoutubeIcon from '~/assets/youtube-icon.svg?react'
import config from './config'

export const Footer = () => {
  return (
    <footer className="row-6 z-10 col-[wide] grid grid-cols-subgrid text-xslate-400">
      <div className="col-[main] flex min-h-40 items-center justify-between gap-8 py-8">
        <Logo className="w-32" />

        <nav className="hidden text-sm md:block">
          <ul className="flex items-center gap-4">
            {config.nav.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-10">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </div>
      </div>
    </footer>
  )
}
