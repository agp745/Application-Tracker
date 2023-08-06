'use client'

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ArrowRightOnRectangleIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { signOut, useSession } from "next-auth/react"

export const AvatarPopover = ({ children }: { children: React.ReactNode}) => {

    const { data } = useSession()

    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="bg-black p-2 mr-2 relative">
                <div className="absolute w-0 h-0 border-l-8 border-r-8 border-x-transparent border-b-8 border-b-neutral-200 -top-2 right-[35px]"></div>
                <div className="absolute w-0 h-0 border-l-8 border-r-8 border-x-transparent border-b-8 border-b-black -top-[6px] right-[35px]"></div>
                <div className="flex flex-col gap-2">
                    <section className="text-purple-100 text-right text-sm font-light mb-5">
                        <div>{data?.user?.name}</div>
                        <div className="italic">{data?.user?.email}</div>
                    </section>
                    <button
                        onClick={() => signOut({callbackUrl: '/'})}
                        className="flex items-center gap-2 text-neutral-200 hover:brightness-125 cursor-pointer transition-all duration-75 ease-in-out"
                    >
                        <ArrowRightOnRectangleIcon className="w-5 h-5 text-yellow-500"/>
                        <div>sign out</div>
                    </button>
                    <button
                        // onClick={() => }
                        className="flex items-center gap-2 text-red-500 hover:brightness-125 cursor-pointer transition-all duration-75 ease-in-out"
                    >
                        <XMarkIcon className="w-5 h-5"/>
                        <div>delete account</div>
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
  