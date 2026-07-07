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
      href: 'https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%BF%D0%B0%D0%B2%D0%BB%D1%83%D1%82%D0%B8%D0%BD-9417a2355/',
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
