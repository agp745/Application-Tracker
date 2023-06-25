"use client"

import type { Application } from "@/lib/utils/types"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "applied_date",
    header: "Date Applied",
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
    header: "Salary",
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
