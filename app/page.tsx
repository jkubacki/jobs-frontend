import { Dashboard } from '@/components/Dashboard'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function Home() {
  return (
    <main className="">
      <TooltipProvider>
        <Dashboard section="listings" />
      </TooltipProvider>
    </main>
  )
}
