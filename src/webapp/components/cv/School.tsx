import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement } from "react"

type SchoolItem = {
    date: string
    content: string | ReactElement
}

const items: SchoolItem[] = [
    {
        date: "2024",
        content: <div className="flex flex-col lg:flex-row gap-1">
            Move On Sui Bootcamp : D&eacute;veloppement de Smart Contract sur la blockchain Sui
            <span className="print:hidden">
                (<a href="https://www.risein.com/certificates/50c50a1d" target="_blank" className="inline-block link link-primary">
                    <span className=" flex gap-1 items-center">
                        certificat
                        <FontAwesomeIcon className="w-2 h-2" icon={faExternalLink} />
                    </span>
                </a>)
            </span>
        </div>
    },
    {
        date: "2011",
        content: "Certification 70-562 - .NET Framework 3.5, ASP.NET Application Development"
    },
    {
        date: "2009",
        content: "Certification 70-505 - .NET Framework 3.5, Windows Forms Application Development"
    },
    {
        date: "2005",
        content: "BTS Développeur Informatique, option Industrielle et Embarquée"
    }
]

export const School = () => {
    return (
        <div className="m-4 print:mx-0 flex flex-col gap-4 print:text-sm">
            <h2 className="border-b border-b-devblue text-lg font-medium">Formations</h2>
            <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                {items.map((x, i) => <Item key={i} item={x} />)}
            </ul>
        </div>
    )
}

type ItemProps = {
    item: SchoolItem
}

const Item = ({ item: { date, content } }: ItemProps) =>
    <li className="flex">
        <span className="inline-block w-[40px]">{date}</span>
        <span>:&nbsp;</span>
        {content}
    </li>