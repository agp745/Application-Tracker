import OAuthButton from "@/components/oAuthButton"

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
                <OAuthButton auth="google" />
                <OAuthButton auth="github" />
            </div>
        </main>
    )
}