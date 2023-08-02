"use client"

import * as React from "react"
import { ClockIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { GhostIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UpdateStatusProps {
    currentStatus: string,
    id: number,
}

export function UpdateStatusDropdown({ currentStatus, id }: UpdateStatusProps ) {

  const [status, setStatus] = React.useState(currentStatus)

  const getIcon = () => {
    if (status === 'pending') return <ClockIcon className="w-5 h-5 text-yellow-600 hover:brightness-150 transition-all duration-100 ease-in"/>
    else if (status === 'accepted') return <CheckIcon className="w-5 h-5 text-green-600 hover:brightness-150 transition-all duration-100 ease-in"/>
    else if (status === 'rejected') return <XMarkIcon className="w-5 h-5 text-red-600 hover:brightness-150 transition-all duration-100 ease-in"/>
    else if (status === 'ghosted') return <GhostIcon className="w-5 h-5 text-neutral-200 hover:brightness-150 transition-all duration-100 ease-in"/>
    else return <div>error</div>
  }

  const handleChange = async (newStatus: string) => {
    setStatus(newStatus)
    console.log(status)
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/applications`, {
        method: "PATCH",
        body: JSON.stringify({ newStatus, id }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(await res.json())
    if (!res.ok) {
        toast({
            className: 'bg-black border-red-700',
            title: "Status failed to updated"
        })
    }
    toast({
        className: "bg-black border-green-700",
        title: "Status updated successfully"
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">{getIcon()}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black border-neutral-700">
        <DropdownMenuLabel className="text-neutral-200">Update Status</DropdownMenuLabel>
        <DropdownMenuSeparator className="border-neutral-700"/>
        <DropdownMenuRadioGroup value={status} onValueChange={handleChange} className="text-neutral-200">
          <DropdownMenuRadioItem value="pending">
            Pending
            <ClockIcon className="w-3 h-3 text-yellow-600 ml-1"/>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="accepted">
            Accepted
            <CheckIcon className="w-3 h-3 text-green-600 ml-1"/>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rejected">
            Rejected
            <XMarkIcon className="w-3 h-3 text-red-600 ml-1"/>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ghosted">
            Ghosted
            <GhostIcon className="w-3 h-3 text-neutral-200 ml-1"/>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
