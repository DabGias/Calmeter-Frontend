import Link from "next/link"

export function Button({ text, path }) {
    return(
        <Link className="p-4 w-3/4 rounded-2xl bg-green-900 text-slate-200 text-center font-bold" href={path}>{text}</Link>
    )
}
