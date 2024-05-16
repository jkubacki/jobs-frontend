'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { ErrorAlert } from '@/components/ErrorAlert'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { Listing } from '@/lib/listings/types/Listing'
import { defaultValues } from '@/components/ListingDialog/defaultValues'

export const listingFormSchema = z.object({
  company: z.string(),
  url: z.string().url(),
  title: z.string(),
  description: z.string().optional(),
  product: z.string(),
  based_in: z.string(),
  timezones: z.string().optional(),
  stack: z.string(),
  compensation: z.string(),
  pto: z.string().optional(),
  remote: z.string(),
  glassdoor_url: z.string().url().optional(),
  glassdoor_rating: z.number().optional(),
  notes: z.string().optional(),
  preference: z.number().int().min(1).max(100),
})

export function ListingForm({
  action,
  listing,
}: {
  action: typeof ListingsActions.create | typeof ListingsActions.update
  listing: Listing | null
}) {
  const creating = useAppSelector(ListingsSelectors.creating)
  const creatingError = useAppSelector(ListingsSelectors.creatingError)

  const form = useForm<z.infer<typeof listingFormSchema>>({
    resolver: zodResolver(listingFormSchema),
    defaultValues: defaultValues(listing),
  })

  const dispatch = useAppDispatch()

  function onSubmit(values: z.infer<typeof listingFormSchema>) {
    dispatch(action(values))
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col gap-5 w-full">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Url</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="product"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="based_in"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Based in</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timezones"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timezones</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stack"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stack</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="compensation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Compensation</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pto</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remote</FormLabel>
                  <FormControl>
                    <div>
                      <Checkbox {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="glassdoor_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Glassdoor url</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="glassdoor_rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Glassdoor rating</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preference %</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {creatingError && (
              <ErrorAlert title="Couldn't save listing" description={creatingError} />
            )}
            <Button type="submit" className="w-full" disabled={creating}>
              {creating ? 'Creating...' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
