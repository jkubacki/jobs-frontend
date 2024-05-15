import { Button } from '@/components/ui/button'

function TabButton({
  name,
  state,
  tabClick,
}: {
  name: string
  state: 'active' | 'inactive'
  tabClick: () => void
}) {
  return (
    <Button
      onClick={tabClick}
      variant={'ghost'}
      size="sm"
      data-state={state}
      className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
    >
      {name}
    </Button>
  )
}

export function RadioTabs({
  tabs,
  tabClick,
}: {
  tabs: { name: string; value: string; state: 'active' | 'inactive' }[]
  tabClick: (value: string) => void
}) {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
      data-orientation="horizontal"
      style={{ outline: 'none' }}
    >
      {tabs.map(tab => (
        <TabButton
          tabClick={() => {
            tabClick(tab.value)
          }}
          key={tab.value}
          name={tab.name}
          state={tab.state}
        />
      ))}
    </div>
  )
}
