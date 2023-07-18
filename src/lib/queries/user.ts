import { AdapterUser } from "next-auth/adapters";
import { prisma } from ".";

export async function getUser(user_id: string) {
    const user = await prisma.user.findUnique({
        where: {
            id: user_id
        }
    })
    return user as AdapterUser
}