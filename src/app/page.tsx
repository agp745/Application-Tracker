import { redirect } from "next/navigation";

import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import type { AdapterUser } from "next-auth/adapters";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    console.log("no session found, rerouting to signin");
    redirect("/api/auth/signin?callbackUrl=/");
  }

  console.log("HERE");
  const user = session.user as AdapterUser;
  redirect(`/applications/${user.id}`);
}
