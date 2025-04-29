import SkillModel from "../../shared/skill";
import './Skill.css';

export default function Skill({
    title,
    skills,
    isInlineList
}: SkillModel) {
    return (
        <div className="mt-5">
            <h3 className="text-uppercase">{title}</h3>
            {
                <ul className={isInlineList ? "skill-list-inline list-inline" : "list-unstyled"}>
                    {
                        skills?.map((v, i) => {
                            return (<li className={isInlineList ? "list-inline-item" : undefined} key={i}>{v}</li>);
                        })
                    }
                </ul>
            }
        </div>
    )
}