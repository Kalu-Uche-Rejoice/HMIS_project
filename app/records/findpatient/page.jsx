import Search from "@/app/components/search"
import PatientsList from "@/app/components/PatientsList"
import { SearchRecord } from "@/app/api/findrecords/route";
export default async function Page(params) {

    const query = params.searchParams

  // Fetch data and handle errors
  try {
    const result = await SearchRecord(query.query);
    return (
      <>
        <Search />
        {result.length > 0 ? (
          <PatientsList patients={result} />  //Pass results as patients prop
         //<PatientsList/>
        ) : (
          <p>No results found.</p>
        )}
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <>
        <Search />
        <p>Error fetching data. Please try again later.</p>
      </>
    );
  }
}
