import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ProfessionalExperience = () => {
    return (
        <div className="m-4 print:m-0 flex flex-col gap-4 print:text-sm">
            <h2 className="border-b border-b-devblue text-lg font-medium">Exp&eacute;rience professionnelle</h2>
            {/* E-nnov */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <h3 className="font-medium">Consultant en d&eacute;veloppement logiciel, E-nnov (g&eacute;rant), Vern-sur-Seiche</h3>
                    <span className="text-sm print:text-xs italic">Depuis Mars 2022</span>
                </div>
                <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                    <li>Conseil en architecture logicielle (TDD, DDD, micro-services, CQRS, Message Queue)</li>
                    <li>Optimisation des performances des bases de données (SQL Server, MongoDB, MySQL)</li>
                    <li>Mise en place de chaine de d&eacute;veloppement compl&egrave;te avec d&eacute;ploiement automatique (CI/CD, Ansible, GitHub Actions, Azure Devops, Bitbucket, Docker &amp; Traefik)</li>
                    <li>Migration progressive de serveurs applicatifs vers des containers Docker</li>
                    <li>D&eacute;veloppement d&apos;applications web et de sites sur les technologies .net et React/Typescript (d&eacute;veloppeur fullstack)</li>
                    <li>Mise en place de tableau de bord &agrave; partir de m&eacute;triques (Prometheus, Grafana, Metabase)</li>
                </ul>
            </div>
            <span className="flex gap-2 items-center">
                <FontAwesomeIcon className="w-4 h-4 text-devblue" icon={faUserTie} />
                <span className="font-medium">Clients</span>
            </span>
            {/* Azenn */}
            <div className="flex flex-col gap-4 pl-4 break-after-page">
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                        <div className="flex flex-col gap-1">
                            <h4 className="font-medium">Azenn</h4>
                            <span className="text-xs">Distributeur r&eacute;seaux informatiques, t&eacute;l&eacute;coms, datacenters et s&eacute;curit&eacute;</span>
                        </div>
                        <span className="text-sm italic">Depuis Janvier 2024</span>
                    </div>
                    <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                        <li>D&eacute;veloppement d&apos;un outil de nettoyage d&rsquo;une base de donn&eacute;es MySQL de 44 Go</li>
                        <li>D&eacute;veloppement d&rsquo;un int&eacute;grateur produit AS400 &gt; WordPress Woo Commerce</li>
                    </ul>
                </div>
            </div>
            {/* Hexaom */}
            <div className="flex flex-col gap-4 pl-4">
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                        <div className="flex flex-col gap-1">
                            <h4 className="font-medium">Hexaom</h4>
                            <span className="text-xs">Constructeur de maisons, r&eacute;novation, promotion immobili&egrave;re, am&eacute;nagement foncier et services</span>
                        </div>
                        <span className="text-sm italic">Depuis Mai 2023</span>
                    </div>
                    <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                        <li>
                            <span>D&eacute;veloppement d&apos;un outil d&apos;analyse du march&eacute; de la construction de maisons individuelles :</span>
                            <ul className="list-[square] pl-4 lg:pl-8">
                                <li>Int&eacute;gration mensuelle de donn&eacute;es depuis data.gouv.fr</li>
                                <li>Cr&eacute;ation de tableaux de bord sur l&apos;outil Metabase</li>
                                <li>Affichage des tableaux de bord dans Microsoft Teams</li>
                                <li>H&eacute;bergement (VPS OVH)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/* SantePlus */}
            <div className="flex flex-col gap-4 pl-4">
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                        <div className="flex flex-col gap-1">
                            <h4 className="font-medium">SantePlus</h4>
                            <span className="text-xs">Centres m&eacute;dicaux multidisciplinaire</span>
                        </div>
                        <span className="text-sm italic">Depuis Mars 2023</span>
                    </div>
                    <h5>D&eacute;veloppeur FullStack .Net / React</h5>
                    <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                        <li>
                            <span>Refonte compl&egrave;te du CI/CD des 70+ repositories GitHub :</span>
                            <ul className="list-[square] pl-4 lg:pl-8">
                                <li>Cr&eacute;ation d&apos;une API d&eacute;di&eacute;e au d&eacute;ploiement avec l&apos;utilisation d&apos;Ansible</li>
                                <li>Cr&eacute;ation d&apos;une GitHub Action pour piloter le d&eacute;ploiement</li>
                                <li>Mise en place de Git Flow pour la gestion des features, bugfix, hotfix, releases</li>
                            </ul>
                        </li>
                        <li className="print:pt-4">
                            <span>Cr&eacute;ation d&apos;un projet d&apos;analyse des centraux t&eacute;l&eacute;phoniques Asterisk :</span>
                            <ul className="list-[square] pl-4 lg:pl-8">
                                <li>Agr&eacute;gation de plus de 3000 appels quotidiens</li>
                                <li>D&eacute;tection des appels en absence</li>
                            </ul>
                        </li>
                        <li>
                            <span>Cr&eacute;ation d&apos;un projet de t&acirc;ches &agrave; effectuer :</span>
                            <ul className="list-[square] pl-4 lg:pl-8">
                                <li>Appel en absence provenant des Asterisk avec cl&ocirc;ture automatique de la t&acirc;che en cas d&apos;appel
                                    r&eacute;ussi</li>
                                <li>Demande de rappel provenant du site sante-plus.com (via n8n)</li>
                                <li>Formulaire de contact provenant du site sante-plus.com (via n8n)</li>
                            </ul>
                        </li>
                        <li>Mise en place de l&apos;outil n8n d&apos;automatisation de flux</li>
                    </ul>
                </div>
            </div>
            {/* Cyberjobs.fr */}
            <div className="flex flex-col gap-4 pl-4 break-after-page">
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                        <div className="flex flex-col gap-1">
                            <h4 className="font-medium">Cyberjobs.fr</h4>
                            <span className="text-xs">Portail d&apos;offres d&apos;emploi sp&eacute;cialis&eacute; dans la cybers&eacute;curit&eacute;</span>
                        </div>
                        <span className="text-sm italic">Mars 2022 - Ao&ucirc;t 2023</span>
                    </div>
                    <h5>D&eacute;veloppeur FullStack .Net / React</h5>
                    <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                        <li>
                            <span>Accompagnement du client dans le d&eacute;veloppement de fonctionnalit&eacute;s sur la plateforme :</span>
                            <ul className="list-[square] pl-4 lg:pl-8">
                                <li>Mise en place d&apos;une nouvelle architecture (Domain Driven Design)</li>
                                <li>D&eacute;veloppement d&apos;une messagerie instantan&eacute;e</li>
                                <li>D&eacute;veloppement de tests d&apos;aptitudes</li>
                                <li>Application des recommandations SEO</li>
                                <li>Mise en place d&apos;une nouvelle stack Docker : Cluster MongoDB, MariaDB, Elk Stack, Prometheus/Grafana, Traefik</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Entities */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-medium">Directeur technique, Entities (co-fondateur), Rennes</h3>
                        <span className="text-xs">Agence web sp&eacute;cialis&eacute;e dans les m&eacute;tiers de l&apos;immobilier</span>
                    </div>
                    <span className="text-sm italic">Avril 2010 - F&eacute;vrier 2022</span>
                </div>
                <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                    <li>Gestion de l&apos;infrastructure interne et de production : Hyper-V, Win/Linux, Docker, Azure</li>
                    <li>Lead technique logiciel et web</li>
                    <li>Administration & profiling du serveur SQL (Microsoft SQL Server, SQL Profiling)</li>
                    <li>D&eacute;finition de la roadmap logicielle</li>
                    <li>D&eacute;veloppement du logiciel EntitiesPro : .Net, C#, ASP NET WebForms &amp; MVC, API Rest, IdentityServer, T-SQL, Octopus, Azure Devops</li>
                    <li>Support et formation des utilisateurs</li>
                    <li>Migration du legacy vers des micro-services h&eacute;berg&eacute;s avec Docker</li>
                    <li>D&eacute;veloppement des passerelles : flux bidirectionnel avec 250 partenaires</li>
                    <li>D&eacute;veloppement web : WordPress, php 7.4, plugins et th&egrave;mes sur mesure</li>
                    <li>Mise en place de la forge logicielle WordPress : Docker, Webpack, npm, Nexus, PUC Updater</li>
                    <li>Optimisation technique des sites : Dareboost, Page Speed, GTMetrix, Screaming Frog</li>
                    <li>Consultant informatique pour les marques Tissot et Krier : D&eacute;finition des user stories, maintenance applicative Angular 4, Java, .Net</li>
                    <li>Participation aux soutenances de projet</li>
                </ul>
            </div>
            {/* AVAL */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-medium">Développeur logiciel, A Vendre à louer, Paris</h3>
                        <span className="text-xs">Editeur portail immobilier &amp; logiciel</span>
                    </div>
                    <span className="text-sm italic">Mars 2005 - Mars 2010</span>
                </div>
                <ul className="list-disc marker:text-devblue pl-4 lg:pl-8 print:pl-8">
                    <li>Participation &agrave; la d&eacute;finition de la roadmap logicielle</li>
                    <li>D&eacute;veloppement d&apos;un logiciel de gestion immobili&egrave;re : .Net, C#, WinForms &amp; WebForms, SOAP 1.2, T-SQL</li>
                    <li>D&eacute;veloppement des passerelles : reprise de donn&eacute;es, flux bidirectionnel</li>
                    <li>Participation au d&eacute;veloppement du BackOffice de la soci&eacute;t&eacute; : import, export, statistiques</li>
                    <li>Administration des serveurs web et SGBD</li>
                </ul>
            </div>
        </div>
    )
}