import { LandingPage } from "@/components/landing-page"
import { AuthModalTrigger } from "@/components/auth/AuthModalTrigger"

export default function Home() {
  return (
    <>
      <LandingPage />
      <AuthModalTrigger />
    </>
  )
}
