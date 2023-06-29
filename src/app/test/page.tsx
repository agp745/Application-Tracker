import { IconSpin } from "./iconSpin"
import { AddApplicationDialouge } from "./addApplication"
import { UpdateStatusDropdown } from "../applications/updateStatus"

export default function TestPage() {

    return (
        <>
        <IconSpin />
        <AddApplicationDialouge />
        <UpdateStatusDropdown currentStatus="pending" id={1} />
        </>
    )
}