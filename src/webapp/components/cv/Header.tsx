import Image from "next/image"
import ProfilePicture from "@/public/julien-nicole-developpeur-dotnet-rennes.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faCode } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const Header = () => {
    return (
        <header className="flex gap-1 justify-between items-start">
            <div className="flex">
                <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                        <Image src={ProfilePicture} alt="julien nicole développeur dotnet javascript rennes" />
                    </div>
                </div>
                <div className="flex flex-col p-2">
                    <span className="font-medium">Julien Nicole</span>
                    <div className="flex gap-1 items-center">
                        <FontAwesomeIcon className="w-4 h-4 text-devblue" icon={faAt} />
                        <span>j.nicole@e-nnov.fr</span>
                    </div>
                    <div className="w-full flex gap-1 lg:justify-center print:hidden">
                        <div className="tooltip tooltip-bottom" data-tip="https://www.linkedin.com/in/juliennicole/">
                            <a href="https://www.linkedin.com/in/juliennicole/">
                                <FontAwesomeIcon className="w-6 h-6 text-devblue" icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="tooltip tooltip-bottom" data-tip="https://github.com/Jni75">
                            <a href="https://github.com/Jni75">
                                <FontAwesomeIcon className="w-6 h-6" icon={faGithub} />
                            </a>
                        </div>
                        <div className="tooltip tooltip-bottom before:whitespace-pre-line" data-tip={`Code source :
                            https://github.com/e-nnov-fr/website`}>
                            <a href="https://github.com/e-nnov-fr/website">
                                <FontAwesomeIcon className="w-6 h-6 text-devblue" icon={faCode} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block stats stats-vertical shadow">
                <div className="stat">
                    <div className="stat-title">Exp&eacute;rience</div>
                    <div className="stat-value"><YearExperience /><span className="text-xs">ans</span></div>
                    <div className="stat-desc">{`dev. depuis 2005`}</div>
                </div>
            </div>
        </header>
    )
}

const YearExperience = () => {
    const start = 2005
    const current = new Date().getFullYear()

    return current - start
}