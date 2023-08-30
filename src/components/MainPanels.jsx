import { Button } from "./Button"

function Alimento({ nome, calorias }) {
    return(
        <div className="w-3/5 mx-auto">
            <p className="text-xl">{nome}: {calorias}cal</p>
        </div>
    )
}

function Refeicao({ nome, alimentos }) {
    return(
        <div className="flex flex-col justify-center w-3/4 mt-5 mb-5">
            <h1 className="text-2xl font-bold text-center mb-5">{nome}</h1>

            {
                alimentos.length === 0 ?
                    <Button path={"/add-alimento"} text={"+ Adicionar porção/alimento"}/>
                :
                    <div className="h-full">
                        { alimentos.map((alimento) => <Alimento key={alimento.id} {...alimento}/>) }
                    </div>
            }
        </div>
    )
}

export async function MainPanels() {
    const data = [
        {
            id: 1,
            nome: "Teste 1",
            alimentos: []
        },
        {
            id: 2,
            nome: "Teste 2",
            alimentos: [
                {
                    id: 1,
                    nome: "batata rustica",
                    descricao: "batata bem rustica",
                    calorias: 3000
                }
            ]
        },
        {
            id: 3,
            nome: "Teste 3",
            alimentos: [
                {
                    id: 1,
                    nome: "batata rustica",
                    descricao: "batata bem rustica",
                    calorias: 3000
                },
                {
                    id: 2,
                    nome: "batata rustica",
                    descricao: "batata bem rustica",
                    calorias: 3000
                },
                {
                    id: 3,
                    nome: "batata rustica",
                    descricao: "batata bem rustica",
                    calorias: 3000
                },
                {
                    id: 4,
                    nome: "batata rustica",
                    descricao: "batata bem rustica",
                    calorias: 3000
                },
                {
                    id: 5,
                    nome: "batata rustica",
                    descricao: "batata bem rustica",
                    calorias: 3000
                },
                {
                    id: 6,
                    nome: "batata rustica",
                    descricao: "batata bem rustica",
                    calorias: 3000
                }
            ]
        }
    ]

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
