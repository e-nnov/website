import { Footer } from "./Footer"
import { Header } from "./Header"
import { ProfessionalExperience } from "./ProfessionalExperience"
import { Resume } from "./Resume"
import { School } from "./School"
import { Title } from "./Title"
import { PrintButton } from "./PrintButton"

export const CV = () => {

    return (
        <div className="w-full h-full flex flex-col mb-auto">
            <div className="h-full xl:m-8 xl:mb-1 border-t border-x border-black overflow-hidden">
                <div className="h-full p-4 flex flex-col gap-4 overflow-y-auto print:overflow-auto">
                    <Header />
                    <Title />
                    <Resume />
                    <ProfessionalExperience />
                </div>
            </div>
            <Footer />
            <PrintButton />
        </div>
    )
}