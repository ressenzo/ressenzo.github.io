import ItemModel from "../../shared/item";
import "./Item.css";

export default function Item({
    title,
    institution,
    from,
    to,
    descriptions
}: ItemModel) {
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
