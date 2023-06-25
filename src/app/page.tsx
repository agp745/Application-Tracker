import type { Application } from "@/lib/utils/types"

async function GetData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/applications`)
  if (!res.ok) throw new Error ('error while fetching data')
  return res.json()
}

export default async function Home() {

  const { applications } = await GetData() as {applications: Application[]}

  console.log(applications)

  return (
    <main className="uppercase">
      <div>home</div>
    </main>
  )
}