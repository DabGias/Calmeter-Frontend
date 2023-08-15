import { Button } from "@/components/Button"
import { Header } from "@/components/Header"

export default function FormAddRefeicao() {
    return(
        <>
            <Header/>
            <h1 className="text-center">Adicionar refeição</h1>

            <div className="flex justify-center">
                <Button path={"/"} text={"+ Adicionar refeição"}/>
            </div>
        </>
    )
}
