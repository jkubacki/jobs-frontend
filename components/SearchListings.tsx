import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { useAppDispatch } from '@/lib/hooks'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import useDebounce from '@/utils/hooks/useDebounce'

export function SearchListings() {
  const [query, setQuery] = useState('')

  const debouncedQuery = useDebounce<string>(query, 300)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    if (query.length < 3) return

    setQuery(query)
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (debouncedQuery) dispatch(ListingsActions.load({ page: 1, query: debouncedQuery }))
  }, [debouncedQuery, dispatch])

  return (
    <>
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        onChange={handleChange}
      />
    </>
  )
}
