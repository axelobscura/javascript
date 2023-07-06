import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { BsFillRecordCircleFill, BsHCircleFill } from "react-icons/bs";

// d6e94ae6348c44ab9b20c475613aae01
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData();

  console.log(data);
  return (
    <main className="flex min-h-screen">
      <div className="relative flex flex-col items-center justify-center min-h-screen w-screen">
        <h1 className='text-gray-dark text-9xl font-light font-sans'>JAVASCRIPT</h1>
        {data.map((dat: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; body: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => {
          return (
            <h1 key={dat.id}>{dat.title}</h1>
          )
        })}
        <ul className="flex p-3">
          <li className="p-2">
            <Link href="/blog">
              <BsHCircleFill size={'2em'} style={{'color':'#111'}}/>
            </Link>
          </li>
          <li className="p-2">
            <Link href='/contacto'>
              <BsFillRecordCircleFill size={'2em'} style={{'color':'#111'}}/>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
