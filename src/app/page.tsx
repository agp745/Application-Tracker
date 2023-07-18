import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getServerSession } from "next-auth"
import { options } from "./api/auth/[...nextauth]/options"

export default async function Home() {

  const session = await getServerSession(options)
  console.log(session)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  }
  
  return (
    <main className="flex flex-col justify-center items-center gap-3 w-full h-screen">
      <Link href="/applications">
        <Button 
          variant="link"
          size="lg"
          className="text-white bg-neutral-100/5 border border-neutral-100/10"
        >
          Applications
        </Button>
      </Link>
      <Link href="/test">
        <Button 
          variant="link"
          size="lg"
          className="text-white bg-neutral-100/5 border border-neutral-100/10"
        >
          Tests
        </Button>
      </Link>
      <Link href="/api/auth/signout">
        <Button 
          variant="link"
          size="lg"
          className="text-white bg-neutral-100/5 border border-neutral-100/10"
        >
          Sign Out
        </Button>
      </Link>
      {session ? <pre>{JSON.stringify(session, null, 2)}</pre> : <div>no session</div>}
    </main>
  )
}