import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getServerSession } from "next-auth"
import { options } from "./api/auth/[...nextauth]/options"
import type { AdapterUser } from "next-auth/adapters"

export default async function Home() {

  const session = await getServerSession(options)
  const user = session?.user as AdapterUser

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  } 

  redirect(`/applications/${user.id}`)
  
}