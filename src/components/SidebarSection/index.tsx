type SidebarProps = {
  title: string
  items?: string[]
  text?: string
}

export const SidebarSection: React.FC<SidebarProps> = (props) => {
  const { items, text, title } = props

  return (
    <section className="cv-section justify-items-start">
      <h2 className="cv-title text-fluid-3xl">{title}</h2>

      {items && (
        <ul className="grid gap-2 md:grid-cols-2 print:flex">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {text && <p>{text}</p>}
    </section>
  )
}
