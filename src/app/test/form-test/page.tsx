"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
 
export default function ToastSimple() {
  const { toast } = useToast()
  const [count, setCount] = useState<number>(0)
 
  return (
    <Button
      className="text-black"
      variant="outline"
      onClick={() => {
        toast({
          description:(
            <div className="bg-white rounded text-black">your message has been sent.</div>
          ),
        })
        setCount(count + 1)
      }}
    >
      Show Toast
      {count}
    </Button>
  )
}