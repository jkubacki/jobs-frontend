import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ListingCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex gap-3 text-lg items-center">
            <Skeleton className="h-6 w-[250px] my-2" />
          </div>
        </CardTitle>
        <div className="text-md">
          <Skeleton className="h-5 w-[200px] my-1" />
        </div>
        <CardDescription className="flex flex-col gap-1">
          <Skeleton className="h-8 w-[150px] my-1" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 flex-col md:gap-4 md:flex-row">
        <Skeleton className="h-6 w-[100px]" />
        <Skeleton className="h-6 w-[100px]" />
        <Skeleton className="h-6 w-[150px]" />
      </CardContent>
      <CardFooter className="flex flex-col gap-8">
        <div className="flex gap-1.5 flex-wrap w-full">
          <Skeleton className="h-5 w-[50px]" />
          <Skeleton className="h-5 w-[50px]" />
          <Skeleton className="h-5 w-[50px]" />
          <Skeleton className="h-5 w-[50px]" />
          <Skeleton className="h-5 w-[50px]" />
        </div>
      </CardFooter>
    </Card>
  )
}
