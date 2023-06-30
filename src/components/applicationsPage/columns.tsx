"use client"

import type { Application, Status, ApplicationWithId } from "@/lib/utils/types"
import type { ColumnDefTemplate, CellContext, Row } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { ColumnDef } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

import { useRouter } from "next/navigation"
import { UpdateForm } from "./updateForm"
import { UpdateStatusDropdown } from "./updateStatus"

import format from "date-fns/format"
import parseISO from "date-fns/parseISO"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { XMarkIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline'

const onSubmit = async (id: number) => {

  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/applications?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })

}

const ActionCell = ({ row }: {row: Row<ApplicationWithId>}) => {
  const application = row.original as ApplicationWithId
      const router = useRouter()
      console.log(application)

      const formData = {
        company: application.company,
        applied_date: application.applied_date,
        position: application.position,
        location: application.location,
        salary: String(application.salary),
        application_type: application.application_type,
        cover_letter: application.cover_letter,
        status: application.status,
      }
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end"
            className="bg-black border-neutral-700"
          >
            <DropdownMenuLabel className="text-neutral-200">Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="text-neutral-200"
              onClick={() => {
                navigator.clipboard.writeText(String(JSON.stringify(application)))
                toast({
                  className: 'bg-black border-green-700',
                  title: "Application data copied onto your clipboard"
                })
              }}
            >
              Copy Application Data
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="text-neutral-200"
              onSelect={(event) => event.preventDefault() }
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div>Update Application</div>
                </DialogTrigger>
                <DialogContent className='bg-black text-white'>
                  <DialogHeader>
                    <DialogTitle>Update Application</DialogTitle>
                    <DialogDescription>
                        Update the following form
                    </DialogDescription>
                  </DialogHeader>
                  <UpdateForm application={application}  />
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem 
              className="text-red-500 hover:text-red-500"
              onClick={async () => {
                await onSubmit(application.id)
                router.refresh()
                toast({
                  className: 'bg-black border-red-700',
                  title: "Application successfully deleted"
                })
              }}
            >
              Delete Application
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
}


export const columns: ColumnDef<ApplicationWithId>[] = [
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "applied_date",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left"
        >
          Date Applied
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      const date = (row.getValue("applied_date")) as Date
      const formatted = format(date, "PPP")
      return <div>{formatted}</div>
    }
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "salary",
    header: () => <div className="text-right">Salary</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("salary"))
        const formatted = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(amount)

        return <div className="text-right font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: "application_type",
    header: () => <div className="text-center">Application Type</div>,
    cell: ({row}) => {
      const applicationType = row.getValue("application_type") as string
      return <div className="text-center">{applicationType}</div>
    }
  },
  {
    accessorKey: "cover_letter",
    header: () => <div className="text-center">Cover Letter</div>,
    cell: ({row}) => {
      const isSubmitted = row.getValue("cover_letter") as boolean
      let value
      if (isSubmitted) value = <CheckIcon className="w-4 h-4 text-green-600" />
      else value = <XMarkIcon className="w-4 h-4 text-red-600" />
      return <div className="flex justify-center">{value}</div>
    }
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({row}) => {
      const application = row.original as ApplicationWithId
      const status = row.getValue("status") as Status
      let value
      if (status === 'accepted') value = <CheckIcon className="w-4 h-4 text-green-600" />
      else if (status === 'rejected') value = <XMarkIcon className="w-4 h-4 text-red-600" />
      else value = <ClockIcon className="w-4 h-4 text-yellow-600" />

      // return <div className="flex justify-center">{value}</div>
      return <div className="flex justify-center"><UpdateStatusDropdown currentStatus={status} id={application.id} /></div>
    }
  },
  {
    id: "actions",
    cell: ActionCell
  },
]
