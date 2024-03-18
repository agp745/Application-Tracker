import { AdapterUser } from "next-auth/adapters";
import { prisma } from ".";

export async function getUser(user_id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });
    return user as AdapterUser;
  } catch (err) {
    console.log("ERROR!:", err);
  }
}

export async function getUserByEmail(user_email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: user_email,
      },
    });
    return user;
  } catch (err) {
    console.log("ERROR", err);
  }
}
