import { FunctionComponent } from "react";
import { BeerItem } from "../../models/beer-item.model";

interface BeerItemDetailsProps {
    item: BeerItem;
}

const BeerItemDetails: FunctionComponent<BeerItemDetailsProps> = ({ item }): JSX.Element => (
    <>
        <hgroup>
            <h3>{item.name}</h3>
            <p>{item.tagline}</p>
        </hgroup>
        <img src={item.imageUrl} alt=""></img>
        <p>{item.description}</p>
        {item.foodPairing?.length > 0 ? (
            <p>{item.foodPairing[0]}</p>
        ) : null}
    </>
);

export default BeerItemDetails;
