import { useEffect, useState } from "react";
import "./Skills.css";
import Language from "../../shared/language";

interface SkillModel {
    role: string;
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
            role: "Desenvolvedor Sênior .NET",
            language: "pt",
            country: "Brasil",
            linkedinUrl: "https://www.linkedin.com/in/renan-cossenzo/?locale=pt_BR",
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
            role: ".NET Sr. Software Engineer",
            language: null,
            country: "Brazil",
            linkedinUrl: "https://www.linkedin.com/in/renan-cossenzo/",
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
        <>
            <h1 className="mb-0 display-3">Renan Silva</h1>
            <h2 className="display-6">{skill?.role}</h2>
            <h5 className="mb-0">Belo Horizonte, MG - {skill?.country}</h5>
            <p>
                <strong>
                    <a href={skill?.linkedinUrl} target="_blank" rel="noreferrer">Linkedin</a>
                </strong>
            </p>
            <div className="mt-4">
                <SkillItem
                    title={skill?.title}
                    items={skill?.skills}
                    isInlineList={true}
                />

                <SkillItem
                    title={skill?.languageTitle}
                    items={skill?.languages}
                    isInlineList={false}
                />
            </div>
        </>
    );
}

interface SkillItemModel {
    title: string | undefined;
    items: string[] | undefined;
    isInlineList: boolean;
}

function SkillItem({
    title,
    items,
    isInlineList
}: SkillItemModel) {
    return (
        <>
            <h3 className="text-uppercase">{title}</h3>
            {
                isInlineList ?
                    <ul className="list-inline">
                        {
                            items?.map((v, i) => {
                                return (<li className="list-inline-item" key={i}>{v}</li>);
                            })
                        }
                    </ul> :
                    <ul className="list-unstyled">
                        {
                            items?.map((x, i) => {
                                return (<li key={i}>{x}</li>)
                            })
                        }
                    </ul>
            }
        </>
    )
}