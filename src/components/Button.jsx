import Link from "next/link"

export function Button({ path, text }) {
    return(
        <Link className="p-4 w-3/4 mx-auto rounded-2xl bg-green-900 text-slate-200 text-center font-bold" href={path}>{text}</Link>
    )
}

export function CancelButton({ path, text }) {
    return(
        <Link className="p-4 w-3/4 mx-auto rounded-2xl bg-transparent text-gray-900 text-center font-bold" href={path}>{text}</Link>
    )
}
