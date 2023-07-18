import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/queries";

import type { Adapter } from "next-auth/adapters";

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENTID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // GoogleProvider({
        //     clientId: "",
        //     clientSecret: ""
        // })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        //@ts-expect-error
        async session({session, user}){
            return {session, user}
        }
    }
}