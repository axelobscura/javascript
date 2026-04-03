import Image from "next/image"
import MenuEntrada from "./components/MenuEntrada";

export default async function Home() {
  return (
    <div className="h-full container-fluid bg-[#FCDC00]">
        <div className="flex flex-col justify-center items-center h-full text-center w-full">
            <div className="flex flex-col items-center justify-center text-center min-w-min bg-[#FCDC00]" style={{
              border: "1px solid #333",
              borderRadius: "50%",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              width: "fit-content",
              padding: "1% 4.5%",
            }}>
              <div className="flex flex-col items-center justify-center rounded-lg shadow-lg min-w-min" style={{
                boxShadow: "0 8px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "50%",
                padding: "18% 20%",
                paddingTop: "15%",
                background: "#FCDC00",
              }}>
                <Image
                  src="/javascript-logo.svg"
                  alt="JavaScript Profesional En México"
                  width={200}
                  height={200}
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <h2 className="px-20 py-3 text-2xl font-light text-white bg-black border-4 shadow-lg border-yellow border-spacing-24">Celebrando</h2>
                <h1 className="p-5 font-bold text-7xl">30 años de Javascript</h1>
                <p className="text-2xl">más de 1,444,723 soluciones en México y el Mundo</p>
                <div>
                  <MenuEntrada />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

