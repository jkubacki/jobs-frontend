import { Jobs } from '@/lib/jobs/components/Jobs'

export default function Home() {
  return (
    <main className="container flex flex-col items-center gap-10 px-6 py-16 md:p-24 max-w-5xl">
      <Jobs />
    </main>
  )
}
