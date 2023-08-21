import { Header } from "@/components/Header"
import { MainPanels } from "@/components/MainPanels"
import { ProgressBar } from "@/components/ProgressBar"

export default function Home() {
  return (
    <>
      <Header/>
      <ProgressBar/>

      <main className="flex m-5 w-auto justify-between items-center">
        <MainPanels/>
      </main>
    </>
  )
}
