import { useDebugValue, useEffect, useState } from "react";
import "./Skills.css";

interface SkillsProps {
    language: string;
}

interface SelectedSkill {
    language: string | null;
    country: string;
    linkedinUrl: string;
    title: string;
    skills: string[];
    languageTitle: string;
    languages: string[];
}

export default function Skills({ language }: SkillsProps) {

    const [selectedSkill, setSelectedSkill] = useState<SelectedSkill | undefined>(undefined);

    useEffect(() => {
        let selected = skills.find(x => x.language === language);
        if (selected == null)
            selected = skills.find(x => x.language == null);
        console.log(selected)
        setSelectedSkill(selected);
    }, [language])

    const skills: SelectedSkill[] = [
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
            <p className="mb-0">Belo Horizonte, MG - {selectedSkill?.country}</p>
            <p>
                <strong>
                    <a href="https://www.linkedin.com/in/renan-cossenzo/?locale=en_US" target="_blank">Linkedin</a>
                </strong>
            </p>
            <h3>{selectedSkill?.title}</h3>
            <ul className="list-unstyled">
                {
                    selectedSkill?.skills.map((v, i) => {
                        return (<li key={i}>{v}</li>);
                    })
                }
            </ul>

            <h3>{selectedSkill?.languageTitle}</h3>
            <ul className="list-unstyled">
                {
                    selectedSkill?.languages.map((x, i) => {
                        return (<li key={i}>{x}</li>)
                    })
                }
            </ul>
        </div>

    );
}


