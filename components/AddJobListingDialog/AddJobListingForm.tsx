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
  FormDescription,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const addJobListingFormSchema = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
})

export function AddJobListingForm() {
  const form = useForm<z.infer<typeof addJobListingFormSchema>>({
    resolver: zodResolver(addJobListingFormSchema),
    defaultValues: {
      lat: 37.3349,
      lng: -122.009,
    },
  })

  // const dispatch = useAppDispatch()

  function onSubmit(values: z.infer<typeof addJobListingFormSchema>) {
    const { lat, lng } = values
    console.log(values)
    // dispatch(JobActions.create({ type, location: { lat, lng } }))
  }

  return (
    <div className="AddJobListingForm w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="lat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Latitude</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>latitude</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lng"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Longitude</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>longitude</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Next
          </Button>
        </form>
      </Form>
    </div>
  )
}
