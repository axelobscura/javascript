import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { BsFillRecordCircleFill, BsHCircleFill } from "react-icons/bs";

// d6e94ae6348c44ab9b20c475613aae01
async function getData() {
  const res = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-07-05&to=2023-07-05&sortBy=popularity&apiKey=d6e94ae6348c44ab9b20c475613aae01')
  if (!res.ok) {
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
        <div className="dash">
          {data.articles.map((dat: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; body: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; url: string; urlToImage: string; }) => {
            return (
              <Link key={dat.id} href={dat.url} target="_blank" className="news">
                <div className="news_img">
                  <img src={dat.urlToImage} alt="javascript en méxico" />
                </div>
                <p>{dat.title}</p>
              </Link>
              
            )
          })}
        </div>
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
