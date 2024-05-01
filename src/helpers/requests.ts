import { AlcoholByVolumeFilter } from '../constants/filter.constants';
import { BeerItemResponse } from '../models/beer-item.interface';
import { BeerItem } from '../models/beer-item.model';

/**
* Fetches list of beers from a local json file
*/
export const fetchBeerList = (abvFilter = AlcoholByVolumeFilter.Weak): Promise<BeerItem[]> => {
    const jsonFile = abvFilter === AlcoholByVolumeFilter.Weak ? 'weak-beer.json' : 'strong-beer.json';
    const headers = new Headers({
        'Accept': 'application/json'
      });
    return fetch(`/data/${jsonFile}`, { headers })
        .then(res => res.json() as Promise<BeerItemResponse[]>)
        .then(items => items.map(item => new BeerItem(item)));
};


/**
* Fetches list of beers from Punk API.
* IMPORTANT: No longer works, as the API was shut down!
*/
// export const fetchBeerList = (page = 1, abvFilter = AlcoholByVolumeFilter.Weak, itemsPerPage = BEERS_PER_PAGE): Promise<BeerItem[]> => {
//     const abvParam = abvFilter === AlcoholByVolumeFilter.Weak ? 'abv_lt=5' : 'abv_gt=4.9999';
//     return fetch(`${PUNK_API_URL}?page=${page}&per_page=${itemsPerPage}&${abvParam}`)
//         .then(res => res.json() as Promise<BeerItemResponse[]>)
//         .then(items => items.map(item => new BeerItem(item)));
// };