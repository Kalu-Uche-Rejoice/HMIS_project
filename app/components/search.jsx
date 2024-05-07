"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce, useDebouncedCallback } from "use-debounce";
export default function Search(){

    const searchparams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter()
    const router = useRouter()

    // function to handle search
    function handleSearch(term) {
        //const [query] = useDebounce(term, 500)
        const params = new URLSearchParams(searchparams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        router.push(`/records/findpatient?query=${term}`)
        console.log(term)
    }

    return(
        <>
            <form 
            className="flex flex-nowrap"
            
        >
            <input
                className="w-3/4 border border-cyan-900"
                type="text"
                placeholder="Search for patient record by hospital number"
                onChange={(e)=>{
                    handleSearch(e.target.value)
                }}
                defaultValue={searchparams.get('query')?.toString()}
            />
            <button
                type="submit"
                className="bg-cyan-900"
            >search</button>
        </form>
        </>
        
    )
}