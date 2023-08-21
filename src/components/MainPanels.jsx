import { Button } from "./Button"

function Alimento({ nome, calorias }) {
    return(
        <div className="w-2/5">
            <h3 className="text-xl">{nome}: {calorias}cal</h3>
        </div>
    )
}

function Refeicao({ nome, alimentos }) {
    return(
        <div className="flex justify-center w-3/4 mt-5 mb-5">
            <h1 className="text-2xl font-bold text-center">{nome}</h1>
            <br/>

            {
                alimentos.length === 0 ?
                    <Button path={"/add-alimento"} text={"+ Adicionar porção/alimento"}/>
                :
                    alimentos.map((alimento) => <Alimento key={alimento.id} {...alimento}/>)
            }
        </div>
    )
}

export async function MainPanels() {
    const data = await getData()

    async function getData() {
        const resp = await fetch("https://localhost:8080/calmeter/refeicao")

        return resp.json()
    }

    return(
        <>
            <aside className="bg-gray-200 w-3/12 p-4 mr-5 h-screen rounded-2xl">
                <h3 className="text-2xl text-gray-600 font-bold text-center">Resumo Semanal</h3>
            </aside>

            <section className="flex flex-col flex-auto justify-between items-center bg-gray-200 p-4 h-screen rounded-2xl">
                <h3 className="text-2xl text-left text-gray-600 font-bold w-full">{new Date().getDate()} / {new Date().getMonth() + 1}</h3>

                {
                    data.map((refeicao) => <Refeicao key={refeicao.id} {...refeicao}/>)
                }

                <Button path={"/add-refeicao"} text={"+ Adicionar refeição"}/>
            </section>
        </>
    )
}
