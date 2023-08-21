export function ProgressBar() {
    return(
        <div className="flex m-5 p-4 bg-gray-200 w-auto rounded-2xl justify-between items-center">
            <h3 className="text-2xl font-bold text-center text-gray-600">Meta do dia</h3>

            <div className="bg-neutral-300 w-9/12 rounded-3xl">
                <div className="bg-green-900 text-slate-200 text-right w-2/3 px-4 py-2 rounded-3xl font-bold">67%</div>
            </div>

            <h1 className="text-xl font-bold text-center text-gray-600">5350 / 8000</h1>
        </div>
    )
}
