import MailIcon from '~/assets/mail-icon.svg?react'
import TelegramIcon from '~/assets/telegram-icon.svg?react'
import PhoneIcon from '~/assets/phone-icon.svg?react'
import LinkedinIcon from '~/assets/linkedin-icon.svg?react'

const config = {
  summary: `Frontend developer experienced in building fast, adaptive, and user-friendly interfaces. 
    Specialized in developing complex UI systems using React and TypeScript with a 
    strong understanding of browser internals and frontend optimization techniques.`,
  languages: ['Russian', 'English'],
  experience: [
    {
      title: 'Frontend Developer',
      duration: '2021 - Present',
      at: 'IDF Software',
      location: 'Minsk, Belarus',
      description: (
        <div className="cv-content">
          <ul>
            <li>
              Developed and maintained large-scale React and Next.js
              applications serving thousands of users.
            </li>
            <li>
              Designed scalable frontend architectures using TypeScript and
              modern React patterns.
            </li>
            <li>
              Implemented advanced state management solutions using Redux, Redux
              Toolkit
            </li>
            <li>
              Created reusable design system components documented with
              Storybook.
            </li>
            <li>
              Developed custom animations and user interactions using React
              Spring and modern CSS techniques.
            </li>
            <li>
              Integrated complex REST and GraphQL services, including
              authentication, caching, and optimistic updates.
            </li>
            <li>
              Collaborated with backend teams to support frontend requirements.
            </li>
            <li>
              Implemented comprehensive testing strategies using TDD, Vitest,
              Jest, Playwright.
            </li>
            <li>
              Improved Core Web Vitals through code splitting, lazy loading,
              image optimization, and rendering optimizations.
            </li>
            <li>
              Contributed to CI/CD pipelines, release processes, and deployment
              automation.
            </li>
            <li>
              Mentored junior developers through code reviews and
              knowledge-sharing sessions.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'React Developer',
      at: 'Innowise',
      duration: '2020 - 2021',
      location: 'Minsk, Belarus',
      description: (
        <div className="cv-content">
          <ul>
            <li>
              Developed single-page applications using React and TypeScript.
            </li>
            <li>
              Built server-side rendered and statically generated applications
              with Next.js.
            </li>
            <li>
              Implemented client-side navigation and protected routes using
              React Router v6.
            </li>
            <li>
              Integrated REST and GraphQL APIs with advanced caching and data
              synchronization strategies.
            </li>
            <li>
              Managed application state using Redux Toolkit and React Query.
            </li>
            <li>
              Introduced TypeScript into existing JavaScript codebases,
              improving maintainability and reducing runtime errors.
            </li>
            <li>
              Collaborated with backend teams to define API contracts and
              improve integration workflows.
            </li>
            <li>
              Optimized application performance through lazy loading, code
              splitting, and bundle analysis.
            </li>
            <li>
              Developed reusable component libraries shared across multiple
              projects.
            </li>
            <li>
              Implemented automated testing using Jest, React Testing Library,
              and Cypress.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'HTML/CSS Developer',
      at: 'PixelBot Digital',
      duration: '2019 - 2020',
      location: 'Saint Petersburg, Russia',
      description: (
        <div className="cv-content">
          <ul>
            <li>
              Collaborated with designers to transform Figma mockups into
              accessible, responsive, and highly performant user interfaces.
            </li>
            <li>
              Developed reusable UI components using semantic HTML5, SCSS, and
              BEM methodology.
            </li>
            <li>
              Implemented responsive layouts using CSS Flexbox and CSS Grid.
            </li>
            <li>
              Developed interactive 3D experiences using Three.js, React Three
              Fiber, and Blender-generated assets.
            </li>
            <li>
              Implemented responsive, cross-browser user interfaces using
              semantic HTML5, CSS3, Flexbox, Grid, and Pixel Perfect
              methodologies based on Figma designs.
            </li>
            <li>
              Optimized page performance by reducing CSS and JavaScript bundle
              sizes.
            </li>
            <li>
              Integrated third-party APIs and dynamic content using JavaScript
              and AJAX.
            </li>
            <li>
              Improved accessibility by applying semantic markup and WCAG best
              practices.
            </li>
            <li>
              Participated in code reviews and Git-based development workflows.
            </li>
            <li>
              Maintained cross-browser compatibility across Chrome, Firefox,
              Safari, and Edge.
            </li>
          </ul>
        </div>
      ),
    },
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
