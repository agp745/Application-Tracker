import { columns } from "@/components/applicationsPage/columns"
import { DataTable } from "@/components/applicationsPage/data-table"
import { getApplications } from "@/lib/queries/application"
import { getErrorMessage } from "@/lib/utils/errorMessage"
import type { Application, ApplicationWithId } from "@/lib/utils/types"

import { ApplicationDialouge } from "../../components/applicationsPage/applicationDialog"

export default async function ApplicationsPage() {

  const { applications } = await getApplications() 

  
  return (
    <div className="container mx-auto py-10">
      <ApplicationDialouge buttonName="add application" title="Add an Application" description="Fill out the following form"/>
      {applications ? <DataTable columns={columns} data={applications} /> : <div>Error fetching data</div>}
    </div>
  )
}


 // const apps: Application[] = applications?.map((app) => {
  //   return {
  //     company: app.company,
  //     applied_date: app.applied_date,
  //     position: app.position,
  //     location: app.location,
  //     salary: app.salary,
  //     application_type: app.application_type,
  //     cover_letter: app.cover_letter,
  //     status: app.status,
  //   }
  // })

  // console.log(applications)
