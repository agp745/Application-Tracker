import { redirect } from "next/navigation";

import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import type { AdapterUser } from "next-auth/adapters";
import { getUserByEmail } from "@/lib/queries/user";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    console.log("no session found, rerouting to signin");
    redirect("/api/auth/signin?callbackUrl=/");
  }

  const user = await getUserByEmail(session.user?.email as string);
  redirect(`/applications/${user?.id}`);
}
