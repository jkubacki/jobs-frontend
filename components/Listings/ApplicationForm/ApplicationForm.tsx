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
import { Checkbox } from '@/components/ui/checkbox'
import { ErrorAlert } from '@/components/ErrorAlert'
import { Application } from '@/lib/applications/types/Application'
import { defaultValues } from '@/components/Listings/ApplicationForm/defaultValues'
import { Slider } from '@/components/ui/slider'

export const applicationFormSchema = z.object({
  applied_at: z.string(),
  cv: z.boolean(),
  cover_letter: z.string().optional(),
  notes: z.string().optional(),
  preference: z.coerce.number().int().min(1).max(100),
})

export function ApplicationForm({
  application,
  onSubmit,
  saving,
  error,
}: {
  application: Application | null
  onSubmit: (values: z.infer<typeof applicationFormSchema>) => void
  saving: boolean
  error: string | null
}) {
  const form = useForm<z.infer<typeof applicationFormSchema>>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: defaultValues(application),
  })

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col gap-5 w-full">
            <FormField
              control={form.control}
              name="applied_at"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Applied at</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem className="flex gap-2 items-center">
                  <FormLabel>CV sent?</FormLabel>
                  <FormControl className="y-0">
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cover_letter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover letter</FormLabel>
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
            {error && <ErrorAlert title="Couldn't save application" description={error} />}
            <Button type="submit" className="w-full" disabled={saving}>
              {saving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
