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
        <div className={styles.flexRow}>
            <div className={styles.description}>
                <p>{item.description}</p>
                <p className={styles.infoItem}>
                    🍺&nbsp;<span>Alcohol by Volume: </span>
                    {item.abv}%
                </p>
                {item.foodPairing?.length > 0 ? (
                    <p className={styles.infoItem}>
                        🍴&nbsp;<span>Food Pairing: </span>
                        {item.foodPairing[0]}
                    </p>
                ) : null}
            </div>
            <img src={item.imageUrl} alt=""></img>
        </div>
    </>
);

export default BeerItemDetails;
