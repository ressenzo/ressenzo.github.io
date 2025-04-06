import { useEffect, useState } from "react";
import Item, { ItemProps } from "../Item/Item";
import Language from "../../shared/language";
import "./Main.css";

interface MainModel {
    language: string | null;
    sections: Section[];
}

interface Section {
    title: string;
    items: ItemProps[];
}

export default function Main({ language }: Language) {

    const sections: MainModel[] = [
        {
            language: "pt",
            sections: [
                {
                    title: "Experiências",
                    items: [
                        {
                            order: 1,
                            title: "Desenvolvedor full-stack",
                            institution: "Cast Group, Belo Horizonte, MG",
                            from: "Outubro 2018",
                            to: "Agosto 2019",
                            descriptions: [
                                "Atuei como desenvolvedor full-stack alocado no cliente Localiza Rent a Car, mantendo e criando aplicações usadas pelo time de Compra de Carros. O backend era desenvolvido em .NET, com banco de dados SQL Server e Sybase, comunicação assíncrona com RabbitMQ, além de requisições REST com outras APIs. O frontend era desenvolvido em Angular."
                            ]
                        },
                        {
                            order: 2,
                            title: "Desenvolvedor full-stack",
                            institution: "Localiza Rent a Car, Belo Horizonte, MG",
                            from: "Agosto 2019",
                            to: "Outubro 2021",
                            descriptions: [
                                "Trabalhei como desenvolvedor em um time ágil na área de Compra de Carros (time responsável pela aquisição de carros pela companhia), desenvolvendo aplicações em .NET e Angular. Essas aplicações utilizavam a infraestrutura da AWS e se comunicavam através de requisições REST e RabbitMQ, além de armazenamento dos dados em SQL Server e Sybase.",
                                "Nesse período, fiz parte de um grande projeto desenvolvido para ajudar o time de Compra de Carros a tomar melhores decisões na montagem e aquisição de carros."
                            ]
                        },
                        {
                            order: 3,
                            title: "Desenvolvedor .NET",
                            institution: "Raro Labs, Belo Horizonte, MG",
                            from: "Novembro 2021",
                            to: "Atual",
                            descriptions: [
                                "Como desenvolver no time do pix do Banco BMG, trabalho diariamente com .NET, AWS, RabbitMQ, Kafka, Postgres, Oracle e Redis. Também estou envolvido em discussões arquiteturais de novas soluções do pix.",
                                "Atuei nos projetos responsáveis por otimizar a disponibilidade das aplicações do pix, atingindo a marca de 99%, e automatizar a coleta de estatísticas mensais do meio de pagamento, reduzindo o processo de 5 dias para cerca de 20 minutos."
                            ]
                        }
                    ]
                },
                {
                    title: "Educação",
                    items: [
                        {
                            order: 1,
                            title: "Técnico em Informática",
                            institution: "Colégio COTEMIG, Belo Horizonte, MG",
                            from: "Fevereiro 2013",
                            to: "Novembro 2015",
                            descriptions: []
                        },
                        {
                            order: 2,
                            title: "Bacharel em Sistemas de Informação",
                            institution: "Pontifícia Universidade Católica de Minas Gerais, Contagem, MG",
                            from: "Fevereiro 2016",
                            to: "Dezembro 2020",
                            descriptions: []
                        },
                        {
                            order: 3,
                            title: "Pós-Graduado em Arquitetura de Aplicações Distribuídas",
                            institution: "Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte, MG",
                            from: "Abril 2021",
                            to: "Maio 2022",
                            descriptions: []
                        }
                    ]
                }
            ]
        },
        {
            language: null,
            sections: [
                {
                    title: "Experiences",
                    items: [
                        {
                            order: 1,
                            title: "Full-stack developer",
                            institution: "Cast Group, Brazil",
                            from: "October 2018",
                            to: "August 2019",
                            descriptions: [
                                "I was allocated as a full-stack developer at Localiza Rent a Car client, maintaining and creating applications that were used daily by the Compra de Carros area. These applications were written in .NET and used SQL Server and Sybase for data storage, asynchronous communication through RabbitMQ and REST requests to communicate to other APIs. There were also Angular applications for the frontend."
                            ]
                        },
                        {
                            order: 2,
                            title: "Full-stack developer",
                            institution: "Localiza Rent a Car, Brazil",
                            from: "August 2019",
                            to: "October 2021",
                            descriptions: [
                                "I worked as a developer in an agile team within the Compra de Carros area (the team responsible for purchasing cars for the company), developing .NET and Angular applications. These applications were hosted on AWS and used REST APIs and RabbitMQ for communication, with data storage in SQL Server and Sybase.",
                                "In this team, I was part of a large project designed to help Compra de Carros make better decisions in certain opportunities."
                            ]
                        },
                        {
                            order: 3,
                            title: ".NET Developer",
                            institution: "Raro Labs, Brazil",
                            from: "November 2021",
                            to: "Current",
                            descriptions: [
                                "As a developer in the pix team at Banco BMG, I work daily with .NET, AWS, RabbitMQ, Kafka, Postgres, Oracle and Redis. I am also involved in discussions regarding the architecture of new pix solutions.",
                                "I am part of the team that was responsible for a project to optimize application availability, achieving 99% of availability, and automate the collection of statistics, reducing the process from 5 days to just 20 minutes."
                            ]
                        }
                    ]
                },
                {
                    title: "Education",
                    items: [
                        {
                            order: 1,
                            title: "Computer Technician",
                            institution: "Colégio COTEMIG, Brazil",
                            from: "February 2013",
                            to: "November 2015",
                            descriptions: []
                        },
                        {
                            order: 2,
                            title: "Bachelor in Information Systems",
                            institution: "Pontifícia Universidade Católica de Minas Gerais, Brazil",
                            from: "February 2016",
                            to: "December 2020",
                            descriptions: []
                        },
                        {
                            order: 3,
                            title: "Graduate in Distributed Applications Architecture Specialization",
                            institution: "Pontifícia Universidade Católica de Minas Gerais, Brazil",
                            from: "April 2021",
                            to: "May 2022",
                            descriptions: []
                        }
                    ]
                }
            ]
        }
    ]

    const [selectedSection, setSelectedSection] = useState<MainModel | undefined>();

    useEffect(() => {
        let selected = sections.find(x => x.language === language);
        if (selected == null)
            selected = sections.find(x => x.language == null);
        setSelectedSection(selected);
    }, [language])

    return (
        <div className="right-column">
            {
                selectedSection?.sections.map((m) => {
                  return (
                    <>
                        <h3>{m.title}</h3>
                        {
                            m.items.sort((a, b) => b.order - a.order).map((v, i) => {
                                return (
                                    <Item
                                        title={v.title}
                                        descriptions={v.descriptions}
                                        from={v.from}
                                        institution={v.institution}
                                        order={v.order}
                                        to={v.to}
                                    />
                                )
                            })
                        }
                    </>
                  )
                })
            }
        </div>
    )
}
