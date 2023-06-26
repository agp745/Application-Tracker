'use client'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function TestPage() {

    const [isRotated, setIsRotated] = useState<boolean>(false)

    return (
        <>
            <div className='ring-0'></div>
            <button
                onClick={() => setIsRotated(!isRotated)}
                className={`bg-slate-500 p-3 border border-neutral-500`}
            >
                <ChevronDownIcon className={`text-white w-5 h-5 ${isRotated ? "rotate-180" : "rotate-back"}`} />
            </button>
            {isRotated ? <div>rotated up</div> : <div>rotated down</div>}
        </>
    )
}