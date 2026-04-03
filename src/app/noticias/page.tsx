"use client"
import { useEffect, useState } from "react"

export default function Noticias() {

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch(`https://api.mediastack.com/v1/news?access_key=${process.env.NEWS_API}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNoticias();
  }, []);

  return (
    <main className="flex min-h-screen">
      <h1>NOTICIAS</h1>
    </main>
  )
}
