"use client"

import type { Application } from "@/lib/utils/types"
import { ColumnDef } from "@tanstack/react-table"
import format from "date-fns/format"

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "applied_date",
    header: "Date Applied",
    // cell: ({row}) => {
    //   const date = row.getValue("applied_date") as number | Date
    //   const formatted = format(date, "PPP")

    //   return <div>{formatted}</div>
    // }
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
    header: "Application Type",
  },
  {
    accessorKey: "cover_letter",
    header: "Cover Letter",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
