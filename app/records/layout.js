export default function RecordsLayout({children}) {
    return(
        <section className="flex flex-row">
            <div className="w-2/12 mr-4">
                <nav className="h-screen bg-cyan-900">
                    <ul>
                        <li className="p-4 m-2 hover:bg-white">Dashboard</li>
                        <li className="p-4 m-2 hover:bg-white">Create New patient Record</li>
                        <li className="p-4 m-2 hover:bg-white">Find old patient Record</li>
                    </ul>
                </nav>
            </div>
            <div className="container">
            {children}
            </div>
        </section>
    )
}