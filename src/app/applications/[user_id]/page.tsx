import { columns } from "@/components/applicationsPage/columns"
import { DataTable } from "@/components/applicationsPage/data-table"
import { getApplications } from "@/lib/queries/application"
import type { Application, ApplicationWithId, Status } from "@/lib/utils/types"

import { ApplicationDialouge } from "../../../components/applicationsPage/applicationDialog"

export const revalidate = 0 

export default async function ApplicationsPage({ params }: { params: {user_id: string} }) {

  const { applications } = await getApplications(params.user_id) 

  const transformedApplications: ApplicationWithId[] = applications?.map((application) => ({
    id: application.id,
    company: application.company,
    applied_date: application.applied_date,
    position: application.position,
    location: application.location,
    salary: application.salary,
    application_type: application.application_type,
    cover_letter: application.cover_letter,
    status: application.status as Status,
    user_id: params.user_id
  })) ?? [];

  
  return (
    <div className="container mx-auto py-10">
      <ApplicationDialouge buttonName="add application" title="Add an Application" description="Fill out the following form"/>
      {applications ? <DataTable columns={columns} data={transformedApplications} /> : <div>Error fetching data</div>}
      <div>{params.user_id}</div>
    </div>
  )
}
