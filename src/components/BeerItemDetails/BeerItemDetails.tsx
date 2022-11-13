import { FunctionComponent } from 'react';
import { BeerItem } from '../../models/beer-item.model';
import styles from './BeerItemDetails.module.scss';

interface BeerItemDetailsProps {
    item: BeerItem;
}

const BeerItemDetails: FunctionComponent<BeerItemDetailsProps> = ({ item }): JSX.Element => (
    <>
        <hgroup className={styles.heading}>
            <h2>{item.name}</h2>
            <p>{item.tagline}</p>
        </hgroup>
        <div className={styles.container}>
            <div className={styles.description}>
                <p>{item.description}</p>
                {item.foodPairing?.length > 0 ? (
                    <p>{item.foodPairing[0]}</p>
                ) : null}
            </div>
            <img src={item.imageUrl} alt=""></img>
        </div>
    </>
);

export default BeerItemDetails;
