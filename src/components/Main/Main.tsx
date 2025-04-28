import { useEffect, useState } from "react";
import Item from "../Item/Item";
import LanguageModel from "../../shared/language";
import datas from "../../shared/data";
import SectionModel from "../../shared/section";
import Skill from "../Skill/Skill";
import SkillModel from "../../shared/skill";
import "./Main.css";

interface About {
    language: string;
    text: string;
    contactTitle: string;
    contactText: string;
}

const abouts: About[] = [
    {
        language: "en",
        text: "I have over 10 years of experience working with .NET and have experience in the car rental and banking sectors. I am commited to deliver high-quality, scalable applications using TDD, clean code, and design patterns.",
        contactTitle: "Contact",
        contactText: "Get in touch with me at",
    },
    {
        language: "pt",
        text: "I have over 10 years of experience working with .NET and have experience in the car rental and banking sectors. I am commited to deliver high-quality, scalable applications using TDD, clean code, and design patterns.",
        contactTitle: "Contato",
        contactText: "Entre em contato pelo",
    }
];

export default function Main({ language }: LanguageModel) {

    const [_language, setLanguage] = useState<string>("");
    const [linkedin, setLinkedin] = useState<string>("");
    const [skills, setSkills] = useState<SkillModel[]>([]);
    const [sections, setSections] = useState<SectionModel[]>([]);

    useEffect(() => {
        let selected = datas.find(x => x.language === language);
        if (selected == null)
            selected = datas.find(x => x.language === "en");

        setLanguage(selected?.language!);
        setLinkedin(selected?.linkedinUrl!);
        setSkills(selected?.skills!);
        setSections(selected?.sections!);
    }, [language])

    return (
        <>
            {
                abouts.filter(x => x.language === _language).map((x, i) => {
                    return (
                        <div key={i}>
                            <p className="fs-4">{x.text}</p>
                            <h3 className="text-uppercase mt-5">{x.contactTitle}</h3>
                            <p className="fs-4">{x.contactText} <a className="main-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
                        </div>
                    )
                })
            }

            {
                skills ?
                    skills.map((x, i) => {
                        return (
                            <Skill
                                title={x.title}
                                skills={x.skills}
                                isInlineList={x.isInlineList}
                                key={i}
                            />
                        )
                    }) :
                    null
            }

            {
                sections ?
                    sections.map((m, i) => {
                        return (
                            <div key={i}>
                                <h3 className="text-uppercase mt-5">{m.title}</h3>
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
                                                key={i}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }) :
                    null
            }
        </>
    )
}
