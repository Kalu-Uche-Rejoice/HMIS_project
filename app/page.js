import Image from "next/image";
import RecordForm from './components/records'
export default function Home() {
  return (
    <main>
      <form action="/post" method="post">
          <input type="Submit" value={"submit"}/>
      </form>
      <RecordForm/>
      
    </main>
  );
}
