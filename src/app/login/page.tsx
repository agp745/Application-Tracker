import Image from "next/image"

const GoogleButton = () => {
    return (
        <button
            // onClick={() => signIn('google', {callbackUrl})}
            className='flex justify-center relative w-full px-3 py-2 bg-neutral-900 hover:bg-neutral-800 border-[0.5px] focus:outline-2 border-neutral-500 transition-all duration-100 ease-in rounded-md text-neutral-400 placeholder-neutral-500 text-sm'
        >
            <Image 
                src='/google-icon.svg'
                alt='google icon'
                width={24}
                height={24}
                className='absolute left-3 top-[6px]'
            />
            <div className='font-thin'>
                login with <span className='font-semibold'>Google</span>
            </div>
        </button>
    )
}

const GithubButton = () => {
    return (
        <button
            // onClick={() => signIn('google', {callbackUrl})}
            className='flex justify-center relative w-full px-3 py-2 bg-neutral-900 hover:bg-neutral-800 border-[0.5px] focus:outline-2 border-neutral-500 transition-all duration-100 ease-in rounded-md text-neutral-400 placeholder-neutral-500 text-sm'
        >
            <Image 
                src='/github-icon.svg'
                alt='github icon'
                width={24}
                height={24}
                className='absolute left-3 top-[6px]'
            />
            <div className='font-thin'>
                login with <span className='font-semibold'>Github</span>
            </div>
        </button>
    )
}

export default function Login() {
    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <h1 className="mb-5 text-5xl font-bold text-white">Application Tracker</h1>
            <div className="flex gap-1 text-lg items-end font-light">
                <span className="text-base">developed by</span>
                <a href="https://alexgp-portfolio.vercel.app/" target="_blank">
                    <img src="/portfolio-headshot.png" className="rounded-full w-6 h-6 align-bottom hover:-translate-y-1 transition-all duration-75 ease-in-out"/> 
                </a> 
                <span>Alex Perez</span>
            </div>
            <div className="flex flex-col gap-2 w-1/3 mt-10">
                <GoogleButton />
                <GithubButton />
            </div>
        </main>
    )
}