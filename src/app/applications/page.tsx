import { columns } from "@/components/applicationsPage/columns"
import { DataTable } from "@/components/applicationsPage/data-table"
import type { Application } from "@/lib/utils/types"

import { ApplicationDialouge } from "../../components/applicationsPage/applicationDialog"

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
  return (
    <div className="container mx-auto py-10">
      <ApplicationDialouge buttonName="add application" title="Add an Application" description="Fill out the following form"/>
      <DataTable columns={columns} data={applications} />
    </div>
  )
}
