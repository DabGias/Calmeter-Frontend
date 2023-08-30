"use client"

import { createAlimento } from "@/actions/create"
import { Button, CancelButton } from "@/components/Button"
import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { useState } from "react"

export default function FormAddAlimento() {
    const [msg, setMsg] = useState("")

    async function handleSubmit(formData){
        const resp = await createAlimento(formData)

        if (resp.message){
            setMsg(resp.message)

            return
        }

        redirect("/")
    }

    return(
        <>
            <Header/>
            <main className="flex flex-col justify-center items-center h-screen">

                <form action={handleSubmit} className="bg-gray-200 p-4 w-2/5 rounded-2xl">
                    <h1 className="text-center text-3xl mb-7">Adicionar alimento</h1>

                    <Input placeholder={"Nome"} name={"nome"}/>
                    <Input placeholder={"Descrição"} name={"descricao"}/>
                    <Input placeholder={"Calorias"} name={"calorias"}/>
                    <p>{msg}</p>

                    <div className="flex justify-evenly">
                        <CancelButton path={"/"} text={"Cancelar"}/>
                        <Button path={"/"} text={"+ Adicionar porção/alimento"}/>
                    </div>
                </form>
            </main>
        </>
    )
}
