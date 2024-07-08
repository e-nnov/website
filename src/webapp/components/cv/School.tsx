type SchoolItem = {
    date: string
    content: string
}

const items: SchoolItem[] = [
    {
        date: "2024",
        content: "Move On Sui Bootcamp : Développement de Smart Contract sur la blockchain Sui"
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
        <div className="m-4 flex flex-col gap-4 print:text-sm">
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
    <li><span className="inline-block w-[40px]">{date}</span>{`: ${content}`}</li>