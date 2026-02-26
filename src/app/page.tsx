import Image from "next/image"

export default async function Home() {
  return (
    <div className="h-full container-fluid">
      <div className="grid items-center justify-center h-full grid-cols-1 text-center">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Image
            src="/javascript-logo.svg"
            alt="JavaScript Profesional En México"
            width={200}
            height={200}
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <h2 className="px-20 py-3 text-2xl font-light text-white bg-black border border-gray-light border-spacing-6">Celebrando</h2>
          <h1 className="p-5 font-bold text-7xl">30 años de Javascript</h1>
          <p className="text-2xl">más de 1,444,723 soluciones en México y el Mundo</p>
        </div>
      </div>
    </div>
  )
}

