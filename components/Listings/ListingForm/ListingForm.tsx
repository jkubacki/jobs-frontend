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
import { Textarea } from '@/components/ui/textarea'
import { ErrorAlert } from '@/components/ErrorAlert'
import { Listing } from '@/lib/listings/types/Listing'
import { defaultValues } from '@/components/Listings/ListingForm/defaultValues'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'

export const listingFormSchema = z.object({
  company: z.string(),
  url: z.string().url(),
  title: z.string(),
  description: z.string().optional(),
  product: z.string().optional(),
  based_in: z.string().optional(),
  timezones: z.string().optional(),
  stack: z.string().optional(),
  compensation: z.string().optional(),
  pto: z.string().optional(),
  remote: z.boolean(),
  glassdoor_url: z.string().url().optional(),
  glassdoor_rating: z.coerce.number().optional(),
  notes: z.string().optional(),
  preference: z.coerce.number().int().min(0).max(100),
})

export function ListingForm({
  listing,
  onSubmit,
  saving,
  error,
}: {
  listing: Listing | null
  onSubmit: (values: z.infer<typeof listingFormSchema>) => void
  saving: boolean
  error: string | null
}) {
  const form = useForm<z.infer<typeof listingFormSchema>>({
    resolver: zodResolver(listingFormSchema),
    defaultValues: defaultValues(listing),
  })

  const handleGoogleItClick = () => {
    const company = form.getValues('company')
    window.open(`https://www.google.com/search?q=${company} site:glassdoor.com`, '_blank')
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
              name="glassdoor_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="flex gap-2 items-center">
                      Glassdoor url
                      <div className="underline" onClick={handleGoogleItClick}>
                        Google it
                      </div>
                    </div>
                  </FormLabel>
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
                  <FormLabel>Glassdoor rating {field.value && field.value / 10}</FormLabel>
                  <FormControl>
                    <Slider
                      {...field}
                      value={[field.value || 1]}
                      onValueChange={field.onChange}
                      min={10}
                      max={50}
                    />
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
              name="remote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remote</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 items-center">
                      <Switch
                        id="airplane-mode"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className="text-sm">{field.value ? 'Remote' : 'On site'}</div>
                    </div>
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
                  <FormLabel>Preference {field.value}%</FormLabel>
                  <FormControl>
                    <Slider {...field} value={[field.value]} onValueChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <ErrorAlert title="Couldn't save the listing" description={error} />}
            <Button type="submit" className="my-10" disabled={saving}>
              {saving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
