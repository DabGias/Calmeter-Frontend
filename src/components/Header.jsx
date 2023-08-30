import Link from "next/link";

export function Header() {
    return(
        <nav className="flex justify-between items-center p-4 bg-green-900">
            <Link className="text-amber-500 font-bold text-3xl" href={"/"}>Calmeter</Link>

            <div className="h-10 w-10 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="Foto de perfil do usuário"/>
            </div>
        </nav>
    )
}
