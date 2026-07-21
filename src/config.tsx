import MailIcon from '~/assets/mail-icon.svg?react'
import TelegramIcon from '~/assets/telegram-icon.svg?react'
import PhoneIcon from '~/assets/phone-icon.svg?react'
import LinkedinIcon from '~/assets/linkedin-icon.svg?react'

const config = {
  skills: [
    'React',
    'TypeScript',
    'Next.js',
    'Redux',
    'GraphQL',
    'CSS',
    'HTML',
    'Git',
  ],
  contacts: [
    {
      name: 'sl.pavlutin@gmail.com',
      Icon: MailIcon,
      href: 'mailto:slava@pavlutin.dev',
    },
    {
      name: 'LinkedIn',
      Icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/slapxxi',
    },
    {
      name: '@slapxxi',
      Icon: TelegramIcon,
      href: 'https://t.me/slapxxi',
    },
    {
      name: '+375 (44) 719 30 35',
      Icon: PhoneIcon,
      href: 'tel:+375447193035',
    },
  ],
}

export default config
