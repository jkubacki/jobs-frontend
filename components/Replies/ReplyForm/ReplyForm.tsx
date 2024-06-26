'use client'

import { format } from 'date-fns'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { ErrorAlert } from '@/components/ErrorAlert'
import { Reply } from '@/lib/replies/types/Reply'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { defaultValues } from '@/components/Replies/ReplyForm/defaultValues'

export const replyFormSchema = z.object({
  sent_at: z.date(),
  by_me: z.boolean(),
  rejected: z.boolean(),
  body: z.string(),
  notes: z.string().optional(),
  preference: z.coerce.number().int().min(0).max(100),
})

export function ReplyForm({
  reply,
  onSubmit,
  saving,
  error,
}: {
  reply: Reply | null
  onSubmit: (values: z.infer<typeof replyFormSchema>) => void
  saving: boolean
  error: string | null
}) {
  const form = useForm<z.infer<typeof replyFormSchema>>({
    resolver: zodResolver(replyFormSchema),
    defaultValues: defaultValues(reply),
  })

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col gap-5 w-full">
            <FormField
              control={form.control}
              name="sent_at"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Sent at</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date > new Date() || date < new Date('1900-01-01')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>The day when reply was sent.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="by_me"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sent by</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 items-center">
                      <Switch
                        id="airplane-mode"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className="text-sm">{field.value ? 'Me' : 'The company'}</div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rejected"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rejected?</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 items-center">
                      <Switch
                        id="airplane-mode"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className="text-sm">{field.value ? 'Rejected' : 'Not rejected'}</div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>The reply</FormLabel>
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
            {error && <ErrorAlert title="Couldn't save the reply" description={error} />}
            <Button type="submit" className="my-10" disabled={saving}>
              {saving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
