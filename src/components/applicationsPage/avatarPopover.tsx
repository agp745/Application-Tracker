import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"

export const AvatarPopover = ({ children }: { children: React.ReactNode}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
    )
}
  