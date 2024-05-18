const WORDS_LIMIT = 50

export function CoverLetter({ text }: { text: string | null }) {
  if (!text) return null

  if (text.split(' ').length > WORDS_LIMIT) {
    text = text.split(' ').slice(0, WORDS_LIMIT).join(' ') + '...'
  }

  return <div>{text}</div>
}
