import Item, { ItemProps } from "./Item";
import Language from "./language";
import "./Main.css";

interface MainSection {
    language: string | null;
    sections: Section[];
}

interface Section {
    title: string;
    items: ItemProps[];
}

export default function Main({ language }: Language) {

    const sections: MainSection[] = [
        {
            language: "pt",
            sections: [
                {
                    title: "Experiencias",
                    items: []
                },
                {
                    title: "Educação",
                    items: []
                }
            ]
        },
        {
            language: null,
            sections: [
                {
                    title: "Experiences",
                    items: []
                },
                {
                    title: "Education",
                    items: []
                }
            ]
        }
    ]

    return (
        <div className="right-column">
            <h3>Experiences</h3>

            <div className="mb-4 item">
                <h5>.NET Developer -
                    <small className="text-body-secondary">Raro Labs, Brazil</small>
                </h5>
                <p className="text-uppercase"><small className="text-body-secondary">November 2021 - Current</small></p>
                <p>
                    As a developer in the Pix team at Banco BMG, I work daily with .NET, AWS, RabbitMQ, Kafka, Postgres,
                    Oracle and Redis. I am also involved in discussions regarding the architecture of new Pix solutions.
                </p>
                <p>
                    I am part of the team that was responsible for a project to optimize application availability,
                    achieving 99% of availability, and automate the collection of statistics, reducing the process from
                    5 days to just 20 minutes.
                </p>
            </div>

            <div className="mb-4 item">
                <h5>Full-stack developer -
                    <small className="text-body-secondary">Localiza Rent a Car, Brazil</small>
                </h5>
                <p className="text-uppercase"><small className="text-body-secondary">August 2019 - October 2021</small></p>
                <p>
                    I worked as a developer in an agile team within the Compra de Carros area (the team responsible for
                    purchasing cars for the company), developing .NET and Angular applications. These applications were
                    hosted on AWS and used REST APIs and RabbitMQ for communication, with data storage in SQL Server and
                    Sybase.
                </p>
                <p>
                    In this team, I was part of a large project designed to help Compra de Carros make better decisions
                    in certain opportunities.
                </p>
            </div>

            <div className="mb-4 item">
                <h5>Full-stack developer -
                    <small className="text-body-secondary">Cast Group, Brazil</small>
                </h5>
                <p className="text-uppercase"><small className="text-body-secondary">October 2018 - August 2019</small></p>
                <p>
                    I was allocated as a full-stack developer at Localiza Rent a Car client, maintaining and creating
                    applications that were used daily by the Compra de Carros area. These applications were written in
                    .NET and used SQL Server and Sybase for data storage, asynchronous communication through RabbitMQ
                    and REST requests to communicate to other APIs. There were also Angular applications for the
                    frontend.
                </p>
            </div>

            <h3>Education</h3>
            <div className="mb-4 item">
                <h5>Graduate in Distributed Applications Architecture Specialization -
                    <small className="text-body-secondary">Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte,
                        Brazil</small>
                </h5>
                <p className="text-uppercase"><small className="text-body-secondary">April 2021 - May 2022</small></p>
            </div>

            <div className="mb-4 item">
                <h5>Bachelor in Information Systems -
                    <small className="text-body-secondary">Pontifícia Universidade Católica de Minas Gerais, Contagem,
                        Brazil</small>
                </h5>
                <p className="text-uppercase"><small className="text-body-secondary">February 2016 - December 2020</small></p>
            </div>

            <div className="mb-4 item">
                <h5>Computer Technician -
                    <small className="text-body-secondary">Colégio COTEMIG, Belo Horizonte, Brazil</small>
                </h5>
                <p className="text-uppercase"><small className="text-body-secondary">February 2013 - November 2015</small></p>
            </div>

            <Item />
        </div>
    )
}
