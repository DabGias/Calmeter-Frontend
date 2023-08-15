import { Button } from "@/components/Button"
import { Header } from "@/components/Header"

export default function FormAddAlimento() {
    return(
        <>
            <Header/>
            <h1 className="text-center">Adicionar alimento</h1>

            <div className="flex justify-center">
                <Button path={"/"} text={"+ Adicionar porção/alimento"}/>
            </div>
        </>
    )
}
