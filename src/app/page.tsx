import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Home() {


  return (
    <main className="flex flex-col justify-center items-center gap-3 w-full h-screen">
      <Link href="/applications">
        <Button 
          variant="link"
          size="lg"
          className="text-white bg-neutral-100/5 border border-neutral-100/10"
        >
          Go to Applications
        </Button>
      </Link>
      <Link href="/test">
        <Button 
          variant="link"
          size="lg"
          className="text-white bg-neutral-100/5 border border-neutral-100/10"
        >
          Go to Tests
        </Button>
      </Link>
    </main>
  )
}