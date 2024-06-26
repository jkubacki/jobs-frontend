'use client'

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

    if (query.length > 0 && query.length < 3) return

    setQuery(query)
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(ListingsActions.setQuery({ query: debouncedQuery }))
  }, [debouncedQuery, dispatch])

  return (
    <div>
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search by company, role, stack, location..."
        className="w-full rounded-lg bg-background pl-8 md:w-[336px]"
        onChange={handleChange}
      />
    </div>
  )
}
