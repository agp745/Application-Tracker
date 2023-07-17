'use client'

import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils/ui-utils";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSearchParams } from 'next/navigation'

interface ButtonProps {
    auth: 'google' | 'github',
}

const buttonVariants = cva(
    "flex justify-center relative border-[0.5px] focus:outline-2 transition-all duration-100 ease-in rounded-md text-neutral-400 text-sm",
    {
        variants: {
            variant: {
                default: 'bg-neutral-900 hover:bg-neutral-800 border-neutral-500',
                github: ''
            },
            size: {
                default: 'w-full px-3 py-2',
                sm: 'w-2/3 px-2 py-2',
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        },
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const OAuthButton: FC<ButtonProps> = ({className, size, variant, auth, ...props}) => {

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') as string

    return (
        <button {...props}
        className={cn(buttonVariants({variant, size, className}))}
        onClick={() => signIn(auth, {callbackUrl})}
        >
            <Image 
                src={`/${auth}-icon.svg`}
                alt={`${auth} icon`}
                width={24}
                height={24}
                className='absolute left-3 top-[6px]'
            />
            <div className='font-thin'>
                login with <span className='font-semibold capitalize'>{auth}</span>
            </div>
        </button>
    )
}

export default OAuthButton