"use client";

import OAuthButton from "@/components/oAuthButton";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const params = useSearchParams();

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
        <LoginError error={params.get("error")} />
      </div>
    </main>
  );
}

function LoginError({ error }: { error: string | null }) {
  let errorMessage = "";

  // other error messages to account for: "OAuthSignin"
  switch (error) {
    case "OAuthAccountNotLinked":
      errorMessage =
        "There is an error with your account. It is probably already linked with another oAuth account";
      break;
    case "Callback":
      errorMessage = "Callback Error. Try using another Auth provider";
      break;
    case "UndefinedUser":
      errorMessage = "Undefined User. Try logging in again.";
      break;
    default:
      errorMessage = "";
  }

  return <div className="text-red-500 text-center">{errorMessage}</div>;
}

// https://app-tracker-three.vercel.app/
