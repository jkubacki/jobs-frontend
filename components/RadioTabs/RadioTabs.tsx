import { Button } from '@/components/ui/button'
import { ListingsState } from '@/lib/listings/listingsSlice'

function TabButton({
  name,
  active,
  tabClick,
}: {
  name: string
  active: boolean
  tabClick: () => void
}) {
  return (
    <Button
      onClick={tabClick}
      variant={'ghost'}
      size="sm"
      data-state={active ? 'active' : 'inactive'}
      className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
    >
      {name}
    </Button>
  )
}

export function RadioTabs({
  tabs,
  tabClick,
  selected,
}: {
  tabs: { name: string; value: ListingsState['remoteFilter'] }[]
  tabClick: (value: ListingsState['remoteFilter']) => void
  selected: ListingsState['remoteFilter']
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
          key={tab.name}
          name={tab.name}
          active={tab.value === selected}
        />
      ))}
    </div>
  )
}
