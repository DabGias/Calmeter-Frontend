export function Input({ id, name, label, placeholder, type }) {
    return(
        <>
            {
                label ?
                    <label className="block w-4/5 mx-auto mb-2 text-slate-200" htmlFor={id}>{label}</label>
                :
                    null
            }
            <input className="block w-4/5 p-5 mb-7 mx-auto rounded-2xl bg-gray-300 placeholder:text-slate-500" id={id} name={name} type={type} placeholder={placeholder}/>
        </>
    )
}
