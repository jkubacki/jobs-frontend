import { Button } from '@/components/ui/button'

function TabButton({ name, state }: { name: string; state: 'active' | 'inactive' }) {
  return (
    <Button
      variant={'ghost'}
      size="sm"
      data-state={state}
      className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
    >
      {name}
    </Button>
  )
}

export function RadioTabs() {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
      data-orientation="horizontal"
      style={{ outline: 'none' }}
    >
      <TabButton name="All" state={'active'} />
      <TabButton name="Remote" state={'inactive'} />
      <TabButton name="On site" state={'inactive'} />
    </div>
  )
}
