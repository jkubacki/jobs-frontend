'use client'

import Link from 'next/link'
import { BriefcaseBusiness, ListFilter, PanelLeft, SendHorizonal } from 'lucide-react'
import { useEffect } from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Table, TableBody } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ListingsSelectors } from '@/lib/listings/ListingsSelectors'
import { ListingsActions } from '@/lib/listings/listingsSlice'
import { ListingTableRow } from '@/components/ListingTableRow'
import { ListingsTableHeaders } from '@/components/ListingsTableHeaders'
import { CreateListingDialog } from '@/components/CreateListingDialog/CreateListingDialog'
import { ErrorAlert } from '@/components/ErrorAlert'
import { ListingTablePlaceholderRow } from '@/components/ListingTablePlaceholderRow'
import { LoadNextPageListingsButton } from '@/components/LoadNextPageListingsButton'
import { SearchListings } from '@/components/SearchListings'

export function Dashboard() {
  const dispatch = useAppDispatch()
  const listings = useAppSelector(ListingsSelectors.listings)
  const loading = useAppSelector(ListingsSelectors.loading)
  const loadingError = useAppSelector(ListingsSelectors.loadingError)
  const metadata = useAppSelector(ListingsSelectors.metadata)
  const moreListingsAvailable = useAppSelector(ListingsSelectors.moreListingsAvailable)

  useEffect(() => {
    dispatch(ListingsActions.load({ page: 1 }))
  }, [dispatch])

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <div className="text-xs transition-all group-hover:scale-110">JBS</div>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <BriefcaseBusiness className="h-5 w-5 transition-all hover:scale-110" />
                <span className="sr-only">Listings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Listings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <SendHorizonal className="h-5 w-5 transition-all hover:scale-110" />
                <span className="sr-only">Applications</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Applications</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <div className="text-sm transition-all group-hover:scale-110">JBS</div>
                  <span className="sr-only">Jobs</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <BriefcaseBusiness className="h-5 w-5" />
                  Listings
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <SendHorizonal className="h-5 w-5" />
                  Applications
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Listings</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Listings</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchListings />
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <CreateListingDialog />
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Listings</CardTitle>
                  <CardDescription>Manage your listings.</CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingError && (
                    <ErrorAlert title="Couldn't load listings" description={loadingError} />
                  )}
                  <Table>
                    <ListingsTableHeaders />
                    <TableBody>
                      {listings.map(listing => (
                        <ListingTableRow key={listing.id} listing={listing} />
                      ))}
                      {(listings.length === 0 || loading) && (
                        <>
                          {Array.from({ length: 10 }, (_, index) => index + 1).map(
                            (index: number) => (
                              <ListingTablePlaceholderRow key={index} />
                            )
                          )}
                        </>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  {metadata.total > 0 && (
                    <div className="text-xs text-muted-foreground">
                      Showing <strong>1-{metadata.to}</strong> of <strong>{metadata.total}</strong>{' '}
                      listings
                    </div>
                  )}
                  {moreListingsAvailable && <LoadNextPageListingsButton className="m-4" />}
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
