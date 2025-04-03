import "./Item.css";

export interface ItemProps {
    title: string;
    institution: string;
    from: string;
    to: string;
    descriptions: string[];
}

export default function Item() {
    return (
        <div className="mb-4 item">
            <h5>.NET Developer - <small className="text-body-secondary">Raro Labs, Brazil</small>
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
    )
}
