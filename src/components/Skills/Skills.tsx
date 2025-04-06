import { useEffect, useState } from "react";
import "./Skills.css";
import Language from "../../shared/language";

interface SkillModel {
    language: string | null;
    country: string;
    linkedinUrl: string;
    title: string;
    skills: string[];
    languageTitle: string;
    languages: string[];
}

export default function Skills({ language }: Language) {

    const [skill, setSkill] = useState<SkillModel | undefined>(undefined);

    useEffect(() => {
        let selected = skills.find(x => x.language === language);
        if (selected == null)
            selected = skills.find(x => x.language == null);
        setSkill(selected);
    }, [language])

    const skills: SkillModel[] = [
        {
            language: "pt",
            country: "Brasil",
            linkedinUrl: "https://www.linkedin.com/in/renan-cossenzo/",
            title: "Conhecimentos",
            skills: [
                "C#",
                ".NET",
                "RabbitMQ",
                "Redis",
                "Comunicação assíncrona",
                "TDD",
                "Metodologias ágeis",
                "Azure DevOps",
            ],
            languageTitle: "Idiomas",
            languages: [
                "Português nativo",
                "Inglês avançado"
            ]
        },
        {
            language: null,
            country: "Brazil",
            linkedinUrl: "https://www.linkedin.com/in/renan-cossenzo/?locale=en_US",
            title: "Skills",
            skills: [
                "C#",
                ".NET",
                "RabbitMQ",
                "Redis",
                "Asynchronous communication",
                "TDD",
                "Agile",
                "Azure DevOps",
            ],
            languageTitle: "Languages",
            languages: [
                "Native portuguese",
                "Advanced english"
            ]
        }
    ]

    return (
        <div className="left-column d-flex flex-column">
            <h1 className="mb-0">Renan Silva</h1>
            <p className="mb-0">Belo Horizonte, MG - {skill?.country}</p>
            <p>
                <strong>
                    <a href={skill?.linkedinUrl} target="_blank">Linkedin</a>
                </strong>
            </p>
            <h3>{skill?.title}</h3>
            <ul className="list-unstyled">
                {
                    skill?.skills.map((v, i) => {
                        return (<li key={i}>{v}</li>);
                    })
                }
            </ul>

            <h3>{skill?.languageTitle}</h3>
            <ul className="list-unstyled">
                {
                    skill?.languages.map((x, i) => {
                        return (<li key={i}>{x}</li>)
                    })
                }
            </ul>
        </div>

    );
}


