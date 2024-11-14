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
            <div className="h-full xl:m-8 xl:mb-1 print:m-0 border-t border-x border-black print:border-none overflow-hidden print:overflow-visible">
                <div className="h-full p-4 print:p-0 flex flex-col gap-4 print:gap-1 overflow-y-auto print:overflow-visible">
                    <Header />
                    <Title />
                    <Resume />
                    <ProfessionalExperience />
                    <School />
                </div>
            </div>
            <Footer />
            <PrintButton />
        </div>
    )
}