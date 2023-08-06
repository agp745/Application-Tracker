"use client"

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

import { ApplicationForm } from "./applicationForm"

interface DialogProps {
    buttonName: string,
    title: string,
    description: string,
}

export function ApplicationDialouge({ buttonName, title, description }: DialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="text-black">
                    {buttonName}
                </Button>
            </DialogTrigger>
            <DialogContent className='bg-black text-white scale-90 sm:scale-100 overflow-y-scroll'>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <ApplicationForm />
            </DialogContent>
        </Dialog>
    )
}