import { FunctionComponent } from 'react';

import { BeerItem } from '../../models/beer-item.model';
import BeerItemDetails from '../BeerItemDetails/BeerItemDetails';
import styles from './BeerItemList.module.scss';

interface BeerItemListProps {
    items: BeerItem[];
}

const BeerItemList: FunctionComponent<BeerItemListProps> = ({ items }): JSX.Element => (
    <ul className={styles.beerGrid}>
        {items.map(item => (
            <li key={item.id}>
                <BeerItemDetails item={item} />
            </li>
        ))}
    </ul>
);

export default BeerItemList;
