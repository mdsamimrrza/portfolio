export default function PageIntro({ eyebrow, title, description, actions }) {
  return (
    <section className="container py-10 md:py-16">
      <div className="page-intro max-w-5xl">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? <p className="editorial-kicker">{eyebrow}</p> : null}
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          {description ? <p className="text-lg leading-8 text-muted-foreground">{description}</p> : null}
          {actions ? <div className="flex flex-wrap gap-4 pt-2">{actions}</div> : null}
        </div>
      </div>
    </section>
  )
}
