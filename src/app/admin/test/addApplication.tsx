"use client"

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