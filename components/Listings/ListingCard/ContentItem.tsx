export function ContentItem({
  icon,
  content,
  title,
}: {
  icon: React.ReactNode
  content: string | null
  title: string
}) {
  if (!content) return null

  return (
    <div className="flex gap-2 items-center md:gap-1" title={title}>
      {icon}
      {content}
    </div>
  )
}
