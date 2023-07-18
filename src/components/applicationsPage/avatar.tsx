import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from "@/lib/utils/getInitials"
import type { AdapterUser } from "next-auth/adapters"

export const AvatarHeader = ({ user }: { user: AdapterUser }) => {

    const initials = getInitials(user.name as string)

    return(
        <Avatar>
            <AvatarImage src={user.image as string | undefined} />
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    )
}
