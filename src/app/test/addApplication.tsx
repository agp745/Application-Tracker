"use client"

import { useState } from "react"

import { DatePickerDemo } from "./datePicker"

import { ProfileForm } from "./useForm"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@radix-ui/react-dropdown-menu"
import { DialogClose } from "@radix-ui/react-dialog"

// function Form() {
//     return (
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label className="text-right">
//               company
//             </Label>
//             <Input id="company" placeholder="Amazon" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label className="text-right">
//                 date applied
//             </Label>
//             <div className="col-span-3">
//                 <DatePickerDemo />
//             </div>
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label className="text-right">
//               position
//             </Label>
//             <Input id="position" placeholder="software developer" className="col-span-3" />
//           </div>
//         </div>

//     )
// }

export function AddApplicationDialouge() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="text-black">
                    Open
                </Button>
            </DialogTrigger>
            <DialogContent className='bg-black text-white'>
                <DialogHeader>
                    <DialogTitle>Add an application</DialogTitle>
                    <DialogDescription>
                        Fill out the following form
                    </DialogDescription>
                </DialogHeader>
                
                <ProfileForm/>
            </DialogContent>
        </Dialog>
    )
}