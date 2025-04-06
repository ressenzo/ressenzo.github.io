import "./Item.css";

export interface ItemProps {
    order: number;
    title: string;
    institution: string;
    from: string;
    to: string;
    descriptions: string[];
}

export default function Item({
    title,
    institution,
    from,
    to,
    descriptions
}: ItemProps) {
    return (
        <div className="mb-4 item">
            <h5>{title} - <small className="text-body-secondary">{institution}</small>
            </h5>
            <p className="text-uppercase"><small className="text-body-secondary">{from} - {to}</small></p>
            {
                descriptions.map((p, i) => {
                    return (<p key={i}>{p}</p>)
                })
            }
        </div>
    )
}
