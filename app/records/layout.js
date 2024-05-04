import Link from "next/link"

export default function RecordsLayout({children}) {
    return(
        <section className="flex flex-row">
            <div className="w-2/12 mr-4">
                <nav className="h-screen bg-cyan-900">
                    <ul>
                        <li className="p-4 m-2 hover:bg-white">
                            <Link href={"http://localhost:3000/records"}>
                                Dashboard
                            </Link>
                        </li>
                        <li className="p-4 m-2 hover:bg-white">
                            <Link href={"http://localhost:3000/records/newpatient"}>
                                Create New patient Record
                            </Link>
                        </li>
                        <li className="p-4 m-2 hover:bg-white">
                            <Link
                                href={"http://localhost:3000/records/findpatient"}
                            >
                                Find old patient Record
                            </Link>
                            </li>
                    </ul>
                </nav>
            </div>
            <div className="container">
            {children}
            </div>
        </section>
    )
}