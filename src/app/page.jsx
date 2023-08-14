import { Button } from "@/components/Button"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="flex m-5 p-4 bg-gray-200 w-auto rounded-2xl justify-between items-center">
        <h3 className="text-2xl font-bold text-center text-gray-600">Meta do dia</h3>

        <div className="bg-neutral-300 w-9/12 rounded-3xl">
          <div className="bg-green-900 text-slate-200 text-right w-2/3 px-4 py-2 rounded-3xl font-bold">67%</div>
        </div>

        <h1 className="text-xl font-bold text-center text-gray-600">5350 / 8000</h1>
      </div>

      <main className="flex m-5 w-auto justify-between items-center">
        <aside className="bg-gray-200 w-3/12 p-4 mr-5 h-screen rounded-2xl">
          <h3 className="text-2xl text-gray-600 font-bold text-center">Resumo Semanal</h3>
        </aside>

        <section className="flex flex-col flex-auto justify-between items-center bg-gray-200 p-4 h-screen rounded-2xl">
          <h3 className="text-2xl text-left text-gray-600 font-bold w-full">{new Date().getDate()} / {new Date().getMonth() + 1}</h3>

          <Button path={"/add-alimento"} text={"+ Adicionar porção/alimento"}/>

          <Button path={"/add-refeicao"} text={"+ Adicionar refeição"}/>
        </section>
      </main>
    </>
  )
}
