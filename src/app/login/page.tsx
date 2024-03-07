import OAuthButton from "@/components/oAuthButton";
import Image from "next/image";

//fix styling for developed by part

export default function Login() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-5 text-5xl font-bold text-white text-center">
        Application Tracker
      </h1>
      <div className="group flex gap-1 text-lg items-end font-light">
        <div className="group-hover:-translate-x-1 duration-200 ease-in-out">
          developed by
        </div>
        <a
          href="https://alexgp-portfolio.vercel.app/"
          target="_blank"
          className="group-hover:scale-105 transition-all duration-200, ease-in-out"
        >
          <Image
            alt="portfolio headshot"
            src="/portfolio-headshot.png"
            width={24}
            height={24}
            className="rounded-full"
          />
        </a>
        <div className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
          Alex Perez
        </div>
      </div>
      <div className="flex flex-col gap-2 w-2/3 sm:w-1/3 mt-10">
        <OAuthButton auth="google" />
        <OAuthButton auth="github" />
      </div>
    </main>
  );
}

// export default function Login() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(<div>LOGIN PAGE HERE</div>);
//     }, 3000);
//   });
// }
