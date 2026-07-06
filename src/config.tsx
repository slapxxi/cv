import MessageIcon from '~/assets/message.svg?react'
import GridIcon from '~/assets/grid.svg?react'
import EyeIcon from '~/assets/eye.svg?react'

type Config = {
  demoFeatures: string[]
  text: {
    trial: string
    trialExtra: string
    terms: string
    request: string
    touch: string
    match: string
  }
  ticker: {
    text: string
    Icon: any
  }[]
  nav: string[]
  footerSections: {
    title: string
    links: string[]
  }[]
}

const config: Config = {
  demoFeatures: [
    'Ready in minutes, not weeks',
    'Real data, real workflows',
    'No credit card required',
  ],
  ticker: [
    { text: 'Centralized Communication', Icon: MessageIcon },
    { text: 'Built-in policy builder', Icon: GridIcon },
    { text: 'AI-powered assistants', Icon: EyeIcon },
    { text: 'No complex setup', Icon: MessageIcon },
    { text: 'No IT department required', Icon: GridIcon },
  ],
  text: {
    trial: 'Free Trial',
    trialExtra: '14-day free trial —  included with any plan',
    terms: `By clicking the button, you agree to our Privacy Policy and consent to the processing of your personal data`,
    request: 'Send request',
    touch: `Get in touch`,
    match: `We'll match a plan to your team and volume`,
  },
  nav: ['Features', 'How-it-works', 'Pricing', 'About', 'Contacts'],
  footerSections: [
    { title: 'Home', links: [] },
    {
      title: 'Product',
      links: ['Features', 'How-it-works', 'Pricing', 'Free Trial'],
    },
    { title: 'Company', links: ['About Us'] },
  ],
}

export default config
