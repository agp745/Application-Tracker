"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils/ui-utils"

import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

import { usePathname } from "next/navigation"

const formSchema = z.object({
    company: z.string({ required_error: "company name is required" }).min(1),
    applied_date: z.date({ required_error: "applied date is required" }),
    position: z.string({ required_error: "position is required" }).min(1),
    location: z.string({ required_error: "location is required" }).min(1),
    salary: z.string(),
    application_type: z.string({ required_error: "application type is required" }),
    cover_letter: z.boolean({ required_error: "cover letter is required" }),
    status: z.string({ required_error: "status is required" })
})

export function ApplicationForm() {

  const router = useRouter()
  const pathname = usePathname()
  const user_id = pathname.replace('/applications/','')

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        company: "",
        // applied_date: new Date(),
        position: "",
        location: "",
        salary: "",
        // application_type: "",
        cover_letter: false,
        status: "pending",
      }
    })
   
    async function onSubmit(data: z.infer<typeof formSchema>) {

      const dataWithId = {
        ...data,
        user_id
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/applications`, {
        method: "post",
        body: JSON.stringify(dataWithId),
        headers: {
            "Content-Type": "application/json"
        }
      })

      const result = await res.json()
      console.log(result)
      router.refresh()

      form.reset()
    
      toast({
        className: 'bg-black border-green-700',
        title: "Application submitted sucessfully",
      })
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="amazon" {...field} />
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="applied_date"
              render={({field}) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Date Applied</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left text-neutral-200 hover:text-neutral-300 font-normal bg-black hover:bg-neutral-800/10 border-neutral-700  ring-offset-black",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                                format(field.value, "PPP")
                            ) : (
                                <span className="text-neutral-400">Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          //@ts-expect-error
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="position"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                            <Input placeholder="software developer" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name="location"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                            <Input placeholder="remote" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name="salary"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Salary</FormLabel>
                        <FormControl>
                            <div>
                                <div className="absolute ml-3 mt-2 z-20 text-neutral-200">$</div>
                                <Input placeholder="70,000" {...field} className="relative text-right" />
                            </div>
                        </FormControl>
                        <FormDescription className="ml-2 italic">if no salary, enter <span className="font-bold">0</span></FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name="application_type"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Application Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="border-neutral-700 ring-offset-black focus:ring-neutral-700">
                                    <SelectValue placeholder="Select an application type" className="placeholder:text-neutral-400"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="website">Website</SelectItem>
                                <SelectItem value="linkedin">LinkedIn</SelectItem>
                                <SelectItem value="indeed">Indeed</SelectItem>
                                <SelectItem value="other">other</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name="status"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="border-neutral-700 ring-offset-black focus:ring-neutral-700">
                                    <SelectValue placeholder="Select the status of your application" className="placeholder:text-neutral-400"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="accepted">Accepted</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                                <SelectItem value="ghosted">Ghosted</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name="cover_letter"
                render={({field}) => (
                    <FormItem className="flex flex-row items-center justify-center space-x-3 rounded-md">
                        <FormControl>
                        <Checkbox
                            checked={field.value}
                            //@ts-expect-error
                            onCheckedChange={field.onChange}
                            className="border mt-2 border-neutral-400 ring-offset-black focus:ring-neutral-700"
                        />
                        </FormControl>
                        <FormLabel className="text-neutral-200">
                            Cover letter submitted?
                        </FormLabel>
                    </FormItem>
                )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
}
