"use client"

import { createRefeicao } from "@/actions/create"
import { Button, CancelButton } from "@/components/Button"
import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { useState } from "react"

export default function FormAddRefeicao() {
    const [msg, setMsg] = useState("")

    async function handleSubmit(formData){
        const resp = await createRefeicao(formData)

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
                    <h1 className="text-center text-3xl mb-7">Adicionar refeição</h1>
                    
                    <Input placeholder={"Nome"} name={"nome"}/>
                    <p>{msg}</p>

                    <div className="flex justify-evenly">
                        <CancelButton path={"/"} text={"Cancelar"}/>
                        <Button path={"/"} text={"+ Adicionar refeição"}/>
                    </div>
                </form>
            </main>
        </>
    )
}
