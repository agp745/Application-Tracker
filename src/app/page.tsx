import { getApplications } from "@/lib/queries/application"

export default function Home() {

  async function userApplications() {
    'use server'

    try {
      const { applications, error } = await getApplications()
      if (error) throw new Error
      return applications 
    } catch (error) {
      return error
    }
  }

  return (
    <main className="">
      
    </main>
  )
}
