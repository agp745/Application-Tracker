import { columns } from "./columns"
import { DataTable } from "./data-table"
import type { Application } from "@/lib/utils/types"

import { AddApplicationDialouge } from "./addApplicationDialog"

interface DataRequest {
    success: boolean,
    applications: Application[],
}

async function getData(): Promise<DataRequest> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/applications`, {cache: "no-store"})
    if (!res.ok) throw new Error ('error while fetching data')
    
    return res.json()
}

export default async function ApplicationsPage() {
  const { applications } = await getData() 
  console.log(applications)
  return (
    <div className="container mx-auto py-10">
      <AddApplicationDialouge />
      <DataTable columns={columns} data={applications} />
    </div>
  )
}
