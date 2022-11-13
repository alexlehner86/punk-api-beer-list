import { FunctionComponent } from 'react';

import { BeerItem } from '../../models/beer-item.model';
import BeerItemDetails from '../BeerItemDetails/BeerItemDetails';

interface BeerItemListProps {
    items: BeerItem[];
}

const BeerItemList: FunctionComponent<BeerItemListProps> = ({ items }): JSX.Element => (
    <ul>
        {items.map(item => (
            <li>
                <BeerItemDetails item={item} />
            </li>
        ))}
    </ul>
);

export default BeerItemList;
