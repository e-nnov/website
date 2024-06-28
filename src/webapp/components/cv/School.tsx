export const School = () => {
    return (
        <div className="m-4 flex flex-col gap-4 print:text-sm">
            <h2 className="border-b border-b-devblue text-lg font-medium">Formations</h2>
            <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                <li>2024 : Move On Sui Bootcamp : D&eacute;veloppement de Smart Contract sur la blockchain Sui</li>
                <li>2011 : Certification 70-562 - .NET Framework 3.5, ASP.NET Application Development</li>
                <li>2009 : Certification 70-505 - .NET Framework 3.5, Windows Forms Application Development</li>
                <li>2005 : BTS Développeur Informatique, option Industrielle et Embarqu&eacute;e</li>
            </ul>
        </div>
    )
}