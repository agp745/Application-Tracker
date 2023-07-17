import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const options: NextAuthOptions = {
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
    }
}