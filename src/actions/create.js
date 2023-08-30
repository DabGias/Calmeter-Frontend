"use server"

import { revalidatePath } from "next/cache"

export async function createAlimento(formData) {
    const resp = await fetch("https://localhost:8080/calmeter/alimento", { method: "POST", body: JSON.stringify(Object.fromEntries(formData)), headers: { "Content-Type": "application/json" } })

    if (resp.status !== 201) {
        return { message: "Erro ao criar alimento!" }
    }

    revalidatePath("/")

    return { ok: "Alimento criado com sucesso!" }
}

export async function createRefeicao(formData) {
    const resp = await fetch("https://localhost:8080/calmeter/refeicao", { method: "POST", body: JSON.stringify(Object.fromEntries(formData)), headers: { "Content-Type": "application/json" } })

    if (resp.status !== 201) {
        return { message: "Erro ao criar refeição!" }
    }

    revalidatePath("/")

    return { ok: "Refeição criada com sucesso!" }
}
