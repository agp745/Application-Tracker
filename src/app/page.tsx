import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Home() {


  return (
    <main className="flex justify-center items-center w-full h-screen">
      <Link href="/applications">
        <Button 
          variant="link"
          size="lg"
          className="text-white bg-neutral-100/5 border border-neutral-100/10"
        >
          Go to Applications
        </Button>
      </Link>
    </main>
  )
}