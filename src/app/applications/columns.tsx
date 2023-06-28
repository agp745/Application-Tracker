"use client"

import type { Application } from "@/lib/utils/types"
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

import format from "date-fns/format"
import parseISO from "date-fns/parseISO"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'

export const columns: ColumnDef<Application>[] = [
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
          className="text-left p-0"
        >
          Date Applied
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      const date = parseISO(row.getValue("applied_date"))
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
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const application = row.original
 
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
                  className: 'bg-black',
                  title: "Application data copied onto your clipboard"
                })
              }}
            >
              Copy Application Data
            </DropdownMenuItem>
            <DropdownMenuItem className="text-neutral-200">
              Update Application
            </DropdownMenuItem>
            <DropdownMenuSeparator className="text-neutral-700"/>
            <DropdownMenuItem 
              className="text-red-500"
              onClick={() => {
                toast({
                  className: 'bg-black',
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
  },
]
