const items = [
    {
        label: 'Langages',
        value: 'C# / .NET Full & Core, ASP.NET MVC/WebForms, Entity Framework, WPF/XAML, WCF/SOAP/REST, Javascript (Vanilla, Typescript, JQuery, Angular, React, VueJS), XML, HTML 5 / CSS 3, T-SQL, WordPress/php, Powershell/Bash'
    },
    {
        label:'Forge logicielle',
        value:'Git, Docker, Azure DevOps, GitHub Actions, npm, Ansible'
    },
    {
        label:'Tests',
        value:'TDD, NUnit, XUnit, Moq, Bogus, TestContainers'
    },
    {
        label:'Base de données',
        value:'MSSQL, MySQL, Oracle, Postgres, MongoDB, CosmoDB'
    },
    {
        label:'Outils',
        value:'Linqpad, Visual Studio, VS Code, Powershell, Bash, Terraform, Metabase, n8n, MongoDBCompass'
    },
    {
        label:'Virtualisation/containeurs',
        value:'Hyper-V, Vagrant, Virtual Box, Docker & Swarm, Azure Kubernetes Service'
    },
    {
        label:'Langue',
        value:'Français, Anglais'
    }
]

export const Resume = () => {
    return (
        <div>
            <div>
                <table className="table table-zebra table-xs">
                    <tbody>
                        {items.map(x =>
                            <tr key={x.label}>
                                <td className="font-medium">{x.label}</td>
                                <td>{x.value}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}