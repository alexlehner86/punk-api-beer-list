import { BEERS_PER_PAGE, PUNK_API_URL } from '../constants/app.constants';
import { AlcoholByVolumeFilter } from '../constants/filter.constants';
import { BeerItemResponse } from '../models/beer-item.interface';
import { BeerItem } from '../models/beer-item.model';

/**
* Fetches list of beers from Punk API.
*/
export const fetchBeerList = (abvFilter = AlcoholByVolumeFilter.Weak, itemsPerPage = BEERS_PER_PAGE): Promise<BeerItem[]> => {
    const abvParam = abvFilter === AlcoholByVolumeFilter.Weak ? 'abv_lt=5' : 'abv_gt=4.9999';
    return fetch(`${PUNK_API_URL}?per_page=${itemsPerPage}&${abvParam}`)
        .then(res => res.json() as Promise<BeerItemResponse[]>)
        .then(items => items.map(item => new BeerItem(item)));
};
