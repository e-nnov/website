import { CV } from "@/components/cv";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Développeur fullstack .net javascript à Rennes - Julien Nicole',
    description: "Développeur sénior depuis 20 ans, je vous propose mes services en développement logiciel sur les technologies .net et Javascript (React)",
  }

export default function Home() {
    return (
        <main className="w-screen h-screen print:w-full print:h-full flex items-center justify-center">
            <CV />
        </main>
    )
}